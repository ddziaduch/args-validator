define(['ArgumentError'], function (ArgumentError) {
  'use strict';

  /**
   * @param {string} argumentName used in the error message
   * @param {*} argumentValue
   * @constructor
   */
  function ArgumentValidator(argumentName, argumentValue) {
    this.argumentName = String(argumentName);
    this.argumentValue = argumentValue;
  }

  /**
   * @param {*} expected
   * @returns {ArgumentValidator}
   * @throws {ArgumentError}
   */
  ArgumentValidator.prototype.verifyThatIsEqualTo = function verifyThatIsEqualTo(expected) {
    if (this.argumentValue === expected) return this;

    throw new ArgumentError('Expected ' + this.argumentName + ' to be ' + String(expected));
  };

  /**
   * @param {number} expected
   * @returns {ArgumentValidator}
   * @throws {ArgumentError}
   */
  ArgumentValidator.prototype.verifyThatIsGreaterThan = function verifyThatIsGreaterThan(expected) {
    if (this.argumentValue > expected) return this;

    throw new ArgumentError('Expected ' + this.argumentName + ' to be greater than ' + String(expected));
  };

  /**
   * @returns {ArgumentValidator}
   * @throws {ArgumentError}
   */
  ArgumentValidator.prototype.verifyThatIsNotEmpty = function verifyThatIsNotEmpty() {
    if (this.argumentValue) return this;

    throw new ArgumentError('Expected ' + this.argumentName + ' not to be empty');
  };

  /**
   * @param {Function} expectedInstance
   * @returns {ArgumentValidator}
   * @throws {ArgumentError}
   */
  ArgumentValidator.prototype.verifyInstanceOf = function verifyInstanceOf(expectedInstance) {
    if (this.argumentValue instanceof expectedInstance) return this;

    throw new ArgumentError('Expected ' + this.argumentName + ' to be instance of ' + String(expectedInstance.name));
  };

  /**
   * @param {string} expectedType
   * @returns {ArgumentValidator}
   * @throws {ArgumentError}
   */
  ArgumentValidator.prototype.verifyTypeOf = function verifyTypeOf(expectedType) {
    if (typeof this.argumentValue === expectedType) return this;

    throw new ArgumentError('Expected ' + this.argumentName + ' to be type of ' + String(expectedType));
  };

  /**
   * @param {Array} expectedTypes
   * @returns {ArgumentValidator}
   * @throws {ArgumentError}
   */
  ArgumentValidator.prototype.verifyTypesOf = function verifyTypesOf(expectedTypes) {
    var argumentValueType = typeof this.argumentValue;
    var isOneOfTypes = expectedTypes.some(function(type) {
      return argumentValueType === type;
    });
    if (isOneOfTypes) return this;

    throw new ArgumentError('Expected ' + this.argumentName + ' to be a type of ' + String(expectedTypes).replace(',', ' or ') + '');
  };

  /**
   * @param {RegExp} regExp
   * @returns {ArgumentValidator}
   * @throws {ArgumentError}
   */
  ArgumentValidator.prototype.verifyThatMatchesRegExp = function verifyThatMatchesRegExp(regExp) {
    if (regExp.test(this.argumentValue)) return this;

    throw new ArgumentError('Expected ' + this.argumentName + ' to match ' + String(regExp));
  };

  return ArgumentValidator;
});
