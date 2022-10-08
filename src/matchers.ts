const matcherResult = (errorMessage: string): jest.CustomMatcherResult => ({
  pass: true,
  message: () => errorMessage,
});

export const customMathers: jest.ExpectExtendMap = {
  toHaveType(_received: unknown) {
    return matcherResult('received value does not match the expected type');
  },
  toNotHaveType(_received: unknown) {
    return matcherResult('received value matches the expected type');
  },
};
