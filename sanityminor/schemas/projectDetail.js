export default {
  name: 'projectDetail',
  type: 'document',
  title: 'Project Detail',
  fields: [
    {
      name: 'projectNaam',
      type: 'string',
      title: 'Project Naam',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    },
    {
      name: 'projectImage',
      type: 'image',
      title: 'Project Image',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
  ],
};
