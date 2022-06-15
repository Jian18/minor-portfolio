import React from 'react';
import { client } from '../../lib/client';

export const getStaticProps = async () => {
  const query = '*[_type == "project"]';
  const project = await client.fetch(query);
  return {
    props: { project },
  };
};
function ProjectDetail() {
  return <div>ProjectDetail</div>;
}

export default ProjectDetail;
