/**
 * Utils for asserting type expectation in tests
 *
 * @see {@link https://github.com/total-typescript/beginners-typescript-tutorial/blob/main/src/helpers/type-utils.ts for original types}
 */

export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;
export type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true;
