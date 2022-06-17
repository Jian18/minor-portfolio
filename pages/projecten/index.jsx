import React from 'react';
import { client } from '../../lib/client';
import { ProjectOverzicht } from '../../components/ProjectOverzicht/Component';

export const getServerSideProps = async () => {
  const query = `*[_type == "project"] {
    Projecten[] -> {
    projectNaam
    }
    }`;
  const project = await client.fetch(query);
  return {
    props: { project },
  };
};

function ProjectOverzichtPage({ project }) {
  console.log(project);

  return (
    <>
      {/* <ul>
        {project?.map((project) => (
          <li key={project.key}>{project}</li>
        ))}
      </ul> */}
      <ProjectOverzicht />
    </>
  );
}

export default ProjectOverzichtPage;
