import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <>
            <main className="mx-auto my-3 flex justify-center flex-col items-center md:border border-zinc-700 w-full sm:w-xl md:w-2xl pt-5 px-5 md:px-10">
                <section>
                    <h1 className="text-5xl md:text-6xl font-bold mb-5 font-helvetica tracking-tight">
                        <Link href="/jobs">
                            <span className="text-7xl md:text-8xl">J</span>obsy
                            <span className="text-blue-600">.</span>
                        </Link>
                    </h1>
                </section>
                {children}
            </main>
        </>
    );
}
