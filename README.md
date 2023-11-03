# Bug Report: `tsc` generates incorrect types for arrow functions

`tsc` incorrectly simplifies declaration types for functions written in arrow notation.

For instance, the following code:

```typescript
export const map = <I, O>(i: I | undefined, fn: (_: I) => O): O | undefined => {
  if (i === undefined) {
    return undefined;
  }

  return fn(i);
};
```

produces the following definitions (incorrect):

```typescript
export declare const map: <I, O>(i: I, fn: (_: I) => O) => O;
```

However, code written in function notation:

```typescript
export function map2<I, O>(i: I | undefined, fn: (_: I) => O): O | undefined {
  if (i === undefined) {
    return undefined;
  }

  return fn(i);
}
```

produces the following definitions (as expected):

```typescript
export declare function map2<I, O>(i: I | undefined, fn: (_: I) => O): O | undefined;
```
