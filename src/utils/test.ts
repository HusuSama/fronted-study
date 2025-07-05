function test(target: any) {
  console.log("装饰器运行")
}

@test
export default class MyClass {
  constructor() { }
}
