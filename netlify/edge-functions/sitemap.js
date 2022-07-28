export default (request, context) => {
  const pattern = new URLPattern({
    pathname: "/:category(.*sitemap.*\\.xml)",
  });
  return pattern.test(request.url)
    ? context.rewrite("/.netlify/builders/sitemap")
    : undefined;
};
