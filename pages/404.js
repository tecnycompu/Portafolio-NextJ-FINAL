import Layout from "../components/Layout";
import Link from "next/link";

const custom404 = () => (
    <Layout>
        <div className="text-center">
            <h1>404</h1>
            <p>This page does not exist. Please return to <Link href="/">
                <span className="link">Home</span> {/* Apply styles using span */}
            </Link></p>
        </div>
    </Layout>
);

export default custom404;
