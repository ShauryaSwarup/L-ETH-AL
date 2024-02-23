import Link from "next/link";

function Hero() {
	return (
		<div className="hero min-h-screen bg-base-200 flex flex-col items-center justify-center px-4">
			<div className="text-center max-w-md">
				<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
					Your Decentralized Work Portal
				</h1>
				<div className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8">
					<Link href="/joblisting">
						<button className="btn btn-lg bg-gray-300 text-black mb-2 sm:mb-0 sm:mr-2 rounded-xl hover:bg-slate-400">
							I want a job
						</button>
					</Link>
					<Link href="/employeelisting">
						<button className="btn btn-lg bg-gray-300 text-black mb-2 sm:mb-0 sm:mr-2 rounded-xl hover:bg-slate-400">
							I want to hire
						</button>
					</Link>
				</div>
				<button className="btn btn-primary">Get Started</button>
			</div>
		</div>
	);
}
export default Hero;
