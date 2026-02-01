import { Link, usePage } from "@inertiajs/react";

export default function ProfileIcon({ user }) {
    return (
        <Link
            href="/profile"
            className="self-end bg-zinc-900 btn btn-circle text-xl absolute font-helvetica font-bold"
        >
            {user.name && user.name.toUpperCase()[0]}
        </Link>
    );
}
