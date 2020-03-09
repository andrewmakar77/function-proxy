const uppercase = text => text.toUpperCase();

const functionHandler = {
  stringType: '[object String]',
  apply(fn, context, args) {
    return this.isOneStringArg(args) ?
      fn.apply(context, args) :
      this.logError('Function must apply only ONE string argument');
  },
  isOneStringArg(args) {
    return args.length === 1 && this.isString(args[0]);
  },
  isTypeOf(value) {
    return Object.prototype.toString.call(value);
  },
  isString(value) {
    return this.isTypeOf(value) === this.stringType;
  },
  logError(err) {
    console.error(err);
  }
}

const uppercaseProxy = new Proxy(uppercase, functionHandler);

console.log(uppercaseProxy('test'));
