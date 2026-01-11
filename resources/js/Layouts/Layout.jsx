export default function Layout({ children }) {
    return (
        <>
            <main className="mx-auto my-10 flex justify-center flex-col items-center w-1/2 border rounded-md p-5">
                <section>
                    <h1 className="text-7xl font-semibold mb-10">Jobsy</h1>
                </section>
                {children}
            </main>
        </>
    );
}
