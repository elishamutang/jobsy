import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <>
            <main className="mx-auto my-3 flex justify-center flex-col items-center md:w-1/2 md:border rounded-md p-5">
                <section>
                    <h1 className="text-5xl md:text-6xl font-bold mb-5 font-helvetica tracking-tight">
                        <Link href="/">
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
