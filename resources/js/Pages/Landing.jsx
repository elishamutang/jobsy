import { Link } from "@inertiajs/react";
import ThemeProvider from "../Hooks/useTheme";
import LightOrDarkModeToggle from "../Components/LightOrDarkModeToggle";

export default function Landing() {
    return (
        <>
            <ThemeProvider>
                <main className="mx-auto m-0 flex justify-center flex-col items-center border-zinc-500 h-screen">
                    <section className="p-2 flex flex-col items-center">
                        <h1 className="text-7xl font-bold mb-3 font-helvetica tracking-tight">
                            <Link href="/jobs">
                                <span className="text-9xl">J</span>obsy
                                <span className="text-blue-600">.</span>
                            </Link>
                        </h1>

                        <p className="font-helvetica text-center text-zinc-500 mb-5">
                            Keep track of the jobs you've applied for -
                            anywhere, anytime!
                        </p>

                        {/* Login or Sign Up buttons */}
                        <div className="w-full flex flex-col justify-center items-center gap-3">
                            <Link
                                href="/login"
                                className="btn bg-blue-800 w-1/2 text-lg text-white"
                            >
                                Login
                            </Link>
                            <LightOrDarkModeToggle className={"self-center"} />
                        </div>
                    </section>
                </main>
            </ThemeProvider>
        </>
    );
}
