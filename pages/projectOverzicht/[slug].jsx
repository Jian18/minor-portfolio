import React from 'react';
import { client } from '../../lib/client';
import { ProjectOverzicht } from '../../components/ProjectOverzicht/Component';

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
    slug,
    Projecten[] -> {
    projectNaam,
    description,
    projectImage,
    } 
  }  
  `;

  const project = await client.fetch(query, { slug });
  return {
    props: { project },
  };
};

function ProjectOverzichtPage({ project }) {
  return (
    <>
      {/* <ul>
        {project?.map((project) => (
          <li key={project.key}>{project}</li>
        ))}
      </ul> */}
      <ProjectOverzicht project={project} />
    </>
  );
}

export default ProjectOverzichtPage;
