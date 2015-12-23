(function() {

    /////////////////////////
    // Helpers and globals //
    /////////////////////////

    var expect = chai.expect;

    ////////////////
    // Test suite //
    ////////////////


    // With mocha we want to describe the module/component/behavior we are testing
    // with a describe block - describe('Component', function() { })
    describe('Calculator', function() {

        // Mocha’s before() function runs once before the rest of the tests start
        // Mocha also comes with after, beforeEach and afterEach which should
        // be self explanatory
        before(function() {
            // Karma creates this global __html__ property that will hold all
            // of our HTML so we can populate the body during our tests
            if (window.__html__) {
                document.body.innerHTML = window.__html__['test/index.html'];
            }

            // Create a new instance of our Calculator module to be used in
            // each `it` test case within the ‘Calculator’ describe block
            this.calculator = new Calculator();
        });

        // Now we describe the adding behavior of the calculator module
        describe('Adding', function() {

            // What should it do?
            it('should throw an error if a non-numeric value is used', function() {
                // Chai’s expect function will take a any value, including a function
                // but in our case, we want it to throw an error. If we just said
                // this.calculator.add(2, ‘a’), the error would throw before `expect`
                // could handle it. This is why we create a new function using bind
                // passing in our specified arguments and let Chai catch the error.
                expect(this.calculator.add.bind(this.calculator, 2, 'a')).to.throw();
            });

            // Mocha’s `it` functions takes a string for the first argument and
            // and a function for the second argument. These tests are considered
            // pending without the function argument
            it('should throw an error if less than 2 values are provided', function() {
                expect(this.calculator.add.bind(this.calculator, 2)).to.throw();
            });

            // I want to be able pass any number of arguments to the calculator’s
            // soon-to-be-added “add” function i.e. calculator.add(1, 2, 3, 4) should return 10
            it('should add a series of number arguments together', function() {
                // This test case reads exactly how you would expect
                expect(this.calculator.add(2, 5)).to.equal(2 + 5);
            });
        });


        // describe('Subtraction', function() {
        //     @todo
        // });
    });
}());
