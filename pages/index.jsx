// components
import { Buttons } from '../components/Buttons/Component';
import { Cirkels } from '../components/Cirkels/Component';
import { Navigation } from '../components/Navigation/Component';

import { Person } from '../components/Person/Component';
import { client } from '../lib/client';

export const getServerSideProps = async () => {
  const query = '*[_type == "personen"]';
  const personData = await client.fetch(query);
  return {
    props: { personData },
  };
};
export default function HomePage({ personData }) {
  console.log(personData, 'persondata');
  console.log(personData.image, 'persondata image');
  return (
    <>
      {/* <Navigation /> */}
      <Cirkels />
      {personData?.map((person) => (
        <Person key={person._id} person={person} />
      ))}

      {/* <Person key={Person._id} person={Person} /> */}
    </>
  );
}
