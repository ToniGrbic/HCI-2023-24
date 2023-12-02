export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "bgColor",
      title: "BgColor",
      type: "string",
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
  ],
};