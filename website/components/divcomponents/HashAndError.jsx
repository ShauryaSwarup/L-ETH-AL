import React from "react";

function HashAndError({ hash, isConfirming, isConfirmed, error }) {
	return (
		<div className="rounded p-4">
			<div>
				{hash && (
					<div className="truncate text-center rounded-xl p-2 bg-gray-700 my-1">
						Transaction Hash: {hash}
					</div>
				)}
				{isConfirming && (
					<div className="text-blue-500 text-center rounded-xl p-2 bg-gray-700 my-1">
						Waiting for confirmation...
					</div>
				)}
				{isConfirmed && (
					<div className="text-green-500 text-center rounded-xl p-2 bg-gray-700 my-1">
						Transaction confirmed.
					</div>
				)}
				{error && (
					<div className="text-red-500 text-center rounded-xl p-2 bg-gray-700 my-1">
						{error.shortMessage || error.message}
					</div>
				)}
			</div>
		</div>
	);
}

export default HashAndError;
