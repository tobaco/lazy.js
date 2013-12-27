window.onload = function () {

    function createHTML() {
        var img = document.createElement('img');
        img.setAttribute('data-lazy', 'http://images5.fanpop.com/image/photos/24900000/kanzeon-cats-24910376-800-600.jpg');
        document.body.appendChild(img);
    }

    describe('lazy() method', function () {
        createHTML();

        it('should be defined', function () {
            expect(lazy).toBeDefined();
        });

        it('should be a function', function () {
            expect(typeof lazy).toEqual('function');
        });
    });

    describe('An image', function () {
        var loadEvent = jasmine.createSpy('loadEvent'),
            img = document.querySelector('img');

        it('shouldn\'t have "src" attibute', function () {
            expect(img.src).toEqual('');
        });

        it('should set "src" attibute', function () {
            var src = img.getAttribute('data-lazy');

            lazy(img);

            expect(img.src).not.toEqual('');

            expect(img.src).toEqual(src);
        });

        it('should remove "data-lazy" attibute', function () {
            expect(img.getAttribute('data-lazy')).toBe(null);
        });

        it('should load the image', function () {
            img.onload = function () {
                loadEvent();
                expect(loadEvent).toHaveBeenCalled();
            };

            waitsFor(function() {
                return loadEvent.callCount > 0;
            });
        });
    });

}