import { Link } from "@inertiajs/react";

export default function CreateJobLayout({ children }) {
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

                    {/* Cancel Button */}
                    <Link
                        href="/"
                        className="self-end md:text-xl md:px-6 btn bg-red-800"
                    >
                        Cancel
                    </Link>
                </section>

                <div className="divider my-1"></div>

                {children}
            </main>
        </>
    );
}
