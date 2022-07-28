This is a demonstration of an XML sitemap served by an on-demand builder function with regex routing via an edge function.

## Getting Started

Deploy the site to Netlify:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/orinokai/demo-sitemap-edge-builder)

Observe that any pages matching the regex in the [edge function](netlify/edge-functions/sitemap.js) are rewritten to the [builder function](netlify/functions/sitemap.js), which serves XML with a timestamp to demonstrate the revalidate period.
