import { Form, usePage, Link } from "@inertiajs/react";
import { useState } from "react";

export default function Profile({ user, countries }) {
    const { errors } = usePage().props;

    const [deleteForm, setDeleteForm] = useState(false);

    console.log(user);
    return (
        <>
            <section className="w-full flex flex-col gap-7 mt-3">
                <Form
                    action="/profile"
                    method="put"
                    className="inert:opacity-50 inert:pointer-events-none self-start w-full flex flex-col gap-3"
                    disableWhileProcessing
                    resetOnSuccess
                >
                    {/* User Details */}

                    {/* User Name */}
                    <div>
                        <h1 className="font-semibold w-full font-helvetica text-3xl">
                            Name
                        </h1>
                        <input
                            type="text"
                            name="name"
                            defaultValue={user.name}
                            className="input my-2 py-5 text-md w-full"
                            required
                        />
                        {errors.name && (
                            <div className="w-full tracking-wide text-sm font-helvetica text-red-500">
                                {errors.name}
                            </div>
                        )}
                    </div>

                    {/* User Email */}
                    <div>
                        <h1 className="font-helvetica font-semibold text-2xl">
                            Email
                        </h1>
                        <input
                            type="email"
                            name="email"
                            defaultValue={user.email}
                            className="input my-2 py-5 text-md w-full"
                            required
                        />
                        {errors.email && (
                            <div className="w-full tracking-wide text-sm font-helvetica text-red-500">
                                {errors.email}
                            </div>
                        )}
                    </div>

                    {/* User Country */}
                    <div>
                        <h1 className="font-helvetica font-semibold text-2xl">
                            Country
                        </h1>
                        <select
                            name="country"
                            className="select my-2 w-full"
                            defaultValue={user.country.id}
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
                        {errors.country && (
                            <div className="w-full tracking-wide text-sm font-helvetica text-red-500">
                                {errors.country}
                            </div>
                        )}
                    </div>

                    {/* Change User Password */}
                    <div>
                        <h1 className="font-helvetica font-semibold text-2xl">
                            Update Password
                        </h1>
                        <input
                            type="password"
                            name="password"
                            className="input my-2 py-5 text-md w-full"
                        />
                        {errors.password && (
                            <div className="w-full tracking-wide text-sm font-helvetica text-red-500">
                                {errors.password}
                            </div>
                        )}
                    </div>

                    {/* Confirmation change of password */}
                    <div>
                        <h1 className="font-helvetica font-semibold text-2xl">
                            Confirm Password
                        </h1>
                        <input
                            type="password"
                            name="password_confirmation"
                            className="input my-2 py-5 text-md w-full"
                        />
                        {errors.password_confirmation && (
                            <div className="w-full tracking-wide text-sm font-helvetica text-red-500">
                                {errors.password_confirmation}
                            </div>
                        )}
                    </div>

                    {/* Submit or Cancel buttons */}
                    <div className="flex justify-between gap-4 w-full">
                        <button
                            type="submit"
                            className="flex-1 btn bg-blue-800 font-helvetica tracking-wide text-lg text-white"
                        >
                            Update
                        </button>
                        <Link
                            href="/"
                            className="flex-1 btn dark:bg-slate-600 font-helvetica tracking-wide text-lg dark:text-white"
                        >
                            Cancel
                        </Link>
                    </div>
                </Form>

                {/* Delete Profile */}
                <section>
                    <h1 className="font-helvetica text-2xl font-bold mb-1 tracking-wide">
                        Danger Zone
                    </h1>
                    {errors.confirm_email && (
                        <div className="w-full tracking-wide text-sm font-helvetica text-red-500 mb-2">
                            {errors.confirm_email}
                        </div>
                    )}

                    <div className="flex flex-col gap-2 border border-red-500 bg-red-900 dark:bg-red-900 p-2 rounded-md">
                        <div className="flex flex-col gap-1 mb-2">
                            <h2 className="font-helvetica font-semibold text-white">
                                Delete your profile profile
                            </h2>
                            <p className="text-sm text-white">
                                Once you delete your profile, there is no going
                                back. Please be certain.
                            </p>
                        </div>

                        {!deleteForm && (
                            <button
                                onClick={() => setDeleteForm(true)}
                                type="button"
                                className="btn bg-red-500 border-0 font-helvetica tracking-wide text-lg text-white mb-2"
                            >
                                Delete
                            </button>
                        )}

                        {deleteForm && (
                            <Form
                                method="delete"
                                action="/profile"
                                className="mb-2 md:flex-row flex flex-col gap-2"
                            >
                                <input
                                    name="confirm_email"
                                    type="email"
                                    required
                                    className="input w-full"
                                    placeholder="To delete please enter your email."
                                />

                                <button
                                    type="submit"
                                    className="btn bg-red-500 border-0 tracking-wide font-helvetica text-lg"
                                >
                                    Delete
                                </button>
                            </Form>
                        )}
                    </div>
                </section>
            </section>
        </>
    );
}
