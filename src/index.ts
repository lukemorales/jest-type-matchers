import { customMathers } from './matchers';
import { TypeMatchers } from './types';

declare global {
  namespace jest {
    interface Matchers<R, T> extends TypeMatchers<R, T> {}
  }
}

expect.extend(customMathers);

export type { TypeMatchers } from './types';
