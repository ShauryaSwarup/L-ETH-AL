// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC721Burnable} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract DWagesNFT is ERC721Burnable {
    uint256 private _tokenIds;
    uint256 private _itemsAssigned;

    uint256 listingPrice = 0.025 ether;
    address payable owner;

    mapping(uint256 => MarketToken) public idToMarketToken;

    struct MarketToken {
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool burnt;
    }

    event MarketTokenCreated(
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool burnt
    );
    event Redeemed(uint256 tokenId, address owner);

    constructor() ERC721("dWages Tokens", "DWT") {
        owner = payable(msg.sender);
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
    function companyMints(uint256 price) public payable returns (uint) {
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
            payable(msg.sender),
            payable(address(this)),
            price,
            false
        );

        _transfer(msg.sender, address(this), tokenId);
        emit MarketTokenCreated(
            tokenId,
            msg.sender,
            address(this),
            price,
            false
        );
    }

    /* allows someone to resell a token they have purchased */
    function redeemToken(uint256 tokenId) public payable {
        require(
            idToMarketToken[tokenId].owner == msg.sender,
            "Only item owner can perform this operation"
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
        emit Redeemed(tokenId, address(0));
    }

    /* Creates the sale of a marketplace item */
    /* Transfers ownership of the item, as well as funds between parties */
    function transferToWorker(uint256 tokenId) public payable {
        uint price = idToMarketToken[tokenId].price;
        address seller = idToMarketToken[tokenId].seller;
        require(
            msg.value == price,
            "Please submit the asking price in order to complete the purchase"
        );
        idToMarketToken[tokenId].owner = payable(msg.sender);
        idToMarketToken[tokenId].seller = payable(address(0));
        _itemsAssigned++;
        _transfer(address(this), msg.sender, tokenId);
        payable(owner).transfer(listingPrice);
        payable(seller).transfer(msg.value);
    }

    /* Returns all unsold market items */
    function fetchUnsoldTokens() public view returns (MarketToken[] memory) {
        uint itemCount = _tokenIds;
        uint availableItemCount = _tokenIds - _itemsAssigned;
        uint currentIndex = 0;

        MarketToken[] memory tokens = new MarketToken[](availableItemCount);
        for (uint i = 0; i < itemCount; i++) {
            if (idToMarketToken[i].owner == address(this)) {
                uint currentId = i;
                MarketToken storage currentItem = idToMarketToken[currentId];
                tokens[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return tokens;
    }

    /* Returns only items that a user has purchased */
    function fetchWorkerNFTs() public view returns (MarketToken[] memory) {
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

    /* Returns only tokens a user has listed */
    function fetchTokensListedByCompany()
        public
        view
        returns (MarketToken[] memory)
    {
        uint totalTokensCount = _tokenIds;
        uint itemCount = 0;
        uint currentIndex = 0;

        for (uint i = 0; i < totalTokensCount; i++) {
            if (idToMarketToken[i + 1].seller == msg.sender) {
                itemCount += 1;
            }
        }

        MarketToken[] memory items = new MarketToken[](itemCount);
        for (uint i = 0; i < totalTokensCount; i++) {
            if (idToMarketToken[i + 1].seller == msg.sender) {
                uint currentId = i + 1;
                MarketToken storage currentItem = idToMarketToken[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }
}
