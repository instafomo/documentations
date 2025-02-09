import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/notification-handler/instafomo-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "api/notification-handler/retrieve-all-notification-handlers",
          label: "Retrieve all notification handlers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/notification-handler/create-notification-handler",
          label: "Create a new notification handler",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/notification-handler/retrieve-notification-handler",
          label: "Retrieve a specific notification handler",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/notification-handler/update-notification-handler",
          label: "Update a notification handler",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/notification-handler/delete-notification-handler",
          label: "Delete a notification handler",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
