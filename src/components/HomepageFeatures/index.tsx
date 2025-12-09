import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
    <>
      This UI component library works out of the box with Tailwind, requiring no complex setup.  
      Pre-built, theme-ready components let you build clean, consistent interfaces instantly.
    </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Spend time crafting great experiences, not configuring UI. 
        {" "}<code>Atom</code> provides ready-to-use, themeable components that just 
        plug into your workflow.
      </>
    ),
  },
  {
    title: 'Powered by React@Vite & Tailwind CSS',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>``
      Focus on building, not configuring.
      A lightweight UI library powered by React, Vite, and Tailwind CSS. 
      so you can ship polished interfaces faster.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
