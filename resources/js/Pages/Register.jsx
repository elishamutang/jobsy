import { Form, Link } from "@inertiajs/react";

export default function Register({ countries }) {
    return (
        <>
            {/* Registration form */}
            <section className="w-8/9 flex flex-col gap-2">
                <Form action="/register" method="post">
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

                        {/* User Country */}
                        <div>
                            <label htmlFor="country_id">Country</label>
                            <select
                                name="country_id"
                                className="select mt-2 mb-3 w-full"
                                required
                            >
                                {countries.map((country) => {
                                    return (
                                        <option
                                            className="country-flag"
                                            key={country.id}
                                            value={country.id}
                                        >
                                            {country.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>

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
                        className="btn w-full bg-blue-900 text-lg py-6 text-white"
                    >
                        Register
                    </button>
                </Form>

                {/* Back to login page */}
                <Link
                    href="/login"
                    className="btn bg-blue-500 font-helvetica font-semibold tracking-wide text-white"
                >
                    Already have an account? Login.
                </Link>
            </section>
        </>
    );
}
