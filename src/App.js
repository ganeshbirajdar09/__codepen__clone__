import "./App.css";
import React, { useState, useEffect } from "react";
import Editor from "./components/Editor";
const App = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [javascript, setJavascript] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
  <html>
  <style>${css}</style>
  <body>${html}</body>
  <script>${javascript}</script>
  </html>`);
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, javascript]);

  /**Rendering the code in the iframe below */

  return (
    <>
      <div className="pane top pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="Javascript"
          value={javascript}
          onChange={setJavascript}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
};

export default App;
