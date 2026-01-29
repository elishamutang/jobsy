import Layout from "./Layout";

export default function LoginOrRegisterLayout({ children }) {
    return (
        <>
            <Layout>
                <section className="w-full flex flex-col items-center gap-2">
                    {children}
                </section>
            </Layout>
        </>
    );
}
