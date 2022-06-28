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
    fallback: false,
  };
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "personen" && slug.current == $slug][0]{
    name,
    role,
    image,
    slug,
    Projecten[] -> {
    projectNaam,
    _id,
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

  const [nextUrl, setNextUrl] = useState(personen[0].slug?.current);
  const [prevUrl, setPrevUrl] = useState(personen[0].slug?.current);

  useEffect(() => {
    if (router.query.slug != null) {
      const urlPerson = router.query.slug;
      const foundIndex = personen.findIndex((person) => person?.slug?.current === urlPerson);

      const length = personen.length;
      if (foundIndex === length - 1) {
        setNextUrl(personen[0].slug.current);
      } else {
        setNextUrl(personen[foundIndex + 1].slug.current);
      }

      if (foundIndex === 0) {
        setPrevUrl(personen[length - 1].slug.current);
      } else {
        setPrevUrl(personen[foundIndex - 1].slug.current);
      }
    }
  }, [personen, router.query.slug]);

  return (
    <>
      <Cirkels />
      <Person person={person} next={nextUrl} prev={prevUrl} />
    </>
  );
}
