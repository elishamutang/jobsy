import { Link, usePage } from "@inertiajs/react";

export default function ProfileIcon({ user, showLogout }) {
    return (
        <>
            {user && (
                <Link
                    href="/profile"
                    className="self-end bg-zinc-900 btn btn-circle text-xl absolute font-helvetica font-bold"
                >
                    {user.name && user.name.toUpperCase()[0]}
                </Link>
            )}

            {showLogout && (
                <Link
                    href="/logout"
                    className="self-end bg-red-900 border-red-700 rounded-lg btn text-xl absolute font-helvetica font-bold px-3"
                >
                    <svg
                        className="fill-white stroke-1"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#1f1f1f"
                    >
                        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
                    </svg>
                </Link>
            )}
        </>
    );
}
