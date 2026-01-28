import { Form } from "@inertiajs/react";

export default function Register() {
    return (
        <>
            {/* Registration form */}
            <Form
                action="/register"
                method="post"
                className="flex flex-col items-center w-8/9"
            >
                <div className="w-full flex flex-col my-2">
                    {/* User's name */}
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="input w-full mt-2 mb-3"
                    />

                    {/* User email */}
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="input w-full mt-2 mb-3"
                    />

                    {/* User password */}
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="input w-full mt-2 mb-3"
                    />

                    {/* Confirm password */}
                    <label htmlFor="password_confirmation">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="password_confirmation"
                        id="password_confirmation"
                        className="input w-full mt-2 mb-3"
                    />
                </div>
                <button
                    type="submit"
                    className="btn w-full bg-blue-900 text-lg py-6"
                >
                    Create
                </button>
            </Form>
        </>
    );
}
