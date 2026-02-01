import { Link } from "@inertiajs/react";

export default function Landing() {
    return (
        <>
            <main className="mx-auto m-0 flex justify-center flex-col items-center border-zinc-500 h-screen">
                <section className="p-2 flex flex-col items-center">
                    <h1 className="text-7xl font-bold mb-3 font-helvetica tracking-tight">
                        <Link href="/jobs">
                            <span className="text-9xl">J</span>obsy
                            <span className="text-blue-600">.</span>
                        </Link>
                    </h1>

                    <p className="font-helvetica text-center text-zinc-500 mb-5">
                        Keep track of the jobs you've applied for. Anywhere,
                        anytime!
                    </p>

                    {/* Login or Sign Up buttons */}
                    <div className="w-full flex justify-center">
                        <Link href="/login" className="btn bg-blue-800 w-1/2">
                            Login
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
