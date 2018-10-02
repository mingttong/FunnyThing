class ObjectFormatter {

    constructor(obj) {
        this.result = obj;
    }

    then(foo) {
        if (foo === undefined) {
            return this.result;
        }

        if (typeof foo !== 'function') {
            return new ObjectFormatter(foo);
        }

        return new ObjectFormatter(foo(this.result));
    }
}