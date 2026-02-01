import { Link, usePage } from "@inertiajs/react";
import ProfileIcon from "../Components/ProfileIcon";

export default function Layout({ children }) {
    const currentYear = new Date().getFullYear();
    const { user } = usePage().props;

    return (
        <>
            <main className="mx-auto mb-3 flex justify-center flex-col items-center w-full sm:w-xl md:w-2xl pt-5 px-5 md:px-10">
                <section className="flex flex-col items-center w-full">
                    {/* Profile icon */}
                    {user.name && <ProfileIcon user={user} />}

                    <h1 className="text-5xl md:text-6xl font-bold mb-2 font-helvetica tracking-tight">
                        <Link href="/jobs">
                            <span className="text-7xl md:text-8xl">J</span>obsy
                            <span className="text-blue-600">.</span>
                        </Link>
                    </h1>
                    <p className="font-helvetica tracking-wide text-center text-zinc-500 mb-3 text-sm w-4/5">
                        Keep track of the jobs you've applied for. Anywhere,
                        anytime!
                    </p>
                </section>
                {children}

                <footer className="font-helvetica tracking-wide text-sm text-zinc-500 mt-5">
                    &copy; {currentYear} Jobsy - All Rights Reserved
                </footer>
            </main>
        </>
    );
}
