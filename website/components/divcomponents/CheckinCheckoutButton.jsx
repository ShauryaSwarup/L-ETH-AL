import Link from "next/link";

function CheckinCheckoutButton({job}) {
    return (
        <>
            <div className='flex gap-3'>
                <Link href={`/employeelisting/${job.jobId}`}>
                    <button className='btn rounded-xl'>
                        Check Applications
                    </button>
                </Link>
                <Link href={`/attendance/${job.jobId}`}>
                    <button className='btn rounded-xl'>Checkin/Checkout</button>
                </Link>
            </div>
        </>
    );
}
export default CheckinCheckoutButton;
