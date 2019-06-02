import React from 'react';
import * as Formik from 'formik';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Code from 'react-feather/dist/icons/code';
import Copy from 'react-feather/dist/icons/copy';
import Refresh from 'react-feather/dist/icons/refresh-cw';
import { theme } from './playgroundTheme';

function Playground({ live, children, ...props }) {
  const [key, setKey] = React.useState(new Date().toISOString());
  if (!live) {
    return (
      <LiveProvider
        disabled
        theme={theme}
        key={key}
        scope={{ React, ...Formik }}
        code={children}
        noInline
        transformCode={code => code + ';;'}
        {...props}
      >
        <LiveEditor />
      </LiveProvider>
    );
  }
  return (
    <LiveProvider
      key={key}
      scope={{ React, ...Formik }}
      code={children}
      noInline
      transformCode={code => code + ';;'}
      theme={theme}
      {...props}
    >
      <div
        style={{
          borderRadius: 4,
        }}
      >
        <div
          style={{
            padding: '4px 8px',
            borderTop: '1px solid #eee',
            background: '#e6e8ea',
          }}
          className="row row--no-gutters row--align-center row--justify-space-between"
        >
          <div
            style={{
              textTransform: 'uppercase',
              fontSize: 11,
              fontWeight: 'bold',
              opacity: 0.4,
            }}
          >
            Live JSX Editor
          </div>
          <div>
            <div className="button-group">
              <button
                style={{ padding: '4px 6px' }}
                className="button button--sm button--secondary "
                onClick={() => setKey(s => s + 1)}
              >
                <Refresh
                  height={16}
                  width={16}
                  style={{ verticalAlign: 'middle' }}
                />
              </button>

              <button
                style={{ padding: '4px 6px' }}
                className="button button--sm button--secondary "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="feather feather-codesandbox"
                  style={{ verticalAlign: 'middle' }}
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                  <polyline points="7.5 19.79 7.5 14.6 3 12" />
                  <polyline points="21 12 16.5 14.6 16.5 19.79" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </button>
              <button
                style={{ padding: '4px 6px' }}
                className="button button--sm button--secondary"
              >
                <Copy
                  height={16}
                  width={16}
                  style={{ verticalAlign: 'middle' }}
                />
              </button>
            </div>
          </div>
        </div>

        <LiveEditor style={{ padding: 0, border: 0, outline: 0 }} />

        <div
          style={{
            padding: '0 8px',

            background: '#e6e8ea',
            height: 35,
            lineHeight: '34px',
          }}
        >
          <div
            style={{
              textTransform: 'uppercase',
              fontSize: 11,
              fontWeight: 'bold',
              opacity: 0.4,
            }}
          >
            Result
          </div>
        </div>
        <div style={{ position: 'relative', padding: 16 }}>
          <LivePreview />

          <LiveError />
        </div>
      </div>
    </LiveProvider>
  );
}

export default Playground;
