export default function Footer({ currentYear }) {
    return (
        <footer className="font-helvetica tracking-wide text-sm text-gray-500 mt-6">
            &copy; {currentYear} Jobsy - All Rights Reserved
        </footer>
    );
}
