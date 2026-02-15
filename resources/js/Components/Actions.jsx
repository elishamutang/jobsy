import { Form } from "@inertiajs/react";
import { useRef, useState } from "react";

export default function Actions({ value, onChangeHandler }) {
    const [isFocused, setIsFocused] = useState(false);

    const inputRef = useRef(null);

    // Focus input when clicked
    const handleSpanClick = () => {
        setIsFocused(true);
        inputRef.current?.focus();
    };

    return (
        <Form className="py-2 flex gap-2 w-full">
            <div className="relative w-full">
                <input
                    ref={inputRef}
                    type="text"
                    name="search"
                    id="search"
                    placeholder=""
                    className="input flex-1 w-full"
                    value={value}
                    onChange={(e) => onChangeHandler(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                {!isFocused && value.length === 0 && (
                    <span
                        onClick={handleSpanClick}
                        className={`absolute left-3 top-2.5 text-sm text-gray-400`}
                    >
                        Search by
                        <span className="ml-1 text-rotate">
                            <span>
                                <span>job title</span>
                                <span>job type</span>
                                <span>job industry</span>
                                <span>company</span>
                                <span>country</span>
                            </span>
                        </span>
                    </span>
                )}
            </div>
            <button className="btn dark:bg-slate-800 dark:text-black dark:text-white">
                Search
            </button>
        </Form>
    );
}
