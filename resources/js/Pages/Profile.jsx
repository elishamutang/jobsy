import { Form } from "@inertiajs/react";

export default function Profile({ user }) {
    console.log(user);
    return (
        <>
            <section className="w-full my-3">
                {/* Page Heading */}
                <h1 className="text-4xl font-helvetica font-bold">Profile</h1>

                {/* User details */}
                <Form className="flex flex-col py-5">
                    <label
                        htmlFor="userName"
                        className="font-semibold w-full font-helvetica text-2xl mb-2"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        name="userName"
                        value={user.name}
                        className="input"
                        readOnly
                    />
                </Form>
            </section>
        </>
    );
}
