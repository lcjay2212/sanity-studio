export default {
  name: "content",
  title: "Content",
  type: "document",
  fields: [
    {
      name: "content",
      title: "Content",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
