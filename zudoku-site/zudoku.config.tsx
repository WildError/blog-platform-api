import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  basePath: "/blog-platform-api",

  site: {
    logo: {
      src: { light: "/logo-light.svg", dark: "/logo-dark.svg" },
      alt: "Zudoku",
      width: "130px",
    },
  },

  navigation: [
    {
      type: "category",
      label: "Documentation",
      items: [
        {
          type: "category",
          label: "Getting Started",
          icon: "sparkles",
          items: [
            "/introduction",
            "/installation",
            "/authorization",
            "/about",
            {
              type: "link",
              icon: "folder-cog",
              label: "API Reference",
              to: "/api",
            },
          ],
        },
      ],
    },
    {
      type: "link",
      to: "/about",
      label: "About",
    },
    {
      type: "link",
      to: "/api",
      label: "API Reference",
    },
  ],

  redirects: [{ from: "/", to: "/introduction" }],

  apis: [
    {
      type: "file",
      input: "./apis/openapi.yaml",
      path: "/api",
    },
  ],
};

export default config;