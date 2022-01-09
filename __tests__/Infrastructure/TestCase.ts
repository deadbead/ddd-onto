import { equal } from "assert";
import { mock, instance, when} from "ts-mockito";

export abstract class TestCase {
  addRule = when;

  createMock<T>(): T {
    return instance(mock<T>());
  }

  public assertFalse(val: boolean, message?: string | Error) {
    return equal(val, false, `Value ${val} is not False`);
  }

  public assertTrue(val: boolean, message?: string | Error) {
    return equal(val, true, `Value ${val} is not True`);
  }
}
