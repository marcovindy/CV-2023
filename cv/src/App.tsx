import React from "react";
import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";

import { CV } from "./components/CV";

const renderer = createRenderer();

function App() {
  return (
    <RendererProvider renderer={renderer}>
      <CV />
    </RendererProvider>
  );
}

export default App;
