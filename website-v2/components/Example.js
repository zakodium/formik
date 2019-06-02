import React from 'react';
import * as Formik from 'formik';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Code from 'react-feather/dist/icons/code';
import Copy from 'react-feather/dist/icons/copy';
import Refresh from 'react-feather/dist/icons/refresh-cw';

function Example({ defaultOpen, ...props }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const [key, setKey] = React.useState(new Date().toISOString());
  return (
    <LiveProvider
      key={key}
      scope={{ React, ...Formik }}
      noInline
      theme={{
        plain: {
          color: '#393A34',
          backgroundColor: '#f6f8fa',
        },
        styles: [
          {
            types: ['comment', 'prolog', 'doctype', 'cdata'],
            style: {
              color: '#999988',
              fontStyle: 'italic',
            },
          },
          {
            types: ['namespace'],
            style: {
              opacity: 0.7,
            },
          },
          {
            types: ['string', 'attr-value'],
            style: {
              color: '#e3116c',
            },
          },
          {
            types: ['punctuation', 'operator'],
            style: {
              color: '#393A34',
            },
          },
          {
            types: [
              'entity',
              'url',
              'symbol',
              'number',
              'boolean',
              'variable',
              'constant',
              'property',
              'regex',
              'inserted',
            ],
            style: {
              color: '#36acaa',
            },
          },
          {
            types: ['atrule', 'keyword', 'attr-name', 'selector'],
            style: {
              color: '#00a4db',
            },
          },
          {
            types: ['function', 'deleted', 'tag'],
            style: {
              color: '#d73a49',
            },
          },
          {
            types: ['function-variable'],
            style: {
              color: '#6f42c1',
            },
          },
          {
            types: ['tag', 'selector', 'keyword'],
            style: {
              color: '#00009f',
            },
          },
        ],
      }}
      {...props}
    >
      <div
        style={{
          borderRadius: 4,
          border: '1px solid #eee',
        }}
      >
        <div style={{ position: 'relative', padding: 16 }}>
          <LivePreview />

          <LiveError />
        </div>
        <div
          style={{
            textAlign: 'right',
            background: '#f6f8fa',
            borderTop: '1px solid #eee',
            borderBottom: open ? '1px solid #eee' : undefined,
            padding: 4,
          }}
        >
          <button
            className="button button--sm button--secondary margin-right--sm"
            onClick={() => setKey(s => s + 1)}
          >
            <Refresh
              height={20}
              width={20}
              style={{ verticalAlign: 'middle' }}
            />
          </button>
          <button
            className="button button--sm button--secondary margin-right--sm"
            onClick={() => setOpen(s => !s)}
          >
            <Code height={20} width={20} style={{ verticalAlign: 'middle' }} />
          </button>
          <button className="button button--sm button--secondary margin-right--sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
          <button className="button button--sm button--secondary">
            <Copy height={20} width={20} style={{ verticalAlign: 'middle' }} />
          </button>
        </div>

        {open ? <LiveEditor /> : null}
      </div>
    </LiveProvider>
  );
}

export default Example;
