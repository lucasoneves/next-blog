import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First post</h1>
      <h2>
        <Link href="/">
          <a className="link-home">go home</a>
        </Link>
      </h2>
    </Layout>
  );
}
