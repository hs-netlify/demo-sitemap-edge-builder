export default async (request, context) => {
  const pattern = new URLPattern({
    hostname: new URL(context.site.url).hostname,
    pathname: "/:category(.*sitemap.*\\.xml)",
  });
  return pattern.test(request.url)
    ? context.rewrite("/.netlify/builders/sitemap")
    : context.next();
};
