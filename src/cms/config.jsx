import { homeCollection } from "./collections";

const config = {
  backend: {
    name: "git-gateway",
    branch: "main", // Branch to update (optional; defaults to main)
  },
  local_backend: true,
  locale: "fr",
  media_folder: "static/img",
  public_folder: "/img",
  slug: {
    encoding: "ascii",
    clean_accents: true,
    sanitize_replacement: "-",
  },
  editor: {
    preview: true,
    frame: false,
  },
  media_library: {
    max_file_size: 10240000,
    folder_support: false,
  },
  collections: [
    {
      name: "page",
      label: "Pages",
      delete: false,
      editor: {
        preview: false,
        frame: true,
      },
      files: [],
    },
    {
      name: "seo",
      label: "Seo",
      icon: "seo",
      delete: false,
      editor: {
        preview: false,
        frame: true,
      },
      files: [
        ...homeCollection,
        {
          name: "seo",
          label: "SEO",
          file: "/content/seo/index.md",
          description: "Information concernant le SEO",
          fields: [
            {
              name: "title",
              label: "Titre",
              widget: "string",
            },
            { name: "type", label: "type", widget: "hidden", default: "seo" },
            {
              name: "description",
              label: "Description",
              widget: "text",
            },
            {
              name: "logo",
              label: "Logo",
              widget: "object",
              fields: [
                { name: "text", label: "Text", widget: "string" },
                { name: "image", label: "Image", widget: "image" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "massages",
      label: "Massages",
      icon: "massageIcon",
      folder: "/content/massages",
      create: true,
      editor: {
        preview: false,
        frame: false,
      },
      fields: [
        { name: "title", label: "Titre", widget: "string" },
        { name: "description", label: "Description", widget: "text" },
        { name: "image", label: "Image", widget: "image" },
        { name: "type", label: "type", widget: "hidden", default: "massage" },
        {
          name: "prix",
          label: "Prix",
          widget: "list",
          fields: [
            { name: "time", label: "Temps en min", widget: "number" },
            { name: "price", label: "Prix", widget: "number" },
          ],
        },
      ],
    },
  ],
};

export default config;
