import { Link } from "@inertiajs/react";

export default function ShowJobLayout({ children }) {
    return (
        <>
            <main className="mx-auto my-3 flex justify-center flex-col items-center md:w-1/2 md:border rounded-md p-5">
                <section className="self-start flex justify-between items-center w-full">
                    <h1 className="text-2xl md:text-6xl font-bold font-helvetica tracking-tight">
                        <Link href="/">
                            <span className="text-5xl md:text-8xl">J</span>obsy
                            <span className="text-blue-600">.</span>
                        </Link>
                    </h1>

                    {/* Buttons */}
                    <div className="flex gap-2">
                        {/* Add New Job Button */}
                        <Link
                            href="/jobs/create"
                            className="btn bg-green-800 md:text-xl md:px-6"
                        >
                            New
                        </Link>

                        {/* Edit Button */}
                        <button className="self-end md:text-xl md:px-6 btn bg-blue-800">
                            Edit
                        </button>
                    </div>
                </section>

                <div className="divider my-1"></div>

                {children}
            </main>
        </>
    );
}
