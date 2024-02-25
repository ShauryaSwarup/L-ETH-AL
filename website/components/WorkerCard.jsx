function WorkerCard({ worker }) {
    return (
        <div
            key={worker.walletAddress}
            className='card w-124 bg-gray-600 rounded-xl m-1 font-semibold transition-transform duration-300 hover:scale-105'
        >
            <div className='card-body'>
                <h2 className='card-title'>{worker.name}</h2>
                <p className='truncate max-w-full'>
                    Wallet Address: {worker.walletAddress}
                </p>
                <p>Status: {worker.isEmployed ? "Employed" : "Unemployed"}</p>
                <div className='card-actions justify-end'>
                    <button className='btn'>Hire Now</button>
                </div>
            </div>
        </div>
    );
}
export default WorkerCard;
