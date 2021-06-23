import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Raven from "raven-js";

Raven.config(
  "https://bc7f4c1ef41a41699eddd6f2e649c369@o867367.ingest.sentry.io/5823741",
  {
    release: "1-0-0",
    environment: "development-test",
  }
).install();

/* Sentry.init({
  dsn: "https://bc7f4c1ef41a41699eddd6f2e649c369@o867367.ingest.sentry.io/5823741",
  integrations: [new Integrations.BrowserTracing()],
  release: "1-0-0" + process.env.npm_package_version,

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
}); */

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
