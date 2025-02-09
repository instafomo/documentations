import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/user/instafomo-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "api/user/retrieve-user",
          label: "Retrieve user information",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
