import React from 'react';
import { client } from '../../lib/client';

export const getServerSideProps = async () => {
  const query = '*[_type == "project"]';
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
      projectoverzicht
    </>
  );
}

export default ProjectOverzichtPage;
