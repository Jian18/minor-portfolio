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
      options: {
        source: 'projectNaam',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
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
