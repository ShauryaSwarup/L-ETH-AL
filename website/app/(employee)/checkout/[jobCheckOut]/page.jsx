import { CheckOut } from "@/components/Checkout/CheckOut";

function JobCheckIn({ params }) {
	const param = params.jobCheckOut;
	const [jobId, companyName] = param.split("_");

	return (
		<>
			<div>Hi</div>
			<CheckOut jobId={jobId} />
		</>
	);
}
export default JobCheckIn;
