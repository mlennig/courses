import Raven from "raven-js";

function init() {
  Raven.config(
    "https://bc7f4c1ef41a41699eddd6f2e649c369@o867367.ingest.sentry.io/5823741",
    {
      release: "1-0-0",
      environment: "development-test",
    }
  ).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log,
};
