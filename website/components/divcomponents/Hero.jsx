import Image from "next/image";
import Link from "next/link";

function Hero() {
    return (
        <div className='bg-cover min-h-screen  bg-base-200 bg-gradient-to-l from-indigo-900 py-32 pl-32'>
            <div className='flex flex-col lg:flex-row'>
                <div className='flex flex-col w-auto min-w-96 max-lg:text-center text-left max-lg:pb-10'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 justify-center'>
                        DeWages
                    </h1>
                    <h2 className='text-2xl sm:text-2xl md:text-5xl md:leading-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 mb-6'>
                        A decentralized hiring process
                    </h2>
                    <h3 className='text-xl sm:text-2xl md:text-3xl font-bold mb-4 justify-center'>
                        Get paid on time. Transparency. No-trust policy.
                    </h3>
                    <Link href='/verify'>
                        <button className='p-3 bg-indigo-600 hover:bg-indigo-700 transition-all duration-100 rounded-xl'>
                            Get Verified!
                        </button>
                    </Link>
                </div>
                <div className='flex flex-col lg:flex-row'>
                    <div className='w-96 h-80 mx-8 flex flex-col items-center shadow-xl rounded-xl'>
                        <Image src={"/growth.png"} height='180' width='180' />
                        <div className='z-20 flex flex-col p-5 items-center text-center'>
                            <h2 className='card-title'>Looking for Work</h2>
                            <p>
                                Get paid according to work hours. <br />
                                Assurance of wages and salary.
                            </p>
                        </div>
                    </div>
                    <div className='w-96 h-80 mx-8 flex flex-col items-center shadow-xl rounded-xl'>
                        <Image
                            src={"/handshake.png"}
                            height='180'
                            width='180'
                        />
                        <div className='z-20 flex flex-col p-5 items-center text-center'>
                            <h2 className='card-title'>Here to hire</h2>
                            <p>
                                Hire work force for your company.
                                <br />
                                Track work hours and pay accordingly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hero;
