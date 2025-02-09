// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Instafomo Documentation",
  tagline:
    "Turn Clicks into Conversions – Unlock the Power of Social Proof! 🚀",
  favicon: "img/favicon.ico",
  staticDirectories: ["static"], // Ensure Docusaurus knows about static files
  // Set the production url of your site here
  url: "https://instafomo.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "instafomo", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api-docs",
        docsPluginId: "classic",
        config: {
          campaigns: {
            specPath: "src/apiSchema/campaigns.json", // Path to your OpenAPI file
            outputDir: "docs/api/campaigns", // Output directory
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          notificationHandler: {
            specPath: "src/apiSchema/notification-handler.json", // Path to your OpenAPI file
            outputDir: "docs/api/notification-handler", // Output directory
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          notification: {
            specPath: "src/apiSchema/notifications.json", // Path to your OpenAPI file
            outputDir: "docs/api/notifications", // Output directory
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          user: {
            specPath: "src/apiSchema/user.json", // Path to your OpenAPI file
            outputDir: "docs/api/user", // Output directory
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          logs: {
            specPath: "src/apiSchema/logs.json", // Path to your OpenAPI file
            outputDir: "docs/api/logs", // Output directory
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
        },
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: "/",
          docRootComponent: "@theme/DocRoot",
          docItemComponent: "@theme/ApiItem",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        logo: {
          alt: "My Site Logo",
          src: "/docs/img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://console.instafomo.com/register?redirect=dashboard",
            label: "Sign In",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/getting-started/overview",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/company/instafomo/",
              },
              {
                label: "Devpost",
                href: "https://devpost.com/instafomo",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "https://instafomo.com/blogs/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Instafomo.com`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
