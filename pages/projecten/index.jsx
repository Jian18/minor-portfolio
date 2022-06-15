import React from 'react';

export const getServerSideProps = async () => {
  const query = '*[_type == "project"]';
  const project = await client.fetch(query);
  return {
    props: { project },
  };
};

function ProjectOverzichtPage({ project }) {
  return (
    <>
      <ul>
        {project?.map((project) => (
          <li key={project.key}>{project}</li>
        ))}
      </ul>
    </>
  );
}

export default ProjectOverzichtPage;
