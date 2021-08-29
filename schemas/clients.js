export default {
  title: "Clients",
  name: 'clients',
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: 'Recent Project?',
      description: 'Toggling this on will show this client in the "Recent Projects" tab',
      name: 'recent',
      type: "boolean"
    },
    {
      title: 'Logo',
      name: 'logo',
      type: "image",
      validation: Rule => Rule.required()
    }
  ]
}