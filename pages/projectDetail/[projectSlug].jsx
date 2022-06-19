import React from 'react';
import { ProjectDetail } from '../../components/ProjectDetail/Component';
import { client, urlFor } from '../../lib/client';

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "personen" && defined(slug.current)]{
      "params": {
        "projectSlug": slug.current
      }
    }`
  );

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps = async ({ params: { projectSlug } }) => {
  const query = `[_type == "personen" && slug.current == $projectSlug][0]{
    name,
    slug,
    Projecten[] -> {
    projectNaam,
    description,
    projectImage,
    slug
    }
  } 
  `;
  const projectenQuery = `*[_type == "projectDetail"]`;

  const person = await client.fetch(query, { projectSlug });
  const projects = await client.fetch(projectenQuery, { projectSlug });
  console.log(person, 'person');
  return {
    props: { projects, person },
  };
};

export default function ProjectPage({ projects, person }) {
  console.log('projectDetail pagina');
  return <ProjectDetail project={projects} person={person} />;
}
