import Head from 'next/head';
import Link from 'next/link';

export default function HomePage({ personData }) {
  return (
    <>
      <Head>
        <title>Team spirit</title>
        <meta name="description" content="minor groepsportfolio" />
      </Head>
      <Link href="/personen/jian">
        <a style={{ color: 'white' }}>Personen</a>
      </Link>
    </>
  );
}
