import Actions from "../Components/Actions";
import { Link } from "@inertiajs/react";

export default function JobsHome({ jobs }) {
    return (
        <>
            {/* TODO(elishamutang): Complete search bar functionality. */}
            <Actions />

            <div className="flex justify-between w-full mt-7">
                <div className="badge rounded-sm bg-slate-600 py-4 self-end font-helvetica font-semibold tracking-wide text-white">
                    Total jobs - {jobs.total}
                </div>

                {/* Add New Job */}
                <Link
                    href="/jobs/create"
                    className="btn bg-blue-800"
                    as="button"
                >
                    Add New Job
                </Link>
            </div>

            {/* List of jobs */}
            <section className="m-5 w-full h-full flex flex-col gap-3">
                {jobs.data.map((item, index) => {
                    return (
                        <Link
                            href={`/jobs/${item.id}`}
                            className="btn btn-soft w-full text-wrap cursor-pointer"
                            key={index}
                        >
                            <div className="w-full flex">
                                <span className="text-left md:w-full truncate">
                                    {item.title}
                                </span>
                            </div>
                        </Link>
                    );
                })}

                {/* Pagination */}
                <div className="join self-center mt-5">
                    {jobs.links.map((item, index) => {
                        return (
                            <Link
                                href={item.url ? item.url : ""}
                                key={index}
                                className={`join-item btn ${item.active ? "btn-disabled" : ""}`}
                                as="button"
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
