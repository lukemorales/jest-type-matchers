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

    // strictness
    const target = { ok: false, resolved: true } as { ok: boolean } & { resolved: boolean };

    expect(target).toHaveType<{ ok: boolean; resolved: boolean }>();
    // @ts-expect-error
    expect(target).toHaveType<{ ok: boolean } & { resolved: boolean }>();
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

    // strictness
    const target = { ok: false, resolved: true } as { ok: boolean } & { resolved: boolean };

    expect(target).toNotHaveType<{ ok: false; resolved: true }>();
    // @ts-expect-error
    expect(target).toNotHaveType<{ ok: boolean; resolved: boolean }>();
  });
});

describe('toHaveStrictType', () => {
  it('does not fail the test suite', () => {
    // happy path
    expect(true).toHaveStrictType<boolean>();
    expect('hello world').toHaveStrictType<string>();
    expect(10).toHaveStrictType<number>();

    expect(['hello world']).toHaveStrictType<string[]>();
    expect(['hello world' as const]).toHaveStrictType<Array<'hello world'>>();
    expect(['hello world'] as const).toHaveStrictType<readonly ['hello world']>();

    expect({ ok: true }).toHaveStrictType<{ ok: boolean }>();
    expect({ ok: true } as const).toHaveStrictType<{ readonly ok: true }>();

    // unhappy path
    // @ts-expect-error
    expect(true).toHaveStrictType<unknown>();
    // @ts-expect-error
    expect('hello world').toHaveStrictType<number>();
    // @ts-expect-error
    expect(10).toHaveStrictType<string>();

    // @ts-expect-error
    expect(['hello world']).toHaveStrictType<['hello world']>();
    // @ts-expect-error
    expect(['hello world' as const]).toHaveStrictType<readonly ['hello world']>();
    // @ts-expect-error
    expect(['hello world'] as const).toHaveStrictType<Array<'hello world'>>();

    // @ts-expect-error
    expect({ ok: true }).toHaveStrictType<{ ok: true }>();
    // @ts-expect-error
    expect({ ok: true } as const).toHaveStrictType<{ ok: boolean }>();

    // strictness
    const target = { ok: false, resolved: true } as { ok: boolean } & { resolved: boolean };

    expect(target).toHaveStrictType<{ ok: boolean } & { resolved: boolean }>();
    // @ts-expect-error
    expect(target).toHaveStrictType<{ ok: boolean; resolved: boolean }>();
  });
});

describe('toNotHaveStrictType', () => {
  it('does not fail the test suite', () => {
    // happy path
    expect(true as const).toNotHaveStrictType<boolean>();
    expect('hello world').toNotHaveStrictType<number>();
    expect(10).toNotHaveStrictType<string>();

    expect(['hello world']).toNotHaveStrictType<number[]>();
    expect(['hello world' as const]).toNotHaveStrictType<['hello world']>();
    expect(['hello world'] as const).toNotHaveStrictType<['hello world']>();

    expect({ ok: true as const }).toNotHaveStrictType<{ ok: false }>();
    expect({ ok: true } as const).toNotHaveStrictType<{ ok: true }>();

    // unhappy path
    // @ts-expect-error
    expect(true as const).toNotHaveStrictType<true>();
    // @ts-expect-error
    expect('hello world').toNotHaveStrictType<string>();
    // @ts-expect-error
    expect(10).toNotHaveStrictType<number>();

    // @ts-expect-error
    expect(['hello world']).toNotHaveStrictType<string[]>();
    // @ts-expect-error
    expect(['hello world' as const]).toNotHaveStrictType<Array<'hello world'>>();
    // @ts-expect-error
    expect(['hello world'] as const).toNotHaveStrictType<readonly ['hello world']>();

    // @ts-expect-error
    expect({ ok: true as const }).toNotHaveStrictType<{ ok: true }>();
    // @ts-expect-error
    expect({ ok: true } as const).toNotHaveStrictType<{ readonly ok: true }>();

    // strictness
    const target = { ok: false, resolved: true } as { ok: boolean } & { resolved: boolean };

    expect(target).toNotHaveStrictType<{ ok: false; resolved: true }>();
    // @ts-expect-error
    expect(target).toNotHaveStrictType<{ ok: boolean } & { resolved: boolean }>();
  });
});
