(function (window) {
    'use strict';

    /**
     * Loads resources asynchronously and on-demand.
     * @param {NodeList} [nodes] - A NodeList of elements. Default: the result of `querySelectorAll('[data-lazy]').
     * @returns {NodeList}
     */
    function lazy(nodes) {
        nodes = nodes || document.querySelectorAll('[data-lazy]');

        // Converts given nodes into an array.
        if (nodes.length === undefined) {
            nodes = [nodes];
        }

        var i = 0,
            len = nodes.length,
            src,
            node,
            data;

        for (i; i < len; i += 1) {
            node = nodes[i];
            data = node.getAttribute('data-lazy');

            if (data !== '') {
                src = node.tagName !== 'LINK' ? 'src' : 'href';
                node[src] = data;
            }

            node.removeAttribute('data-lazy');
        }
    }

    // Expose lazy function.
    window.lazy = lazy;
}(this));