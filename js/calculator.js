function Calculator() {

}

/**
 * Checks that all values are numbers
 * @param {array} values to use for calculator option
 * @return {array}
 */
Calculator.prototype._filter = function(values) {
    var len = values.length;

    // We could also not throw an error and just return
    // the filtered values if we wanted to.
    if (len !== values.filter(Number).length) {
        throw new Error('All values must be numeric');
    }

    return values;
};

/**
 * Add any number of arguments above 1
 * @return {Number} sum of the arguments
 */
Calculator.prototype.add = function() {
    var values = this._filter([].slice.apply(arguments));

    if (values.length < 2) {
        throw new Error('Add expects a minimum of 2 arguments but ' + values.length + ' given.');
    }

    return values.reduce(function(a, b) {
        return a + b;
    });
};
