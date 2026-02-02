import { Form, Link, usePage } from "@inertiajs/react";

export default function Login() {
    const { errors } = usePage().props;

    return (
        <>
            {/* Login form */}
            <Form
                action="/login"
                method="post"
                className="flex flex-col items-center w-8/9"
            >
                <div className="w-full flex flex-col my-2">
                    {/* User email */}
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="input w-full mt-2 mb-3"
                    />
                    {errors.email && (
                        <div className="w-full tracking-wide text-sm font-helvetica text-red-500 mb-2">
                            {errors.email}
                        </div>
                    )}

                    {/* User password */}
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="input w-full mt-2 mb-3"
                    />
                </div>
                <button
                    type="submit"
                    className="btn w-full bg-blue-900 text-lg py-6"
                >
                    Login
                </button>

                {/* Register new account */}
                <Link
                    href="/register"
                    className="btn tracking-wide font-semibold bg-blue-500 w-full mt-4 font-helvetica"
                >
                    Create new account
                </Link>
            </Form>
        </>
    );
}
