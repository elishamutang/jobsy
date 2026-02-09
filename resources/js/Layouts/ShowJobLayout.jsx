import { Link, usePage } from "@inertiajs/react";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

export default function ShowJobLayout({ children }) {
    const currentYear = new Date().getFullYear();
    const { jobId, success } = usePage().props;

    useEffect(() => {
        if (success?.message) {
            console.log(success.message);
            toast.success(success.message);
        }
    }, [success]);

    return (
        <>
            <main className="mx-auto my-3 flex justify-center flex-col items-center rounded-md p-5 sm:w-xl">
                {/* Toast messages */}
                <Toaster />

                <section className="self-start flex justify-between items-center w-full">
                    <h1 className="text-2xl md:text-6xl font-bold font-helvetica tracking-tight">
                        <Link href="/jobs">
                            <span className="text-5xl md:text-8xl">J</span>obsy
                            <span className="text-blue-600">.</span>
                        </Link>
                    </h1>

                    {/* Buttons */}
                    <div className="flex gap-2">
                        {/* Add New Job Button */}
                        <Link
                            href="/jobs/create"
                            className="btn bg-blue-800 md:text-xl md:px-6"
                        >
                            New
                        </Link>

                        {/* Edit Button */}
                        <Link
                            href={`/jobs/edit/${jobId}`}
                            className="self-end md:text-xl md:px-6 btn bg-slate-700"
                        >
                            Edit
                        </Link>
                    </div>
                </section>

                <div className="divider my-1"></div>

                {children}

                <footer className="font-helvetica tracking-wide text-sm text-zinc-500 mt-6">
                    &copy; {currentYear} Jobsy - All Rights Reserved
                </footer>
            </main>
        </>
    );
}
