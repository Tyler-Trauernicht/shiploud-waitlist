import type { CollectionConfig } from 'payload';

export const Layout: CollectionConfig = {
  slug: 'layout',
  labels: { singular: 'Layout', plural: 'Layout' },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Site Title',
    },
    {
      name: 'description',
      type: 'text',
      label: 'Site Description',
    },
    {
      name: 'opengraphtitle',
      type: 'text',
      label: 'Social Media Title',
    },
    {
      name: 'opengraphdescription',
      type: 'text',
      label: 'Social Media Description',
    },
    {
      name: 'twittertitle',
      type: 'text',
      label: 'Twitter Card Title',
    },
    {
      name: 'twitterdescription',
      type: 'text',
      label: 'Twitter Card Description',
    }
  ],
};
