import { builder } from "@netlify/functions";
import fetch from "node-fetch";

async function handler(event, context) {
  const time = new Date().toLocaleTimeString();
  const sitemap = `<?xml version="1.0"?><time>${time}</time>`;

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/xml",
    },
    body: sitemap,
    ttl: 60,
  };
}

exports.handler = builder(handler);
