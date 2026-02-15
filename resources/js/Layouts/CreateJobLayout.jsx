import { Link } from "@inertiajs/react";
import Footer from "../Components/Footer";
import ThemeProvider from "../Hooks/useTheme";
import LightOrDarkModeToggle from "../Components/LightOrDarkModeToggle";

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
                        <div className="flex self-end gap-2 items-center">
                            <LightOrDarkModeToggle />

                            <Link
                                href="/jobs"
                                className="md:text-xl md:px-6 btn bg-red-600 dark:bg-red-800 text-white"
                            >
                                Cancel
                            </Link>
                        </div>
                    </section>

                    <div className="divider my-1"></div>

                    {children}

                    <Footer currentYear={currentYear} />
                </main>
            </ThemeProvider>
        </>
    );
}
