import React, { useState, useEffect } from 'react';
import { Person } from '../../components/Person/Component';
import { client, urlFor } from '../../lib/client';
import { Cirkels } from '../../components/Cirkels/Component';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "personen" && defined(slug.current)]{
      "params": {
        "slug": slug.current
      }
    }`
  );

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "personen" && slug.current == $slug][0]{
    name,
    role,
    image,
    slug,
    Projecten[] -> {
    projectNaam
    }
  }  
  `;

  const personenQuery = `*[_type == "personen"]`;

  const person = await client.fetch(query, { slug });
  const personen = await client.fetch(personenQuery);

  return {
    props: { personen, person },
  };
};

export default function PersonPage({ personen, person }) {
  const router = useRouter();
  const foundPerson = personen?.[0];

  const [nextUrl, setNextUrl] = useState(personen[0].slug?.current);
  const [prevUrl, setPrevUrl] = useState(personen[0].slug?.current);
  console.log(personen.length, 'length');
  console.log(nextUrl, 'nexturl', prevUrl, 'prevUrl');

  useEffect(() => {
    if (router.query.person != null) {
      const urlPerson = router.query.person;
      const foundIndex = person.findIndex((person) => person?.slug?.current === urlPerson);
      console.log(foundIndex, 'foundIndex');
      const length = person.length;
      if (foundIndex === length - 1) {
        setNextUrl(person[0].slug.current);
      } else {
        setNextUrl(person[foundIndex + 1]?.slug.current);
      }

      if (foundIndex === 0) {
        setPrevUrl(person[length - 1].slug.current);
      } else {
        setPrevUrl(person[foundIndex - 1].slug.current);
      }
    }
  }, [router.query.person]);

  return (
    <>
      <Cirkels />
      <Person person={person} next={nextUrl} prev={prevUrl} />
    </>
  );
}
