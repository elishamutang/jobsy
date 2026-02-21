import { Link } from "@inertiajs/react";

export default function Footer({ currentYear }) {
    return (
        <footer className="flex flex-col items-center w-full font-helvetica tracking-wide text-sm text-gray-500 mt-6">
            {/* Contact Form */}
            <div className="flex gap-2 items-center mb-2">
                <Link
                    href="/feedback"
                    className="border border-transparent hover:border-b-gray-500 cursor-pointer"
                >
                    Feedback Form
                </Link>
            </div>

            <p>
                &copy; {currentYear} Jobsy by{" "}
                <a
                    target="_blank"
                    href="https://elishamutang.xyz/"
                    className="badge bg-gray-200 text-gray-600 hover:bg-blue-800 hover:text-gray-200 dark:text-white dark:bg-slate-800 px-2 dark:hover:bg-blue-800 transition-all cursor-pointer"
                >
                    Elisha
                </a>{" "}
                - All Rights Reserved
            </p>
        </footer>
    );
}
