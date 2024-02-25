function NFTCard({ nft }) {
    return (
        <>
            <div key={nft.tokenId}>
                <div className='relative w-124 text-primary-content m-5 transition-all duration-300 rounded-xl bg-indigo-800 hover:bg-indigo-900'>
                    <div className='card-body'>
                        <h2 className='card-title'>NFT {nft.tokenId}</h2>
                        <div className='font-light'>
                            <p>{`Owner: ${nft.owner}`}</p>
                            <p>{`Price: ${nft.price}`}</p>
                            <p>{`Redeemed Status: ${nft.redeemed}`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default NFTCard;
