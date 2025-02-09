import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/logs/instafomo-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "api/logs/retrieve-all-logs",
          label: "Retrieve all logs",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
