import clsx from "clsx";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Sign Up for Free",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Create your InstaFomo account in seconds with just your email or social
        login.
      </>
    ),
    link: "https://console.instafomo.com/register?redirect=dashboard",
    buttonName: "Free Trial",
  },
  {
    title: "Create Your Campaign",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Set up your first FOMO notification campaign by customizing the settings
        to match your brand.
      </>
    ),
    link: "/getting-started/overview#step-1-create-a-campaign",
    buttonName: "Create Campaign",
  },
  {
    title: "Add the Pixel Code",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Copy and paste the InstaFomo pixel code into your website to start
        displaying real-time notifications.
      </>
    ),
    link: "/getting-started/overview#step-3-add-the-pixel-code",
    buttonName: "Setup Pixel",
  },
];

function Feature({ Svg, title, description, link, buttonName }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link className="button button--primary" to={link}>
          {buttonName}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
