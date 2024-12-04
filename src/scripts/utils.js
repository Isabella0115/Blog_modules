export const createElement = (tag, attributes = {}, children = []) => {
    const element = document.createElement(tag);

    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });

    children = Array.isArray(children) ? children : [children];

    children.forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else if (child instanceof Node) {
            element.appendChild(child);
        }
    });

    return element;
};

export const render = (element, container) => {
    if (!(container instanceof Element)) {
        throw new Error('Invalid container element');
    }
    container.appendChild(element);
};
