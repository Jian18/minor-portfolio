export default {
  name: 'personen',
  type: 'document',
  title: 'Personen',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'Projecten',
      title: 'Projecten',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'projectDetail' },
        },
      ],
    },
  ],
};
