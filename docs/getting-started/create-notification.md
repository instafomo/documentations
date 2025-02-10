# Create Notification

## Overview

Instafomo enables businesses to create and configure dynamic notifications to enhance user engagement, boost conversions, and create a sense of urgency. These notifications can be tailored based on user behavior, location, and scheduling preferences, ensuring targeted messaging for maximum impact.

## Key Features

- **10+ Notification Types**: Choose from various notification formats such as coupon codes, sales alerts, social proof, and more.
- **Advanced Targeting**: Display notifications based on geography, device, browser, and language settings to reach the right audience.
- **Custom Scheduling**: Define when notifications appear using precise time settings to optimize visibility.
- **Flexible Display Options**: Control placement, duration, and visibility across different screen sizes.
- **Custom Branding & Design**: Fully customize notifications with colors, fonts, and CSS styling to match your brand.
- **Real-Time Analytics**: Gain insights into notification performance and optimize engagement strategies.

## Use Cases

- **E-Commerce**: Show discount coupons and flash sale notifications to increase conversions.
- **SaaS & Online Services**: Display user sign-ups, testimonials, and activity updates to build social proof.
- **Event Promotion**: Highlight upcoming webinars, conferences, or live sessions to drive attendance.
- **Blog & Content Marketing**: Promote newly published or trending articles to increase readership.
- **Lead Generation**: Encourage newsletter sign-ups and content downloads with strategic notifications.

## Creating a Notification

Setting up a notification in Instafomo is quick and straightforward:

1. Navigate to the [Instafomo Console](https://console.instafomo.com/campaigns).
2. Select the campaign where you want to add a notification.
3. Click on **Create Notifications**.
4. Browse the list of available notification types.
5. Choose a notification type and configure its settings according to your requirements.

## Configuring a Coupon Code Notification

A **Coupon Code Notification** helps drive sales by offering discounts. Follow these steps to configure one:

1. Select **Coupon Code** from the notification types.
2. Click on **Create**.

### Notification Details

Configure key notification elements:

| Field                   | Example Value                               | Notes                                                                                        |
| ----------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Notification Name**   | `My new notification`                       | A descriptive name for internal reference.                                                   |
| **Title Message**       | `Summer sale discounts 🍉`                  | Use `<span>` HTML tags for styling if needed.                                                |
| **Description Message** | `Use coupon to get the limited discount 🍒` | Supports `<span>` HTML tags for styling.                                                     |
| **Image**               | No file chosen                              | Accepted formats: `.jpg`, `.jpeg`, `.png`, `.svg`, `.gif`, `.webp` (Max size limit applies). |
| **Image Alt**           | `Image description`                         | Used for accessibility and SEO.                                                              |
| **Coupon Code**         | `SUMMER30`                                  | Enter the promo code to display.                                                             |
| **Button URL**          | `https://example.com/`                      | Directs users to a specific page. Opens in a new tab if enabled.                             |
| **Button Text**         | `Claim coupon`                              | Customize the call-to-action button text. Supports `<span>` HTML tags.                       |

## Trigger Section

Define when and where the notification should appear:

| Setting                              | Example Value                    | Notes                                                               |
| ------------------------------------ | -------------------------------- | ------------------------------------------------------------------- |
| **Trigger on All Pages**             | ✅                               | Enable to show notifications site-wide.                             |
| **Exact Match URL**                  | `https://domain.com`             | Display only on a specific URL.                                     |
| **Display Delay**                    | `2 seconds`                      | Time delay before the notification appears.                         |
| **Display Frequency**                | -                                | Set the repetition interval.                                        |
| **Display Delay Type After Closing** | `21600 seconds`                  | Time before the notification reappears after being closed manually. |
| **Schedule**                         | ✅                               | Set specific time windows for visibility.                           |
| **Continents**                       | `Africa, Asia, Europe, etc.`     | Target specific regions. Leave empty for all.                       |
| **Countries**                        | `United States, Canada, etc.`    | Target specific countries. Leave empty for all.                     |
| **Cities**                           | `Tokyo, New York, Istanbul`      | Use comma-separated values to target cities. Leave empty for all.   |
| **Operating Systems**                | `iOS, Android, Windows, etc.`    | Restrict notifications to certain OS. Leave empty for all.          |
| **Browsers**                         | `Chrome, Firefox, Safari, etc.`  | Choose supported browsers. Leave empty for all.                     |
| **Browser Languages**                | `English, Spanish, French, etc.` | Target users based on language preference. Leave empty for all.     |
| **Display on Small Screens**         | ✅                               | Enable visibility on devices smaller than 768px.                    |
| **Display on Large Screens**         | ✅                               | Enable visibility on devices larger than 768px.                     |

## Display Section

Control how and where the notification appears:

| Setting                  | Example Value  | Notes                                                               |
| ------------------------ | -------------- | ------------------------------------------------------------------- |
| **Display Position**     | `Bottom-right` | Choose the position on the screen.                                  |
| **Display Duration**     | `5 seconds`    | Time the notification remains visible (`-1` for permanent display). |
| **Display Close Button** | ✅             | Allows users to dismiss the notification.                           |
| **Display Branding**     | ✅             | Optionally show Instafomo branding.                                 |

## Customization

Personalize the look and feel of notifications:

| Setting                     | Example Value                                       | Notes                                                |
| --------------------------- | --------------------------------------------------- | ---------------------------------------------------- |
| **Title Color**             | `#000000`                                           | Customize the title text color.                      |
| **Description Color**       | `#333333`                                           | Customize the description text color.                |
| **Background Color**        | `#ffffff`                                           | Set a custom background color.                       |
| **Background Pattern**      | ✅                                                  | Enable a background pattern if desired.              |
| **Button Background Color** | `#ff6600`                                           | Choose a button color to match branding.             |
| **Button Text Color**       | `#ffffff`                                           | Customize button text color.                         |
| **Close Button Color**      | `#999999`                                           | Adjust the close button color.                       |
| **Internal Padding**        | `12px`                                              | Control spacing within the notification.             |
| **Background Blur**         | `0px`                                               | Blur effect applies only to transparent backgrounds. |
| **Font**                    | `Custom font options available`                     | Select from different font styles.                   |
| **Custom CSS**              | `#notification_1 { font-weight: bold !important; }` | Apply custom styles using CSS.                       |

## Conclusion

Instafomo notifications provide businesses with a powerful tool to engage visitors, drive conversions, and create urgency. With an extensive range of customization options, advanced targeting, and real-time analytics, you can tailor notifications to fit your specific marketing goals. Start optimizing your user engagement today with Instafomo!
