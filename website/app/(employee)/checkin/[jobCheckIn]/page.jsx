import { CheckIn } from "@/components/CheckIn/CheckIn";

function JobCheckIn({ params }) {
    const param = params.jobCheckIn;
    const [jobId, companyName] = param.split("_");
    
    return (
        <>
            <div>Hi</div>
            <CheckIn jobId={jobId} />
        </>
    );
}
export default JobCheckIn;
