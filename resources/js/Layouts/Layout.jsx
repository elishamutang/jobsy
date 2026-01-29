import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <main className="mx-auto my-3 flex justify-center flex-col items-center md:border border-zinc-700 w-full sm:w-xl md:w-2xl pt-5 px-5 md:px-10">
                <section className="flex flex-col items-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-2 font-helvetica tracking-tight">
                        <Link href="/jobs">
                            <span className="text-7xl md:text-8xl">J</span>obsy
                            <span className="text-blue-600">.</span>
                        </Link>
                    </h1>
                    <p className="font-helvetica tracking-wide text-center text-zinc-500 mb-5 text-sm w-4/5">
                        Keep track of the jobs you've applied for. Anywhere,
                        anytime!
                    </p>
                </section>
                {children}

                <footer className="font-helvetica tracking-wide text-sm text-zinc-500 mt-2 mb-5">
                    &copy; {currentYear} Jobsy - All Rights Reserved
                </footer>
            </main>
        </>
    );
}
