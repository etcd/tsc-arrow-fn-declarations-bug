export const map = <I, O>(i: I | undefined, fn: (_: I) => O): O | undefined => {
  if (i === undefined) {
    return undefined;
  }

  return fn(i);
};

export function map2<I, O>(i: I | undefined, fn: (_: I) => O): O | undefined {
  if (i === undefined) {
    return undefined;
  }

  return fn(i);
}
