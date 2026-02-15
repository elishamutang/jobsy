import { Link, usePage, Form } from "@inertiajs/react";
import Footer from "../Components/Footer";
import ThemeProvider from "../Hooks/useTheme";

export default function EditJobLayout({ children }) {
    const currentYear = new Date().getFullYear();
    const { jobId } = usePage().props;

    return (
        <>
            <ThemeProvider>
                <main className="mx-auto my-3 flex justify-center flex-col items-center rounded-md p-5 sm:w-xl">
                    <section className="self-start flex justify-between items-center w-full">
                        <h1 className="text-2xl md:text-6xl font-bold font-helvetica tracking-tight">
                            <Link href="/jobs">
                                <span className="text-5xl md:text-8xl">J</span>
                                obsy
                                <span className="text-blue-600">.</span>
                            </Link>
                        </h1>

                        <div className="self-end flex gap-2">
                            {/* Delete Button */}
                            <Form method="delete" action={`/jobs/${jobId}`}>
                                <button
                                    type="submit"
                                    className="md:text-xl md:px-6 btn bg-red-800 text-white"
                                >
                                    Delete
                                </button>
                            </Form>

                            {/* Cancel Button */}
                            <Link
                                href={`/jobs/${jobId}`}
                                className="md:text-xl md:px-6 btn dark:bg-slate-800 dark:text-white text-black"
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
