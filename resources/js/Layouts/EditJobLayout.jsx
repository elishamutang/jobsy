import { Link, usePage } from "@inertiajs/react";

export default function EditJobLayout({ children }) {
    const currentYear = new Date().getFullYear();
    const { jobId } = usePage().props;

    return (
        <>
            <main className="mx-auto my-3 flex justify-center flex-col items-center md:w-1/2 md:border rounded-md p-5">
                <section className="self-start flex justify-between items-center w-full">
                    <h1 className="text-2xl md:text-6xl font-bold font-helvetica tracking-tight">
                        <Link href="/jobs">
                            <span className="text-5xl md:text-8xl">J</span>obsy
                            <span className="text-blue-600">.</span>
                        </Link>
                    </h1>

                    {/* Cancel Button */}
                    <Link
                        href={`/jobs/${jobId}`}
                        className="self-end md:text-xl md:px-6 btn bg-red-800"
                    >
                        Cancel
                    </Link>
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
