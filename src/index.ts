import { Equal, NotEqual } from './types';

const matcherResult = (message: string): jest.CustomMatcherResult => ({
  pass: true,
  message: () => message,
});

const customMathers: jest.ExpectExtendMap = {
  toHaveType(received: unknown) {
    return matcherResult(`${received} does not match the expected types`);
  },
  toNotHaveType(received: unknown) {
    return matcherResult(`${received} matches the expected types`);
  },
};

expect.extend(customMathers);

/**
 * @summary Custom matchers to assert type expectations
 *
 * @description
 * Note that these matchers will never fail in the test suite,
 * they can only fail in type land.
 */
export interface TypeMatchers<R, X> {
  /**
   * Assert that the received variable has the expected type.
   *
   * @example
   * expect(true).toHaveType<boolean>()
   */
  toHaveType<Y extends Equal<X, Y> extends true ? X : never>(): R;
  /**
   * Assert that the received variable does not have the expected type.
   *
   * @example
   * expect('hello world').toNotHaveType<number>()
   */
  toNotHaveType<Y extends NotEqual<X, Y> extends true ? any : never>(): R;
}

declare global {
  namespace jest {
    interface Matchers<R, T> extends TypeMatchers<R, T> {}
  }
}
