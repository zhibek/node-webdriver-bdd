describe('test google', function() {
    it('check the page title', function() {
        return browser
             .url('http://google.com')
             .getTitle().then(function(title) {
                 console.log(title);
				 expect(title).toEqual('NOT Google');
              });
    });
});