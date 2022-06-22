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
      name: 'inleiding',
      title: 'Inleiding',
      description: 'Dit wordt ook de description op de overzicht pagina',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'situatie',
      title: 'Situatie',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Hoe ben je erop gekomen?',
    },
    {
      name: 'taakActie',
      title: 'Taak / Actie',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Wat heb je gedaan?',
    },
    {
      name: 'reflectieResultaat',
      title: 'Reflectie&Resultaat',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'projectImage2',
      type: 'image',
      title: 'Project Image2',
      description: 'hier komt projectImage',
    },
    {
      name: 'projectImage3',
      type: 'image',
      title: 'Project Image 3',
      description: 'hier komt projectImage',
    },
    {
      name: 'projectImage4',
      type: 'image',
      title: 'Project Image 4',
      description: 'hier komt projectImage',
    },
    {
      name: 'projectImage5',
      type: 'image',
      title: 'Project Image 5',
      description: 'hier komt projectImage',
    },
  ],
};
