export const homeCollection = {
  name: "homePage",
  label: "Home",
  file: "/content/index.md",
  description: "Home page informations",
  fields: [
    {
      label: "Template Key",
      name: "templateKey",
      widget: "hidden",
      default: "home",
    },
    {
      name: "header",
      label: "Header",
      // summary: "{{fields.title}}: {{fields.description}}",
      widget: "object",
      fields: [
        {
          name: "image",
          label: "Image",
          widget: "widget",
          fields: [
            {
              name: "src",
              label: "Source",
              widget: "image",
            },
            {
              name: "alt",
              label: "alt",
              widget: "string",
            },
          ],
        },
        {
          name: "headerButton",
          label: "Bouton ",
          widget: "object",
          fields: [
            {
              name: "visible",
              label: "Visible",
              widget: "boolean",
            },
            {
              name: "title",
              label: "Titre",
              widget: "string",
            },
            {
              name: "link",
              label: "lien vers",
              widget: "string",
            },
          ],
        },
        { name: "title", label: "Titre", widget: "string" },
        {
          name: "subtitle",
          label: "Sous-titre",
          widget: "string",
        },
      ],
    },
    {
      name: "prestations",
      label: "Nos prestations",
      widget: "objects",
      fields: [
        {
          name: "title",
          label: "titre",
          widhet: "string",
        },

        {
          name: "liste",
          label: "Liste",
          widget: "list",
          fields: [
            {
              name: "image",
              label: "Image",
              widget: "widget",
              fields: [
                {
                  name: "src",
                  label: "Source",
                  widget: "image",
                },
                {
                  name: "alt",
                  label: "alt",
                  widget: "string",
                },
              ],
            },
            {
              name: "titre",
              label: "Titre",
              widget: "string",
            },
          ],
        },
      ],
    },
    {
      name: "aboutUs",
      label: "About us",
      widget: "object",
      fields: [
        { name: "title", label: "Titre", widget: "string" },
        {
          name: "description",
          label: "Description",
          widget: "text",
        },
      ],
    },
    {
      name: "ourServices",
      label: "Nos service",
      widget: "object",
      fields: [
        {
          name: "webMarketing",
          label: "Web-marketing",
          widget: "object",
          fields: [
            { name: "title", label: "Titre", widget: "string" },
            {
              name: "description",
              label: "Description",
              widget: "text",
            },
            {
              name: "image",
              label: "Image",
              widget: "widget",
              fields: [
                {
                  name: "src",
                  label: "Source",
                  widget: "image",
                },
                {
                  name: "alt",
                  label: "alt",
                  widget: "string",
                },
              ],
            },
          ],
        },
        {
          name: "webSite",
          label: "Site internet",
          widget: "object",
          fields: [
            { name: "title", label: "Titre", widget: "string" },
            {
              name: "description",
              label: "Description",
              widget: "text",
            },
            {
              name: "image",
              label: "Image",
              widget: "widget",
              fields: [
                {
                  name: "src",
                  label: "Source",
                  widget: "image",
                },
                {
                  name: "alt",
                  label: "alt",
                  widget: "string",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "seo",
      label: "Seo",
    },
  ],
};
