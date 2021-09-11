export default {
  title: 'Service',
  type: 'object',
  name: 'service',
  fields: [
    {
      title: "Title",
      name: "title",
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: "Text",
      name: "text",
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: "Supporting Image",
      description: "The image that will appear when this service is opened",
      name: "supportingImage",
      type: 'image',
      validation: Rule => Rule.required()
    }
  ]
}
