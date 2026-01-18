export default function Layout({ children }) {
    return (
        <>
            <main className="mx-auto my-10 flex justify-center flex-col items-center md:w-1/2 md:border rounded-md p-5">
                <section>
                    <h1 className="text-5xl md:text-7xl font-bold mb-10 font-helvetica tracking-tight">
                        <span className="text-7xl">J</span>obsy
                        <span className="text-blue-600">.</span>
                    </h1>
                </section>
                {children}
            </main>
        </>
    );
}
