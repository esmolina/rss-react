import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import { Response } from 'express';
import HtmlWrapper from './components/HtmlWrapper';

export function render(response: Response) {
  // eslint-disable-next-line react/no-children-prop
  const { pipe } = ReactDOMServer.renderToPipeableStream(<HtmlWrapper children={<App />} />, {
    // bootstrapScripts: ['/entry-client.tsx'],
    onShellReady() {
      response.setHeader('content-type', 'text/html');
      pipe(response);
    },
  });
}
