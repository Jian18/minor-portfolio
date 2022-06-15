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
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'projectDetail' },
        },
      ],
      title: 'Projecten',
    },
  ],
};
