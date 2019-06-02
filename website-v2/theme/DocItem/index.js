/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Head from '@docusaurus/Head';

import DocPaginator from '@theme/DocPaginator';
import { MDXProvider } from '@mdx-js/react';
import styles from './styles.module.css';
import Playground from '../../components/Playground';

/**
 * Use explicit class names for all the components being rendered.
 */
const Components = {};

Components.code = Playground;
Components.inlineCode = props => <code className="code" {...props} />;
Components.wrapper = props => <React.Fragment {...props} />;
Components.h1 = props => <h1 className="h1" {...props} />;
Components.h2 = props => <h2 className="h2" {...props} />;
Components.h3 = props => <h3 className="h3" {...props} />;
Components.h4 = props => <h4 className="h4" {...props} />;
Components.h5 = props => <h5 className="h5" {...props} />;
Components.h6 = props => <h6 className="h6" {...props} />;
Components.p = props => <p className="paragraph" {...props} />;
Components.ul = props => <ul className="ul" {...props} />;
Components.ol = props => <ol className="ol" {...props} />;
Components.li = props => <li className="li" {...props} />;
Components.a = props => <a className="link" {...props} />;
Components.blockquote = props => (
  <blockquote className="blockquote" {...props} />
);
Components.strong = props => <strong className="strong" {...props} />;
Components.pre = props => (
  <pre
    className="pre"
    style={{
      backgroundColor: 'transparent',
      fontFamily: 'inherit',
      border: '1px solid #eee',
      padding: 0,
      boxSizing: 'border-box',
    }}
    {...props}
  />
);

function Headings({ headings, isChild }) {
  if (!headings.length) return null;
  return (
    <ul className={isChild ? 'contents' : 'contents contents__left-border'}>
      {headings.map(heading => (
        <li key={heading.id}>
          <a href={`#${heading.id}`} className="contents__link">
            {heading.value}
          </a>
          <Headings isChild headings={heading.children} />
        </li>
      ))}
    </ul>
  );
}

function DocItem(props) {
  const { metadata, content: DocContent, docsMetadata } = props;

  return (
    <div className={styles.docBody}>
      <Head>
        {metadata && metadata.title && <title>{metadata.title}</title>}
      </Head>
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8">
            <header>
              <h1 className="margin-bottom--lg">{metadata.title}</h1>
            </header>
            <article>
              <div className="markdown">
                <MDXProvider components={Components}>
                  <DocContent />
                </MDXProvider>
              </div>
            </article>
            <div className="margin-vert--lg" />
            <DocPaginator docsMetadata={docsMetadata} metadata={metadata} />
          </div>
          <div className="col col--3 col--offset-1">
            {DocContent.rightToc && <Headings headings={DocContent.rightToc} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocItem;
