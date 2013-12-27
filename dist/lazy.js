/*!
 * lazy.js v0.0.1
 *
 * Copyright (c) 2013, MercadoLibre.com
 * Released under the MIT license.
 */
(function (window) {
    'use strict';

    /**
     * Loads resources asynchronously on-demand.
     * @param {NodeList} [nodes] - An node element or a collection of node elements. Default: the result of `querySelectorAll('[data-lazy]')`.
     * @example
     * <img data-lazy="http://foo.bar.com/foobar.png" width="400" height="300">
     *
     * <script>
     *     window.onload = function () {
     *         lazy();
     *     };
     * </script>
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