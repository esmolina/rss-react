import { ReactNode } from 'react';

interface HtmlWrapperProps {
  children: ReactNode;
}
function HtmlWrapper({ children }: HtmlWrapperProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image" href="../../public/favico.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Beauty Land</title>
        <>
          <script
            type="module"
            dangerouslySetInnerHTML={{
              __html: `
            import RefreshRuntime from 'http://localhost:5173/@react-refresh'
            RefreshRuntime.injectIntoGlobalHook(window)
            window.$RefreshReg$ = () => {}
            window.$RefreshSig$ = () => (type) => type
            window.__vite_plugin_react_preamble_installed__ = true
          `,
            }}
          />
          <script type="module" src="http://localhost:5173/@vite/client" />
        </>
      </head>
      <body>
        <div id="root">{children}</div>
        <div id="portal"></div>
        <script type="module" src="../../src/entry-client.tsx"></script>
      </body>
    </html>
  );
}

export default HtmlWrapper;
