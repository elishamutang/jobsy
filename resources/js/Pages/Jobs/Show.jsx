export default function Show({ job }) {
    console.log(job);
    return (
        <>
            <h1 className="">{job.title}</h1>
        </>
    );
}
