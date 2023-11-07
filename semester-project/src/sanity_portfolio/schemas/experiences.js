export default {
  name: "Experiences",
  title: "experiences",
  type: "document",
  fields: [
    {
      name: "timePeriod",
      title: "TimePeriod",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "department",
      title: "Department",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "website",
      title: "Website",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "imgUrl",
      title: "ImageUrl",
      type: "image",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
  ],
};
