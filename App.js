import React from "react";
import ReactDOM from "react-dom/client";

if (module.hot) {
  module.hot.dispose(function (data) {
    // module is about to be replaced.
    // You can save data that should be accessible to the new asset in `data`
    data.updated = Date.now();
  });

  module.hot.accept(function (getParents) {
    // module or one of its dependencies was just updated.
    // data stored in `dispose` is available in `module.hot.data`
    let { updated } = module.hot.data;
  });
}


const title = <h1>this is a react element</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(title);