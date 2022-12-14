export default (request, context) => {
  const pattern = new URLPattern({
    pathname: "/:category(.*sitemap.*\\.xml)",
  });

  const slug = pattern.exec(request.url)?.pathname?.groups?.category;

  return pattern.test(request.url)
    ? context.rewrite(`/.netlify/builders/sitemap/${slug}`)
    : undefined;
};
