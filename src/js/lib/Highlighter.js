
// Highlights array to hold each new span element
let highlights = [];


/* It is not possible to get certain styles set in css such as display using
the normal javascript. So we have to use this function taken from:
http://www.quirksmode.org/dom/getstyles.html */
function _getStyle(el, styleProp) {
    // if el is a string of the id or the actual object of the element
    const x = (document.getElementById(el)) ? document.getElementById(el) : el;
    let y;

    if (x.currentStyle) {
        y = x.currentStyle[styleProp];
    } else if (window.getComputedStyle) {
        y = document.defaultView.getComputedStyle(x, null).getPropertyValue(styleProp);
    }

    return y;
}


function highlight(word, highlightClass = 'fts-highlight', node = document.body) {
    for (node = node.firstChild; node; node = node.nextSibling) {
        // Text node check
        if (node.nodeType === 3) {
            const n = node;
            const position = n.nodeValue.toLowerCase().indexOf(word.toLowerCase());

            if (position > -1) {
                const before = n.nodeValue.substr(0, position); // split into a part before the match
                const middle = n.nodeValue.substr(position, word.length); // the matched word to preserve case
                const after = document.createTextNode(n.nodeValue.substr(position + word.length)); // and the part after the match
                const highlightElem = document.createElement('span'); // create a span in the middle

                highlightElem.className = highlightClass;

                highlightElem.appendChild(document.createTextNode(middle)); // insert word as textNode in new span
                n.nodeValue = before; // Turn node data into before
                n.parentNode.insertBefore(after, n.nextSibling); // insert after
                n.parentNode.insertBefore(highlightElem, n.nextSibling); // insert new span

                highlights.push(highlightElem);

                node = node.nextSibling; // Advance to next node or we get stuck in a loop because we created a span (child)
            }
        } else if (node.nodeType === 1 && !_getStyle(node, 'visibility').match(/hidden/i) && !_getStyle(node, 'display').match(/none/i)) { // Dont search in hidden elements
            highlight(word, highlightClass, node);
        }
    }
}


function unhighlight() {
    highlights.forEach(node => {
        const textNode = node.firstChild; // firstChild is the textnode in the highlighted span
        const parentNode = node.parentNode; // the parent element of the highlighted span

        // First replace each span with its text node nodeValue
        if (parentNode) {
            parentNode.replaceChild(textNode, node);
            parentNode.normalize(); // Removes empty Text nodes, and joins adjacent Text nodes in an element
        }
    });

    highlights = [];
}


/**
 * For the given `opts.query`, it searches all the text nodes
 * that occur within `opts.searchContainer` & wraps the matching
 * texts with span having class `opts.highlightClass`
 *
 * @param  {Object}   opts
 * @param  {Function} cb With the number of occurences as argument
 *
 * @return {void}
 */
export default function (opts, cb) {
    try {
        unhighlight(); // Remove highlights of any previous finds

        if (opts.query === '') {
            cb(0);

            return;
        }

        highlight(opts.query, opts.highlightClass, opts.searchContainer); // highlight all occurrences of search string

        cb(highlights.length);
    } catch (err) {
        cb(0);

        throw err;
    }
}
