# Conversion Popup

## **Overview**

InstaFomo conversion notifications are designed to enhance social proof and increase user engagement by displaying real-time activity on your platform. These notifications highlight user actions such as sign-ups, purchases, and other interactions.

## **Use Cases**

- **E-commerce:** Showcase recent purchases to build trust and encourage more sales.
- **SaaS Platforms:** Display new user sign-ups to boost credibility.
- **Online Courses:** Highlight new enrollments to create a sense of urgency.
- **Lead Generation:** Show recent form submissions to build engagement.
- **Event Registrations:** Display real-time event sign-ups for increased participation.
- **Third-Party System Integration:** Use webhook integration to send data from external systems like CRM, marketing tools, or payment platforms.

## **Key Features**

- **AI-Powered Data Capture:** Automatically identifies and extracts relevant user interactions for real-time conversions.
- **Dynamic Content:** Supports inserting personalized data into notifications.
- **Webhook Integration:** Allows seamless external data input.
- **Customizable Display:** Tailor colors, positioning, and styles to match branding.
- **Automated Scheduling:** Define time delays and notification frequency for better engagement.

## **Initial Steps**

1. Navigate to [InstaFomo Campaigns](https://console.instafomo.com/campaign).
2. Select the **Conversion Notification** from the list.
3. The **Settings** section will appear, allowing you to configure the notification as needed.

## **Settings**

### **General Settings**

- **Notification Name:** Unique identifier for the notification.
- **Conversion Title:** The main message of the notification. Supports dynamic variables using `{variable_name}`.
  - _This field accepts the usage of span HTML tag along with the style attribute._
  - \_You can insert dynamic variables from your Conversion Data. Example: If you have a field named full_name, you can use it as `{full_name}`
- **Conversion Description:** Additional information about the conversion. Also supports dynamic variables.
- **Image Upload:** Supports `.jpg`, `.jpeg`, `.png`, `.svg`, `.gif`, `.webp`. Maximum allowed size is 1MB.
- **Image Alt Text:** Text for accessibility and SEO purposes.
- **Notification URL:** The destination URL when the user clicks the notification. Can be left empty.
- **Open in New Tab:** Enables opening the link in a new tab when clicked.
- **Display Order:** Determines the sequence of notifications.
- **Conversions to Show:** Number of conversions displayed.
- **In-Between Delay:** Time in seconds between notifications.

### **Data**

- **Data Import:** Import data manually to add conversions to your notification feed. This allows businesses to input past or external conversions that were not captured automatically.
  - Upload CSV files containing conversion details such as name, action, location, and timestamp.
  - Ideal for migrating existing customer interactions into InstaFomo.
  - Enables businesses to display legacy conversions or manually collected user actions.
- **AI-Driven Analytics:** Leverage AI to analyze and enhance imported data for better targeting and engagement. Settings
- **Auto Capture Data:** **Automatically captures form submissions and registers them as conversions.**
- **How It Works:**
  - Monitors user interactions with forms on your website.
  - Extracts submitted data and converts it into a recorded event.
  - Displays these conversions in real-time as social proof notifications.
  - Requires no manual input—fully automated.

### **Webhook Integration**

- **Webhook URL:** `https://console.instafomo.com/pixel-webhook/{unique_id}`
- **Trigger Type:** Sends a `POST` request with form data to dynamically add new conversions.
- **Use Case:**
  - Capture data from external systems such as CRMs, payment gateways, and marketing tools.
  - Register custom events such as webinar sign-ups, demo requests, or user milestones.
  - Enable businesses to push custom notifications via API calls without requiring form submissions.

---

## **Statistics**

InstaFomo provides detailed analytics to help you monitor and optimize your conversion notifications. The **Statistics** section offers insights into user engagement and notification performance, enabling data-driven decisions to improve effectiveness.

- **Notification Performance:** Track how often notifications are displayed and clicked.
- **User Engagement:** Analyze how users interact with notifications, including click-through rates (CTR).
- **Conversion Trends:** Identify peak activity times and optimize notification schedules accordingly.
- **Geographic Insights:** View location-based data on user interactions to tailor messaging.
- **Device & Browser Analytics:** Understand which platforms and devices your audience uses for better optimization.

## **Data**

- **Data Import:** Import data as well as AI-driven analytics to enhance your notification strategies.

## **Example Notification Output**

```
Jane from England 🇬🇧
Just signed up for our newsletter 💌
10 minutes ago
```

This documentation covers the full configuration of InstaFomo conversion notifications to help users set up, customize, and automate their social proof notifications efficiently.
