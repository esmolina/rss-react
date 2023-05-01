import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import HTMLWrapper from './components/HTMLWrapper';
import { Response } from 'express';

export function render(response: Response) {
  // eslint-disable-next-line react/no-children-prop
  const { pipe } = ReactDOMServer.renderToPipeableStream(<HTMLWrapper children={<App />} />, {
    // bootstrapScripts: ['/entry-client.tsx'],
    onShellReady() {
      response.setHeader('content-type', 'text/html');
      pipe(response);
    },
  });
}
