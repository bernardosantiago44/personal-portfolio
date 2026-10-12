// Make overflowing technical content reachable with a keyboard, without client JS.
export default function rehypeBlog() {
  return (tree, file) => {
    if (!String(file.path).replaceAll('\\', '/').includes('/src/content/blog/')) return;
    function walk(node) {
      if (!node.children) return;
      node.children = node.children.map((child) => {
        walk(child);
        if (child.type === 'element' && child.tagName === 'pre') {
          child.properties = { ...child.properties, tabIndex: 0, 'aria-label': 'Code example' };
        }
        if (child.type === 'element' && child.tagName === 'table') {
          return {
            type: 'element', tagName: 'div',
            properties: { className: ['blog-table-scroll'], tabIndex: 0, role: 'region', 'aria-label': 'Scrollable table' },
            children: [child],
          };
        }
        return child;
      });
    }
    walk(tree);
  };
}
