import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Show({ job }) {
    console.log(job);
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
                        <p className="font-helvetica text-gray-500 dark:text-gray-400">
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
                            {job.id}
                        </p>
                    </div>
                </div>

                {/* Industry */}
                <div>
                    <h2 className="font-helvetica font-semibold text-2xl">
                        Industry
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 font-helvetica">
                        {job.industry}
                    </p>
                </div>

                {/* Job Level */}
                <div>
                    <h2 className="font-helvetica font-semibold text-2xl">
                        Level
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 font-helvetica">
                        {job.level.title}
                    </p>
                </div>

                {/* Location */}
                <div>
                    <h2 className="font-helvetica font-semibold text-2xl">
                        Location
                    </h2>
                    <div className="flex gap-2 items-center text-gray-500 dark:text-gray-400 font-helvetica">
                        <p>{job.country.name} </p>
                        <span className="font-helvetica text-gray-500">
                            - {job.location_type}
                        </span>
                    </div>
                </div>

                {/* Status of applied job */}
                <div>
                    <h2 className="font-helvetica font-semibold text-2xl">
                        Status
                    </h2>
                    <p
                        className={`font-helvetica tracking-wide text-gray-400 ${job.status === "Offer" ? "text-green-500 dark:text-green-400" : job.status === "Rejected" ? "text-red-500" : job.status === "Pending" ? "dark:text-orange-400 text-orange-500" : ""}`}
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

                {/* Market Salary Range (powered by Groq AI) */}
                {job.salary_range && (
                    <>
                        <div>
                            <div className="flex items-center gap-2">
                                <h2 className="font-helvetica font-semibold text-2xl">
                                    Market Salary Range{" "}
                                </h2>
                                <div className="badge bg-blue-800 text-white dark:bg-blue-800 font-helvetica font-semibold">
                                    AI
                                </div>
                            </div>

                            <p className="mb-3 font-helvetica text-gray-600 text-sm">
                                powered by Groq AI
                            </p>

                            {/* Salary ranges */}
                            <div className="flex flex-col gap-2 mb-4">
                                <div className="flex items-center gap-2">
                                    <span className="w-8">
                                        <img
                                            src={job.country.flag}
                                            className="w-full border border-gray-400"
                                        />
                                    </span>
                                    <p className="font-helvetica tracking-wide text-gray-500 dark:text-gray-400">
                                        {
                                            job.salary_range
                                                .min_based_on_job_country
                                        }{" "}
                                        -{" "}
                                        {
                                            job.salary_range
                                                .max_based_on_job_country
                                        }
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-2 items-center">
                                {/* Sources */}
                                <div className="dropdown dropdown-right dropdown-end">
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        className="btn btn-sm shadow-sm bg-gray-200 border-gray-300 dark:border-gray-700 dark:bg-slate-800 flex gap-1 items-center"
                                    >
                                        <p className="font-normal font-semibold text-gray-500 dark:text-gray-400 text-sm">
                                            Sources
                                        </p>
                                        <div className="ml-1 badge border-gray-400 dark:bg-slate-600 font-bold badge-sm">
                                            {job.salary_range.sources.length}
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex="-1"
                                        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 lg:w-100 p-2 shadow-sm"
                                    >
                                        {job.salary_range.sources &&
                                            job.salary_range.sources.map(
                                                (source, index) => {
                                                    return (
                                                        <li
                                                            className="mb-2 rounded-lg bg-gray-200 dark:bg-gray-800"
                                                            key={index}
                                                        >
                                                            <a>{source}</a>
                                                        </li>
                                                    );
                                                },
                                            )}
                                    </ul>
                                </div>

                                {/* Based on company data or not */}
                                <div
                                    className="tooltip tooltip-bottom"
                                    data-tip={
                                        job.salary_range.is_company_specific
                                            ? "Research based on company salary data."
                                            : "Research based on general salary data."
                                    }
                                >
                                    <div className="badge bg-gray-200 text-gray-500 border-gray-300 shadow-sm dark:bg-gray-800 dark:border-gray-700 py-4 rounded-sm font-semibold dark:text-gray-400 cursor-pointer">
                                        {job.salary_range.is_company_specific
                                            ? "Company-specific"
                                            : "General"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* Job Position Link */}
                {job.job_link && (
                    <>
                        <div className="mt-2">
                            <a
                                href={job.job_link}
                                target="_blank"
                                className="font-helvetica font-semibold text-lg text-gray-500 hover:border-b hover:border-blue-500 cursor-pointer"
                            >
                                Link to job posting{" "}
                            </a>
                            <sup>
                                <FontAwesomeIcon icon="fa-solid fa-up-right-from-square" />
                            </sup>
                        </div>
                    </>
                )}

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
