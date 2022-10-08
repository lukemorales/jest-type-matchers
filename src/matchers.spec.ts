/* eslint-disable @typescript-eslint/ban-ts-comment */
import { customMathers } from './matchers';

// since we are not configuring jest setupFiles to use index.ts
// we need to extend them here in order for the tests to use the matchers
expect.extend(customMathers);

describe('toHaveType', () => {
  it('does not fail the test suite', () => {
    // happy path
    expect(true).toHaveType<boolean>();
    expect('hello world').toHaveType<string>();
    expect(10).toHaveType<number>();

    expect(['hello world']).toHaveType<string[]>();
    expect(['hello world' as const]).toHaveType<Array<'hello world'>>();
    expect(['hello world'] as const).toHaveType<readonly ['hello world']>();

    expect({ ok: true }).toHaveType<{ ok: boolean }>();
    expect({ ok: true } as const).toHaveType<{ readonly ok: true }>();

    // unhappy path
    // @ts-expect-error
    expect(true).toHaveType<unknown>();
    // @ts-expect-error
    expect('hello world').toHaveType<number>();
    // @ts-expect-error
    expect(10).toHaveType<string>();

    // @ts-expect-error
    expect(['hello world']).toHaveType<['hello world']>();
    // @ts-expect-error
    expect(['hello world' as const]).toHaveType<readonly ['hello world']>();
    // @ts-expect-error
    expect(['hello world'] as const).toHaveType<Array<'hello world'>>();

    // @ts-expect-error
    expect({ ok: true }).toHaveType<{ ok: true }>();
    // @ts-expect-error
    expect({ ok: true } as const).toHaveType<{ ok: boolean }>();
  });
});

describe('toNotHaveType', () => {
  it('does not fail the test suite', () => {
    // happy path
    expect(true as const).toNotHaveType<boolean>();
    expect('hello world').toNotHaveType<number>();
    expect(10).toNotHaveType<string>();

    expect(['hello world']).toNotHaveType<number[]>();
    expect(['hello world' as const]).toNotHaveType<['hello world']>();
    expect(['hello world'] as const).toNotHaveType<['hello world']>();

    expect({ ok: true as const }).toNotHaveType<{ ok: false }>();
    expect({ ok: true } as const).toNotHaveType<{ ok: true }>();

    // unhappy path
    // @ts-expect-error
    expect(true as const).toNotHaveType<true>();
    // @ts-expect-error
    expect('hello world').toNotHaveType<string>();
    // @ts-expect-error
    expect(10).toNotHaveType<number>();

    // @ts-expect-error
    expect(['hello world']).toNotHaveType<string[]>();
    // @ts-expect-error
    expect(['hello world' as const]).toNotHaveType<Array<'hello world'>>();
    // @ts-expect-error
    expect(['hello world'] as const).toNotHaveType<readonly ['hello world']>();

    // @ts-expect-error
    expect({ ok: true as const }).toNotHaveType<{ ok: true }>();
    // @ts-expect-error
    expect({ ok: true } as const).toNotHaveType<{ readonly ok: true }>();
  });
});
