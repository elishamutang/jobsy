import Layout from "./Layout";

export default function LoginOrRegisterLayout({ children }) {
    return (
        <>
            <Layout>
                <section className="w-full flex flex-col items-center gap-2">
                    <p className="font-helvetica text-center text-zinc-500 mb-3">
                        Keep track of the jobs you've applied for. Anywhere,
                        anytime!
                    </p>

                    {children}
                </section>
            </Layout>
        </>
    );
}
