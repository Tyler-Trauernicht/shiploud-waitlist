import type { CollectionConfig } from 'payload';

export const Home: CollectionConfig = {
  slug: 'home',
  labels: { singular: 'Home', plural: 'Home' },
  admin: {
    useAsTitle: 'comingsoontext',
  },
  fields: [
    {
      name: 'comingsoontext',
      type: 'text',
      label: 'Coming Soon Badge Text',
    },
    {
      name: 'headline',
      type: 'richText',
      label: 'Hero Headline',
    },
    {
      name: 'subheadline',
      type: 'text',
      label: 'Hero Subheadline',
    },
    {
      name: 'ctatext',
      type: 'text',
      label: 'CTA Button Text',
    },
    {
      name: 'disclaimer',
      type: 'text',
      label: 'Waitlist Disclaimer',
    },
    {
      name: 'sectiontitle',
      type: 'text',
      label: 'Features Section Title',
    },
    {
      name: 'sectionsubtitle',
      type: 'text',
      label: 'Features Section Subtitle',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Feature 1 Title',
    },
    {
      name: 'description',
      type: 'text',
      label: 'Feature 1 Description',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Feature 2 Title',
    },
    {
      name: 'description',
      type: 'text',
      label: 'Feature 2 Description',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Feature 3 Title',
    },
    {
      name: 'description',
      type: 'text',
      label: 'Feature 3 Description',
    }
  ],
};
