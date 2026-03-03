import type { CollectionConfig } from 'payload';

export const Logo: CollectionConfig = {
  slug: 'logo',
  labels: { singular: 'Logo', plural: 'Logo' },
  admin: {
    useAsTitle: 'arialabel',
  },
  fields: [
    {
      name: 'arialabel',
      type: 'text',
      label: 'Logo Accessibility Label',
    },
    {
      name: 'companyname',
      type: 'text',
      label: 'Company Name (First Part)',
    },
    {
      name: 'companynameaccent',
      type: 'text',
      label: 'Company Name (Second Part)',
    }
  ],
};
