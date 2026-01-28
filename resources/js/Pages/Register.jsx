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

                    {/* Confirm password */}
                    <label htmlFor="userPasswordConfirmation">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="userPasswordConfirmation"
                        id="userPasswordConfirmation"
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
