import { Form } from "@inertiajs/react";

export default function Actions() {
    return (
        <>
            <Form action="/jobs" method="post" className="flex gap-2 py-2 px-5">
                <input
                    type="text"
                    placeholder="Search job here"
                    className="input"
                />
                <button className="btn bg-slate-600">Search</button>
            </Form>
        </>
    );
}
