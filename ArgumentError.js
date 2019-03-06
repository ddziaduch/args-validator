define(function () {
  'use strict';

  /**
   * @constructor
   * @see http://stackoverflow.com/questions/783818/how-do-i-create-a-custom-error-in-javascript
   */
  function ArgumentError() {
    var typeError = TypeError.apply(this, arguments);
    typeError.name = this.name = ArgumentError.name;
    this.stack = typeError.stack;
    this.message = typeError.message;
  }

  ArgumentError.prototype = Object.create(TypeError.prototype, {
    constructor: {
      value: ArgumentError
    }
  });

  return ArgumentError;
});
