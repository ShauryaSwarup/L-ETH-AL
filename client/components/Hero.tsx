function Hero() {
    return (
        <div className='hero min-h-screen bg-base-200'>
            <div className='hero-content text-center'>
                <div className='max-w-md'>
                    <h1 className='text-5xl font-bold'>Your decentralized Work Portal</h1>
                    <div className="p-5 flex align-middle justify-around">
                        <button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-gray-300 text-black m-5'>
                            I want a job
                        </button>
                        <button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-gray-300 text-black m-5'>
                            I want to hire
                        </button>
                    </div>

                    <button className='btn btn-primary'>Get Started</button>
                </div>
            </div>
        </div>
    );
}
export default Hero;
