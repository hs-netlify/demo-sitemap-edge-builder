export default (request, context) => {
  const pattern = new URLPattern({
    pathname: "/:category(.*sitemap.*\\.xml)",
  });

  const splitSlug = request.url.split("/");
  const slug = splitSlug[splitSlug.length - 1];

  return pattern.test(request.url)
    ? context.rewrite(`/.netlify/builders/sitemap/${slug}`)
    : undefined;
};
