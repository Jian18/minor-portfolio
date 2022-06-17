import React from 'react';
import { ProjectDetail } from '../../components/ProjectDetail/Component';
import { client, urlFor } from '../../lib/client';

export const getStaticPaths = async () => {
  const query = `*[_type == "projectDetail"] {
    slug {
      current
    }
  }
  `;

  const projecten = await client.fetch(query);

  const paths = projecten.map((project) => ({
    params: {
      slug: project.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "project" && slug.current == '${slug}'][0]`;
  const projectenQuery = '*[_type == "project"]';

  const project = await client.fetch(query);
  const projects = await client.fetch(projectenQuery);

  console.log(project);

  return {
    props: { projects, project },
  };
};

export default function ProjectPage() {
  console.log('projectDetail');
  return <ProjectDetail />;
}
