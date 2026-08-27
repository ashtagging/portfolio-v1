// With HashRouter the URL fragment is owned by the router, so plain `#section`
// anchor links no longer scroll the page. Scroll the target section directly
// instead — every homepage section has a matching id.
export default function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
