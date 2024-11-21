// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://743b947b11da7f70b04fee5d6f6cd6dd@o4508337739595776.ingest.de.sentry.io/4508337748443216",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
