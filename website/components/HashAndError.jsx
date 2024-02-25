import React from 'react'

function HashAndError({hash, isConfirming, isConfirmed, error}) {
  return (
		<div>
			<div>
				{hash && <div className="truncate">Transaction Hash: {hash}</div>}
				{isConfirming && <div>Waiting for confirmation...</div>}
				{isConfirmed && <div>Transaction confirmed.</div>}
				{error && <div>{error.shortMessage || error.message}</div>}
			</div>
		</div>
	);
}

export default HashAndError