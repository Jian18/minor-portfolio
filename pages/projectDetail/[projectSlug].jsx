import React from 'react';
import { ProjectDetail } from '../../components/ProjectDetail/Component';
import { client, urlFor } from '../../lib/client';

export async function getStaticPaths() {
  const projects = await client.fetch(
    `*[_type == "projectDetail"] { "projectSlug": slug.current }`
  );
  const paths = projects.map((project) => ({ params: { projectSlug: project.projectSlug } }));

  return { paths, fallback: true };
}

export const getStaticProps = async ({ params: { projectSlug } }) => {
  const projectenQuery = `*[_type == "projectDetail" && slug.current == $projectSlug][0]`;
  const projects = await client.fetch(projectenQuery, { projectSlug });
  return {
    props: { projects },
  };
};

export default function ProjectPage({ projects }) {
  return <ProjectDetail project={projects} />;
}
