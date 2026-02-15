import { Link } from "@inertiajs/react";
import Footer from "../Components/Footer";
import ThemeProvider from "../Hooks/useTheme";

export default function CreateJobLayout({ children }) {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <ThemeProvider>
                <main className="mx-auto my-3 flex justify-center flex-col items-center sm:w-xl md:w-xl rounded-md p-5">
                    <section className="self-start flex justify-between items-center w-full">
                        <h1 className="text-2xl md:text-6xl font-bold font-helvetica tracking-tight">
                            <Link href="/jobs">
                                <span className="text-5xl md:text-8xl">J</span>
                                obsy
                                <span className="text-blue-600">.</span>
                            </Link>
                        </h1>

                        {/* Cancel Button */}
                        <Link
                            href="/jobs"
                            className="self-end md:text-xl md:px-6 btn bg-red-800 text-white"
                        >
                            Cancel
                        </Link>
                    </section>

                    <div className="divider my-1"></div>

                    {children}

                    <Footer currentYear={currentYear} />
                </main>
            </ThemeProvider>
        </>
    );
}
