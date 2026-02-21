import { Form, usePage } from "@inertiajs/react";

export default function Contact() {
    const { errors } = usePage().props;

    return (
        <>
            <section className="w-full flex flex-col gap-2 mt-3">
                <h1 className="font-bold w-full font-helvetica text-3xl">
                    Contact Form
                </h1>

                <Form
                    className="inert:opacity-50 inert:pointer-events-none self-start w-full flex flex-col gap-3"
                    disableWhileProcessing
                    resetOnSuccess
                >
                    {/* Name */}
                    <div>
                        <h1 className="font-semibold w-full font-helvetica text-2xl">
                            Name
                        </h1>
                        <input
                            type="text"
                            name="visitor_name"
                            className="input my-2 py-5 text-md w-full"
                            placeholder="John Doe"
                            required
                        />
                        {errors.visitor_name && (
                            <div className="w-full tracking-wide text-sm font-helvetica text-red-500">
                                {errors.visitor_name}
                            </div>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <h1 className="font-semibold w-full font-helvetica text-2xl">
                            Email
                        </h1>
                        <input
                            type="email"
                            name="visitor_email"
                            className="input my-2 py-5 text-md w-full"
                            placeholder="johndoe@example.com"
                            required
                        />
                        {errors.visitor_email && (
                            <div className="w-full tracking-wide text-sm font-helvetica text-red-500">
                                {errors.visitor_email}
                            </div>
                        )}
                    </div>

                    {/* User's Message */}
                    <div>
                        <h1 className="font-semibold w-full font-helvetica text-2xl">
                            Your Message
                        </h1>
                        <textarea
                            type="text"
                            name="visitor_message"
                            className="textarea my-2 text-md w-full"
                            placeholder="Jobsy is the best job-tracker I've ever used!"
                            required
                        />
                        {errors.visitor_message && (
                            <div className="w-full tracking-wide text-sm font-helvetica text-red-500">
                                {errors.visitor_message}
                            </div>
                        )}
                    </div>

                    {/* Submit button */}
                    <button className="btn text-lg text-white bg-blue-800 font-helvetica">
                        Submit
                    </button>
                </Form>
            </section>
        </>
    );
}
