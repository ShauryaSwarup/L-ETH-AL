// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC721Burnable} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

interface IWorkerCompanyMgmt {
    function hasRole(bytes32 role, address account) external view returns (bool);
    error CallerNotCompany(address caller);
    error CallerNotWorker(address caller);
}


contract DWagesNFT is ERC721Burnable {
    uint256 public _tokenIds;
    uint256 listingPrice = 0.025 ether;
    address payable owner;
    IWorkerCompanyMgmt wcmcontract;

    mapping(uint256 => MarketToken) public idToMarketToken;
    mapping(uint256 => bool) public isRedeemed;

    struct MarketToken {
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool redeemed;
    }

    event MarketTokenCreated(
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool redeemed
    );

    event Redeemed(
        uint256 tokenId
    );

    constructor(address _contract) ERC721("dWages Tokens", "DWT") {
        owner = payable(msg.sender);
        wcmcontract = IWorkerCompanyMgmt(_contract);
    }

    /* Updates the listing price of the contract */
    function updateListingPrice(uint _listingPrice) public payable {
        require(
            owner == msg.sender,
            "Only marketplace owner can update listing price."
        );
        listingPrice = _listingPrice;
    }

    /* Returns the listing price of the contract */
    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    /* Mints a token and lists it in the marketplace */
    function mint(uint256 price) public payable returns (uint) {
        // require(wcmcontract.hasRole(WORKER_ROLE, msg.sender),"Need to be worker");
        uint256 newTokenId = _tokenIds;
        _mint(msg.sender, newTokenId);
        createMarketToken(newTokenId, price);
        _tokenIds++;
        return newTokenId;
    }

    function createMarketToken(uint256 tokenId, uint256 price) private {
        require(price > 0, "Price must be at least 1 wei");
        require(
            msg.value == listingPrice,
            "Price must be equal to listing price"
        );
        idToMarketToken[tokenId] = MarketToken(
            tokenId,
            payable(address(this)), // seller is contract itself
            payable(msg.sender), // owner is msg.sender 
            price,
            false
        );
        emit MarketTokenCreated(
            tokenId,
            address(this),
            msg.sender,
            price,
            false
        );
    }

    /* allows someone to redeem a token they have purchased */
    function redeemToken(uint256 tokenId) public payable {
        require(
            idToMarketToken[tokenId].owner == msg.sender,
            "Only NFT owner can perform this operation"
        );
        require(
            msg.value == listingPrice,
            "Price must be equal to listing price"
        );
        burn(tokenId);
        idToMarketToken[tokenId] = MarketToken(
            tokenId,
            payable(address(0)),
            payable(address(0)),
            0,
            true
        );
        emit Redeemed(tokenId);
    }

    /* Returns only items that a user has purchased */
    function fetchUserNFT() public view returns (MarketToken[] memory) {
        uint totalTokensCount = _tokenIds;
        uint itemCount = 0;
        uint currentIndex = 0;

        for (uint i = 0; i < totalTokensCount; i++) {
            if (idToMarketToken[i + 1].owner == msg.sender) {
                itemCount += 1;
            }
        }

        MarketToken[] memory items = new MarketToken[](itemCount);
        for (uint i = 0; i < totalTokensCount; i++) {
            if (idToMarketToken[i + 1].owner == msg.sender) {
                uint currentId = i + 1;
                MarketToken storage currentItem = idToMarketToken[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }
}
