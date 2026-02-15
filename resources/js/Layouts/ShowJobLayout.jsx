import { Link, usePage } from "@inertiajs/react";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import Footer from "../Components/Footer";
import ThemeProvider from "../Hooks/useTheme";
import LightOrDarkModeToggle from "../Components/LightOrDarkModeToggle";

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
            <ThemeProvider>
                <main className="mx-auto my-3 flex justify-center flex-col items-center rounded-md p-5 sm:w-xl">
                    {/* Toast messages */}
                    <Toaster />

                    <section className="self-start flex justify-between items-center w-full">
                        <h1 className="text-2xl md:text-6xl font-bold font-helvetica tracking-tight">
                            <Link href="/jobs">
                                <span className="text-5xl md:text-8xl">J</span>
                                obsy
                                <span className="text-blue-600">.</span>
                            </Link>
                        </h1>

                        {/* Buttons */}
                        <div className="flex self-end gap-2">
                            {/* Light or dark mode toggle button */}
                            <LightOrDarkModeToggle />

                            {/* Add New Job Button */}
                            <Link
                                href="/jobs/create"
                                className="btn bg-blue-800 md:text-xl md:px-6 text-white"
                            >
                                New
                            </Link>

                            {/* Edit Button */}
                            <Link
                                href={`/jobs/edit/${jobId}`}
                                className="self-end md:text-xl md:px-6 btn dark:bg-slate-700 text-black dark:text-white"
                            >
                                Edit
                            </Link>
                        </div>
                    </section>

                    <div className="self-start text-gray-600 italic text-xs md:text-base">
                        p.s click Jobsy to go back home.
                    </div>

                    <div className="divider my-1"></div>

                    {children}

                    <Footer currentYear={currentYear} />
                </main>
            </ThemeProvider>
        </>
    );
}
