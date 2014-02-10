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

        var i = 0,
            len = nodes.length,
            node,
            data,
            data2x,
            isRetina = function(){
                var mediaQuery =    "(-webkit-min-device-pixel-ratio: 1.5),\
                                    (min--moz-device-pixel-ratio: 1.5),\
                                    (-o-min-device-pixel-ratio: 3/2),\
                                    (min-resolution: 1.5dppx)";

                if (window.devicePixelRatio > 1)
                    return true;

                if (window.matchMedia && window.matchMedia(mediaQuery).matches)
                    return true;

                return false;
            };

        // Converts given nodes into an array.
        if (len === undefined) {
            len = 1;
            nodes = [nodes];
        }

        for (i; i < len; i += 1) {
            node = nodes[i];
            data = node.getAttribute('data-lazy'),
            data2x = (typeof node.getAttribute('data-lazy2x') !== "undefined" && node.getAttribute('data-lazy2x') !== null) ? node.getAttribute('data-lazy2x') : '';

            if (data2x !== '' && isRetina()) {
                node[node.tagName !== 'LINK' ? 'src' : 'href'] = data2x;
            } else if (data !== '') {
                node[node.tagName !== 'LINK' ? 'src' : 'href'] = data;
            }

            node.removeAttribute('data-lazy');
        }
    }

    // Expose lazy function.
    window.lazy = lazy;
}(this));
