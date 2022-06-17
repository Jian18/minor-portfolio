// components
import { Buttons } from '../components/Buttons/Component';
import { Cirkels } from '../components/Cirkels/Component';
import { Navigation } from '../components/Navigation/Component';

import { Person } from '../components/Person/Component';
import { client } from '../lib/client';
import Head from 'next/head';

export const getServerSideProps = async () => {
  const query = `*[_type == "personen"] {
  name,
  role,
  image,
  Projecten[] -> {
    projectNaam
    }
  }  
`;
  const personData = await client.fetch(query);
  return {
    props: { personData },
  };
};
export default function HomePage({ personData }) {
  return (
    <>
      <Head>
        <title>Team spirit</title>
        <meta name="description" content="minor groepsportfolio" />
      </Head>
      {/* <Navigation /> */}
      <Cirkels />
    </>
  );
}
