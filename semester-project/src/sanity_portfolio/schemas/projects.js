export default {
  name: "works",
  title: "Works",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "projectLink",
      title: "Project Link",
      type: "string",
    },
    {
      name: "codeLink",
      title: "Code Link",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "imgUrl",
      title: "ImageUrl",
      type: "image",
      options: {
        hotspot: true,
      },
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },

    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          name: "tag",
          title: "Tag",
          type: "string",
        },
      ],
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
  ],
};
