
function some(cls, { kind, name }) {
  if (kind === "class") {
    return class extends cls {
      constructor(...args) {
        super(...args);
        console.log(`继承数据：${name}`)
      }
    }
  }
}

@some
export default class MyClass {
  constructor() { }

  print() {
    console.log(`数据是：${this.name}`)
  }
}
