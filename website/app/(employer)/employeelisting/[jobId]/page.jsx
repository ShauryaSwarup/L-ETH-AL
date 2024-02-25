import HireAllApplicants from "@/components/HireAllApplicants";

const EmployeeListing = ({ params }) => {
	const jobId = params.jobId;
	console.log(jobId);
	return (
		<>
			<HireAllApplicants jobId={jobId} />
		</>
	);
};

export default EmployeeListing;
