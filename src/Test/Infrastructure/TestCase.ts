import { mock, when, verify } from "ts-mockito";

export abstract class TestCase {
  createMock<T>(): T {
    return mock<T>();
  }

  addRule(): {};

  assertFalse(val) {
    return val === false;
  }

  assertTrue(val) {
    return val === true;
  }
}
