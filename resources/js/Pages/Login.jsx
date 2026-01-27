import { Form } from "@inertiajs/react";

export default function Login() {
    return (
        <>
            <section className="w-full flex flex-col items-center gap-2">
                <p className="font-helvetica text-center text-zinc-500 mb-3">
                    Keep track of the jobs you've applied for. Anywhere,
                    anytime!
                </p>

                {/* Login form */}
                <Form
                    method="post"
                    className="flex flex-col items-center w-8/9"
                >
                    <div className="w-full flex flex-col my-2">
                        {/* User email */}
                        <label htmlFor="userEmail">Email</label>
                        <input
                            type="email"
                            name="userEmail"
                            id="userEmail"
                            className="input w-full mt-2 mb-3"
                        />

                        {/* User password */}
                        <label htmlFor="userPassword">Password</label>
                        <input
                            type="password"
                            name="userPassword"
                            id="userPassword"
                            className="input w-full mt-2 mb-3"
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn w-full bg-blue-900 text-lg"
                    >
                        Login
                    </button>
                </Form>
            </section>
        </>
    );
}
