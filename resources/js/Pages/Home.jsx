import { useState } from "react";
import Actions from "../Components/Actions";
import { Link } from "@inertiajs/react";

export default function Home({ jobs }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    console.log(jobs);
    return (
        <>
            {/* TODO(elishamutang): Complete search bar functionality. */}
            <Actions />

            <div className="flex justify-between w-full mt-3">
                <div className="btn cursor-default rounded-sm dark:bg-slate-800 py-4 self-end font-helvetica font-semibold tracking-wide dark:text-white">
                    Total jobs - {jobs.total}
                </div>

                {/* Add New Job */}
                <Link
                    href="/jobs/create"
                    className="btn bg-blue-900 font-helvetica font-semibold text-white"
                    as="button"
                >
                    Add New Job
                </Link>
            </div>

            {/* List of jobs */}
            <section className="m-5 w-full h-full flex flex-col gap-3">
                {jobs.data.length === 0 && (
                    <p className="self-center font-helvetica font-semibold">
                        No jobs yet :)
                    </p>
                )}

                {jobs.data.map((item, index) => {
                    return (
                        <Link
                            href={`/jobs/${item.id}`}
                            className="btn btn-soft w-full text-wrap cursor-pointer"
                            key={index}
                        >
                            <div className="w-full flex justify-between items-center">
                                <span
                                    className={`text-left md:w-full truncate w-4/5 md:text-base ${item.status !== "Rejected" && item.status !== "Ghosted" ? "" : "line-through text-zinc-500"}`}
                                >
                                    {item.title}
                                </span>
                                <div className="w-10">
                                    {!imageLoaded && (
                                        <div className="w-full h-full bg-gray-200 animate-pulse rounded" />
                                    )}

                                    <img
                                        onLoad={() => setImageLoaded(true)}
                                        className={`w-full ${item.status !== "Rejected" && item.status !== "Ghosted" ? "" : "opacity-25"}`}
                                        src={item.country.flag}
                                        alt={`${item.name} flag`}
                                    />
                                </div>
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
