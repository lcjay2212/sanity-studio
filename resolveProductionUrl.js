export default function resolveProductionUrl(document) {
  return `http://localhost:3000/movie/${document.slug.current}`;
}
