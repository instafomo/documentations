import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/notifications/instafomo-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "api/notifications/retrieve-all-notifications",
          label: "Retrieve all notifications",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/notifications/retrieve-notification",
          label: "Retrieve a specific notification",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/notifications/delete-notification",
          label: "Delete a notification",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
