/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import withBaseUrl from '@docusaurus/withBaseUrl';
import styles from './styles.module.css';

const highlights = [
  {
    title: 'Declarative',
    content: `Formik takes care
                  of the repetitive and annoying stuff--keeping track of
                  values/errors/visited fields, orchestrating validation, and
                  handling submission--so you don't have to. This means you spend
                  less time wiring up state and change handlers and more time
                  focusing on your business logic.`,
  },
  {
    title: 'Intuitive',
    content: `No fancy subscriptions or observables under the
                  hood, just plain React state and props. By staying within the core
                  React framework and away from magic, Formik makes debugging,
                  testing, and reasoning about your forms a breeze. If you know
                  React, and you know a bit about forms, you know Formik!`,
  },
  {
    title: 'Adoptable',
    content: `Since form state is inherently local and ephemeral, Formik 
                  does not use external state management libraries like Redux or MobX.
                  This also makes Formik easy to adopt incrementally and keeps bundle
                  size to a minimum.`,
  },
];

/* Note that this is only temporary. TODO: better welcome screen */
function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      /** this title will overwrite the one in config */
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames('hero hero--dark', styles.header)}>
        <div className="container">
          <img src={withBaseUrl('img/formik.svg')} alt="logo" />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--secondary button--lg',
                styles.getStarted
              )}
              to={withBaseUrl('docs/overview')}
            >
              Get Started
            </Link>

            <a
              className={classnames(
                'button button--secondary button--outline button--lg',
                styles.ghost
              )}
              href="https://github.com/jaredpalmer/formik"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>
      <main>
        {highlights && highlights.length && (
          <section className={styles.highlights}>
            <div className="container">
              <div className="row">
                {highlights.map(({ imageUrl, title, content }, idx) => (
                  <div
                    key={`landing-page-highlight-${idx}`}
                    className={classnames('col col--4', styles.highlight)}
                  >
                    <h3>{title}</h3>
                    <p>{content}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        <div className="container">
          <div className="row" />
        </div>
      </main>
    </Layout>
  );
}

export default Home;
