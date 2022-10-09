/**
 * @summary Custom matchers to assert type expectations
 *
 * @description
 * Note that these matchers will never fail in the test suite,
 * they can only fail in type land.
 */
export interface TypeMatchers<Void, Left> {
  /**
   * Assert that the received variable has the expected type.
   *
   * @example
   * expect(true).toHaveType<boolean>();
   *
   * @example
   * type Result = { ok: boolean } & { data: null };
   *
   * const res: Result = { ok: true, data: null };
   * expect(res).toHaveType<{ ok: boolean; data: null }>();
   */
  toHaveType<Right extends Alike<Left, Right> extends true ? Left : never>(): Void;
  /**
   * Assert that the received variable does not have the expected type.
   *
   * @example
   * expect('hello world').toNotHaveType<number>();
   */
  toNotHaveType<Right extends Unlike<Left, Right> extends true ? any : never>(): Void;
  /**
   * Assert that the received variable is strictly equal to the expected type.
   *
   * @example
   * expect(true).toHaveStrictType<boolean>();
   *
   * @example
   * type Result = { ok: boolean } & { data: null };
   *
   * const res: Result = { ok: true, data: null };
   * expect(res).toHaveStrictType<{ ok: boolean } & { data: null }>();
   */
  toHaveStrictType<Right extends Equal<Left, Right> extends true ? Left : never>(): Void;
  /**
   * Assert that the received variable is not strictly equal to the expected type.
   *
   * @example
   * expect('hello world').toNotHaveStrictType<number>();
   */
  toNotHaveStrictType<Right extends NotEqual<Left, Right> extends true ? any : never>(): Void;
}

/**
 * Utils for asserting type expectation in tests
 *
 * @see {@link https://github.com/total-typescript/beginners-typescript-tutorial/blob/main/src/helpers/type-utils.ts for original types}
 */

type Equal<Left, Right> = (<T>() => T extends Left ? 1 : 2) extends <T>() => T extends Right ? 1 : 2 ? true : false;
type NotEqual<Left, Right> = true extends Equal<Left, Right> ? false : true;

type MergeInsertions<T> = T extends object ? { [K in keyof T]: MergeInsertions<T[K]> } : T;

type Alike<Left, Right> = Equal<MergeInsertions<Left>, Right>;
type Unlike<Left, Right> = NotEqual<MergeInsertions<Left>, Right>;
