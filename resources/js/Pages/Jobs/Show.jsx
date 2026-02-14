export default function Show({ job, aiResponse }) {
    console.log(job);
    console.log(aiResponse);
    return (
        <>
            <section className="self-start w-full flex flex-col gap-5">
                {/* Top section */}
                <div className="flex">
                    {/* Job title */}
                    <div className="flex flex-col w-full justify-between">
                        <h1 className="font-semibold w-3/4 font-helvetica text-2xl">
                            {job.title}
                        </h1>

                        {/* Company */}
                        <p className="font-helvetica text-gray-400">
                            {/* FUTURE: This can be a link to the company */}
                            at{" "}
                            <span className="hover:border-b cursor-pointer ease-in-out transition-all">
                                {job.company}
                            </span>
                            <span>, {job.type}.</span>
                        </p>
                    </div>

                    {/* Job ID */}
                    <div className="md:border md:border-5 md:px-4 md:rounded-full flex">
                        <p className="font-helvetica text-5xl self-start md:text-3xl md:self-center font-bold">
                            1
                        </p>
                    </div>
                </div>

                {/* Industry */}
                <div>
                    <h2 className="font-helvetica font-semibold text-2xl">
                        Industry
                    </h2>
                    <p className="text-gray-400 font-helvetica">
                        {job.industry}
                    </p>
                </div>

                {/* Job Level */}
                <div>
                    <h2 className="font-helvetica font-semibold text-2xl">
                        Level
                    </h2>
                    <p className="text-gray-400 font-helvetica">
                        {job.level.title}
                    </p>
                </div>

                {/* Location */}
                <div>
                    <h2 className="font-helvetica font-semibold text-2xl">
                        Location
                    </h2>
                    <div className="flex gap-2 items-center text-gray-400 font-helvetica">
                        <p>{job.country.name} </p>
                        <span className="font-helvetica text-gray-500">
                            - {job.location_type}
                        </span>
                        <span className="w-8">
                            <img src={job.country.flag} className="w-full" />
                        </span>
                    </div>
                </div>

                {/* Status of applied job */}
                <div>
                    <h2 className="font-helvetica font-semibold text-2xl">
                        Status
                    </h2>
                    <p
                        className={`font-helvetica tracking-wide text-gray-400 ${job.status === "Offer" ? "text-green-400" : job.status === "Rejected" ? "text-red-500" : job.status === "Pending" ? "text-orange-500" : ""}`}
                    >
                        {job.status}
                    </p>
                </div>

                {/* Date applied and closing date */}
                <div>
                    <h2 className="font-helvetica font-semibold text-2xl">
                        Dates
                    </h2>
                    <div>
                        <p className="font-helvetica text-gray-500">
                            You applied on{" "}
                            <span className="border-b border-b-green-500">
                                {job.date_applied}
                            </span>
                        </p>
                        <p className="font-helvetica text-gray-500">
                            This posting closes on{" "}
                            <span className="border-b border-b border-b-red-500">
                                {job.closing_date}
                            </span>
                        </p>
                    </div>
                </div>

                {/* Job Position Link */}
                <div className="mt-2">
                    <a
                        href={job.job_link}
                        target="_blank"
                        className="font-helvetica font-semibold text-lg text-gray-400 hover:border-b"
                    >
                        Link to job posting.
                    </a>
                </div>

                {/* Last updated */}
                <div className="mt-5 md:flex-row md:justify-between flex flex-col justify-between w-full items-center">
                    <p className="font-helvetica text-sm text-gray-600">
                        Created on <span>{job.created_at}</span>
                    </p>
                    <p className="font-helvetica text-sm text-gray-600">
                        Last updated on <span>{job.updated_at}</span>
                    </p>
                </div>
            </section>
        </>
    );
}
