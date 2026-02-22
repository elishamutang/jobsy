import { useCallback, useEffect, useState } from "react";
import Actions from "../Components/Actions";
import { Link, router, usePage } from "@inertiajs/react";
import { debounce, pickBy } from "lodash";
import { ChartBarSquareIcon } from "@heroicons/react/24/solid";

export default function Home({ jobs, filters, totalJobs }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [search, setSearch] = useState(filters.search ?? "");

    const { url } = usePage();

    // Debounce search
    const reload = useCallback(
        debounce((value) => {
            const urlObj = new URL(url, window.location.origin);

            if (value) {
                urlObj.searchParams.set("search", value);
                urlObj.searchParams.set("page", 1);
            } else {
                urlObj.searchParams.delete("search");
            }

            router.get(
                urlObj.pathname + urlObj.search,
                pickBy({ search: value }),
                {
                    preserveState: true,
                    preserveScroll: true,
                    replace: true,
                },
            );
        }, 400),
        [url],
    );

    useEffect(() => {
        reload(search);
    }, [search, reload]);

    console.log(jobs);
    return (
        <>
            {/* Search bar */}
            <Actions value={search} onChangeHandler={setSearch} />

            <div className="flex justify-between w-full mt-3">
                {/* Number of jobs shown */}
                <div className="btn cursor-default rounded-sm dark:bg-slate-800 py-4 self-end font-semibold tracking-wide dark:text-white">
                    {!jobs.to ? 0 : jobs.to} / {totalJobs} jobs
                </div>

                {/* Link to analytics */}
                <Link
                    href="/jobs/overview"
                    className="btn px-1 dark:bg-slate-800"
                    as="button"
                >
                    <ChartBarSquareIcon className="py-1 size-10" />
                </Link>

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
                    let badgeColor;

                    switch (item.status) {
                        case "Pending":
                            badgeColor = "bg-yellow-600";
                            break;
                        case "Interview":
                            badgeColor = "bg-blue-600";
                            break;
                        case "Offer":
                            badgeColor = "bg-green-600";
                            break;
                        case "Rejected":
                            badgeColor = "bg-red-600";
                            break;
                        case "Ghosted":
                            badgeColor = "bg-gray-600";
                            break;
                        default:
                            break;
                    }

                    return (
                        <Link
                            href={`/jobs/${item.slug}`}
                            className={`btn btn-soft w-full text-wrap cursor-pointer indicator`}
                            key={index}
                        >
                            <span
                                className={`indicator-item indicator-start badge badge-xs ${badgeColor}`}
                            ></span>
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
                {search === "" && (
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
                )}
            </section>
        </>
    );
}
