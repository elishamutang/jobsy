import { Form } from "@inertiajs/react";

export default function Actions() {
    return (
        <>
            {/* TODO(elishamutang): Add method and action attributes */}
            <Form className="py-2 flex gap-2 w-full">
                <input
                    type="text"
                    placeholder="Search job here"
                    className="input flex-1"
                />
                <button className="btn dark:bg-slate-800 dark:text-black dark:text-white">
                    Search
                </button>
            </Form>
        </>
    );
}
