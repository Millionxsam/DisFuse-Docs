import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    description: (
      <>
        DisFuse allows you to easily create any bot you want without having any
        coding knowledge
      </>
    ),
  },
  {
    title: "Latest Discord Features",
    description: (
      <>
        We always have the latest and greatest Discord features on DisFuse so
        you can use them in your bots
      </>
    ),
  },
  {
    title: "Advanced Features",
    description: (
      <>
        Create custom blocks, collaborate with other users, use templates, and
        many other advanced built-in features!
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center"></div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
