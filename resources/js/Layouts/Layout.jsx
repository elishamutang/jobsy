import { Link, usePage } from "@inertiajs/react";
import ProfileIcon from "../Components/ProfileIcon";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import Footer from "../Components/Footer";

export default function Layout({ children }) {
    const currentYear = new Date().getFullYear();
    const { user, showLogout, success } = usePage().props;

    useEffect(() => {
        if (success?.message) {
            console.log(success.message);
            toast.success(success.message);
        }
    }, [success]);

    return (
        <>
            <main className="mx-auto mb-3 flex justify-center flex-col items-center w-full sm:w-xl pt-5 px-5 md:px-10">
                {/* Toast messages */}
                <Toaster />
                <section className="flex flex-col items-center w-full">
                    {/* Profile icon */}
                    {user.name && (
                        <ProfileIcon user={user} showLogout={showLogout} />
                    )}

                    <h1 className="text-5xl md:text-6xl font-bold mb-2 font-helvetica tracking-tight">
                        <Link href="/jobs">
                            <span className="text-7xl md:text-8xl">J</span>obsy
                            <span className="text-blue-600">.</span>
                        </Link>
                    </h1>
                    <p className="font-helvetica tracking-wide text-center text-slate-500 mb-3 text-sm w-4/5 lg:w-full">
                        Keep track of the jobs you've applied for - anywhere,
                        anytime!
                    </p>
                </section>
                {children}

                <Footer currentYear={currentYear} />
            </main>
        </>
    );
}
