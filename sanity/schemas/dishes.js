export default {
  name: 'dishes',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name:'name',
      type: 'string',
      title: "Dish Name",
      validation : Rule => Rule.required()
    },
    {
      name:'short_description',
      type: 'string',
      title: "Short Description",
      validation : Rule => Rule.max(200)
    },
    {
      name:'price',
      type : "string",
      title:" Price of the dish in Rs",

    },
    {
      name:'image',
      type: 'image',
      title: "Image of the Dish ",
    },
  ]
}
