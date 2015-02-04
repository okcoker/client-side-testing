(function() {

    /////////////////////////
    // Helpers and globals //
    /////////////////////////

    var expect = chai.expect;

    ////////////////
    // Test suite //
    ////////////////

    describe('Calculator', function() {
        var self = this;

        before(function() {
            if (window.__html__) {
                document.body.innerHTML = window.__html__['test/index.html'];
            }

            this.calculator = new Calculator();
        });

        describe('Adding', function() {
            it('should throw an error if a non-numeric value is used', function() {
                console.log(this.calculator);
                expect(this.calculator.add.bind(this.calculator, 2, 'a')).to.throw();
            });

            it('should throw an error if less than 2 values are provided', function() {
                expect(this.calculator.add.bind(this.calculator, 2)).to.throw();
            });

            it('should add a series of number arguments together', function() {
                expect(this.calculator.add(2, 5)).to.equal(2 + 5);
            });
        });
    });
}());
