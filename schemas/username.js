import UserIcon from "part:@sanity/base/user-icon";

export default {
  name: "username",
  title: "Username",
  type: "document",
  icon: UserIcon,
  fields: [
    {
      name: "username",
      title: "Username",
      type: "string",
      description: 'Please use "Username" format',
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "content" }],
    },
  ],
};
