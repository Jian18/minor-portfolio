import React from 'react';
import { Person } from '../../components/Person/Component';
import { client, urlFor } from '../../lib/client';
import { Cirkels } from '../../components/Cirkels/Component';

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

  const person = await client.fetch(query, { slug });
  //   const Persons = await client.fetch(personQuery);

  console.log(person);

  return {
    props: { person },
  };
};

// export async function getStaticProps({ params }) {
//   const { slug } = params;
//   const recipe = await sanityClient.fetch(recipeQuery, { slug });
//   return { props: { data: { recipe }, preview: true } };
// }

export default function PersonPage({ person }) {
  return (
    <>
      <Cirkels />
      <Person person={person} />
    </>
  );
}
