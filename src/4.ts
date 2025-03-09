class Calculator {
    constructor(private readonly a: number, private readonly b: number) {}

    add(): number {
        return this.a + this.b;
    }

    subtract(): number {
        return this.a - this.b;
    }

    multiply(): number {
        return this.a * this.b;
    }

    divide(): number {
        return this.a / this.b;
    }
}
