import { Form } from "@inertiajs/react";

export default function Actions() {
    return (
        <>
            <Form
                action="/jobs"
                method="post"
                className="py-2 flex justify-center w-full"
            >
                <input
                    type="text"
                    placeholder="Search job here"
                    className="input"
                />
            </Form>
        </>
    );
}
