import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/campaigns/instafomo-campaigns-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "api/campaigns/retrieve-all-campaigns",
          label: "Retrieve all campaigns",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/campaigns/create-a-new-campaign",
          label: "Create a new campaign",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/campaigns/retrieve-a-specific-campaign",
          label: "Retrieve a specific campaign",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/campaigns/update-a-campaign",
          label: "Update a campaign",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/campaigns/delete-a-campaign",
          label: "Delete a campaign",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
