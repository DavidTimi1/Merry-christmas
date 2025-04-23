

function stripStylingContainers(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');

  const SEMANTIC_TAGS = new Set([
    'article', 'aside', 'details', 'figcaption', 'figure', 'footer',
    'header', 'main', 'mark', 'nav', 'section', 'summary', 'time', 'a',
    'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'table',
    'thead', 'tbody', 'tr', 'td', 'th', 'form', 'label', 'input', 'button'
  ]);

  const root = doc.getElementById('root');
  if (!root) {
    console.log("No element with id='root' found.");
    return '';
  }

  function isNonSemantic(tagName) {
    return !SEMANTIC_TAGS.has(tagName.toLowerCase());
  }

  function cleanElement(element) {
    const children = Array.from(element.children);
    element.removeAttribute('class');
    element.removeAttribute('style');
    element.removeAttribute('id');

    for (let child of children) {
      // Recursive clean first
      cleanElement(child);

      if (!child.innerText?.trim()){
        // Remove empty elements
        element.removeChild(child);
        continue;
      }
      
        const hasOneChildElement = child.children.length === 1 && child.childNodes.length === 1;

      // Case 1: This child has only 1 child and is not semantic
      
      if (
        isNonSemantic(child.tagName) && hasOneChildElement  // Only one node and it’s an element
      ) {
        // Replace it with its only child
        element.replaceChild(child.firstElementChild, child);
      }
      else if (
        hasOneChildElement && isNonSemantic(child.firstElementChild.tagName) // Only one node and it’s an element
      ) {
        // Replace it with its only child
        child.innerHTML = child.firstElementChild.innerHTML;
      }
    }
  }

  cleanElement(root);

  return root.outerHTML;
}

// Example usagenode 
const messyHTML = `
    <p> Insert messy html here </p>
`;

console.log("=== Cleaned ===\n");
console.log(stripStylingContainers(messyHTML));
