import { Form, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Verification() {
    const { flash } = usePage().props;
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (flash?.message) {
            setShowSuccess(true);

            const timer = setTimeout(() => setShowSuccess(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [flash?.message]);

    return (
        <>
            <section className="flex flex-col md:items-center">
                <section className="border border-2 border-blue-500 rounded-lg p-5 mt-3 mb-5 bg-blue-900">
                    <h1 className="text-2xl font-helvetica mb-2 font-bold tracking-wide">
                        Email Verification
                    </h1>
                    <p className="text-left font-helvetica tracking-wide">
                        A verification email has been sent to the email address
                        that you've provided during registration.{" "}
                    </p>
                </section>

                {/* Resend email verification button */}
                <Form
                    action="/email/verification-notification"
                    method="post"
                    className="w-full mb-5 flex justify-center items-center"
                >
                    <button
                        disabled={showSuccess}
                        type="submit"
                        className="btn text-white bg-blue-500 border-0 w-full md:w-1/2 disabled:bg-zinc-600 disabled:opacity-50 transition:all ease-in-out disabled:cursor-disabled"
                    >
                        {showSuccess ? "Sent!" : "Resend verification link"}
                    </button>
                </Form>
            </section>
        </>
    );
}
