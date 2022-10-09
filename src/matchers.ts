import { TypeMatchers } from './types';

/* istanbul ignore next */
const matcherResult = (errorMessage: string): jest.CustomMatcherResult => ({
  pass: true,
  message: () => errorMessage,
});

type TypeMatchersMap = Record<keyof TypeMatchers<void, any>, jest.CustomMatcher>;

export const customMathers: TypeMatchersMap = {
  toHaveType(_received: unknown) {
    return matcherResult('received value does not match the expected type');
  },
  toNotHaveType(_received: unknown) {
    return matcherResult('received value matches the expected type');
  },
  toHaveStrictType(_received: unknown) {
    return matcherResult('received value does not match the expected strict type');
  },
  toNotHaveStrictType(_received: unknown) {
    return matcherResult('received value matches the expected strict type');
  },
};
