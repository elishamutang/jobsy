import { Form, usePage } from "@inertiajs/react";

export default function Feedback() {
    const { errors } = usePage().props;

    return (
        <>
            <section className="w-full flex flex-col gap-2 mt-3">
                <h1 className="font-bold w-full font-helvetica text-3xl">
                    Feedback Form
                </h1>

                <Form
                    action="/feedback"
                    method="post"
                    className="inert:opacity-50 inert:pointer-events-none self-start w-full flex flex-col gap-3"
                    disableWhileProcessing
                    resetOnSuccess
                >
                    {/* User's Message */}
                    <div>
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
