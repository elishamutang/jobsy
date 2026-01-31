import { Link, usePage } from "@inertiajs/react";

export default function ProfileIcon() {
    const { user } = usePage().props;

    return (
        <Link
            href="/profile"
            className="self-end bg-zinc-900 btn btn-circle text-xl absolute font-helvetica font-bold"
        >
            {user.name.toUpperCase()[0]}
        </Link>
    );
}
