"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import Link from "next/link";
import { useAccount } from "wagmi";

export default function Navbar() {
    const account = useAccount();
    return (
        <>
            <div className='navbar bg-base-100'>
                <div className='navbar-start'>
                    <div className='dropdown'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost lg:hidden'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-5 w-5'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M4 6h16M4 12h8m-8 6h16'
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                        >
                            <li>
                                <Link href='/joblisting'>Find a Job</Link>
                            </li>
                            <li>
                                <Link href='/employeelisting'>Hire People</Link>
                            </li>
                            <li>
                                <Link href='/nftlisting'>My NFTs</Link>
                            </li>
                        </ul>
                    </div>
                    <Link
                        href='/'
                        className='btn btn-ghost text-xl text-indigo-500 rounded-lg'
                    >
                        deWages
                    </Link>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className='menu menu-horizontal px-1 font-bold bg-gray-500 bg-opacity-30 rounded-lg'>
                        <li>
                            <Link href='/joblisting'>Find a Job</Link>
                        </li>
                        <li>
                            <Link href='/employeelisting'>Hire People</Link>
                        </li>
                        <li>
                            <Link href='/nftlisting'>My NFTs</Link>
                        </li>
                        <li>
                            <Link href='/currentjob'>Attendance</Link>
                        </li>
                        <li>
                            <Link href='/myjobpostings'>My Jobs</Link>
                        </li>
                        <li>
                            <Link href='/postnewjob'>Post a Job</Link>
                        </li>
                    </ul>
                </div>
                <div className='navbar-end'>
                    <ConnectButton />
                </div>
            </div>
        </>
    );
}
