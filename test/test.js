/* describe("pow", function () {
     function pow asserts by taking two parameters and should return
    8 and 81 respectivley in this example.
    

    it("2 raised to the power 3 should return 8", function () {
        assert.equal(pow(2, 3), 8)
    });

    it("3 raised to the power 4 should assert 81", function () {
        assert.equal(pow(3, 4), 81)
    });

});
 */


/* describe("Pow", function () {
    it("for negative n the result is NaN", function () {
        assert.isNaN(pow(2, -1));


    });
    it("for non-integer n the result is NaN ", function () {
        assert.isNaN(2,1.5);
    });

});
 */

 describe("pow", function () {
    function makeTest(x) {
        let expected = x * x * x;
        it(`${x} in the power 3 is ${expected}`, function () {
            assert.equal(pow(x, 3), expected);
        });
    }

    for (let x = 1; x <= 5; x++) {
        makeTest(x);
    }

})
 

 describe("test", function () {
    before(() => alert("Testing started -before all tests"));
    after(() => alert("Testing finished -after all tests"));

    beforeEach(() => alert("Before a test-enter a test"));
    afterEach(() => alert("After a test-exit a test"));

    it('test 1', () => alert(1));
    it('test 2', () => alert(2));
    this.timeout(3000);
    assert.ok(true);
});
 


