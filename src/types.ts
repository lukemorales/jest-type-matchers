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
  toHaveType<Y extends Alike<X, Y> extends true ? X : never>(): R;
  /**
   * Assert that the received variable does not have the expected type.
   *
   * @example
   * expect('hello world').toNotHaveType<number>()
   */
  toNotHaveType<Y extends Unlike<X, Y> extends true ? any : never>(): R;
}

/**
 * Utils for asserting type expectation in tests
 *
 * @see {@link https://github.com/total-typescript/beginners-typescript-tutorial/blob/main/src/helpers/type-utils.ts for original types}
 */

type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;
type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true;

type MergeInsertions<T> = T extends object ? { [K in keyof T]: MergeInsertions<T[K]> } : T;

type Alike<X, Y> = Equal<MergeInsertions<X>, Y>;
type Unlike<X, Y> = NotEqual<MergeInsertions<X>, Y>;
