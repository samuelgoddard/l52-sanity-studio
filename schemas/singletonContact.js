export default {
  title: 'Contact',
  name: 'contact',
  type: 'document',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Email (General Enquiries)',
      name: 'emailGeneralEnquiries',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Email (Press Enquiries)',
      name: 'emailPressEnquiries',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Telephone',
      name: 'telephone',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Address',
      name: 'address',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Instagram',
      name: 'instagram',
      type: 'url',
      validation: Rule => Rule.required()
    },
    {
      title: 'LinkedIn',
      name: 'linkedin',
      type: 'url',
      validation: Rule => Rule.required()
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title
      }
    }
  }
}