import { builder } from "@netlify/functions";
import fetch from "node-fetch";

async function handler(event, context) {
  const domain = "https://editors.dexerto.com";

  const path = event.path.split("/");
  const param = path[path.length - 1];

  const sitemap = await (
    await fetch(`${domain}/${param}`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
  ).text();

  return {
    statusCode: 200,
    body: sitemap,
    headers: {
      "Content-Type": "text/xml; charset=UTF-8",
    },
    ttl: 60,
  };
}

exports.handler = builder(handler);
