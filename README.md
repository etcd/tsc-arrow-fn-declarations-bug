# Bug repro: `tsc` incorrectly simplifies arrow function types

`tsc` incorrectly simplifies declaration types for functions written in arrow notation.
The `tsc` command used to build the source is as follows:

```bash
tsc src/*.ts --outdir build/ --allowSyntheticDefaultImports --declaration --sourceMap
```

And the source, containing equivalent functions aside from notation, is as follows:

```typescript
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
```

But `tsc` generates the following types:

```typescript
export declare const map: <I, O>(i: I, fn: (_: I) => O) => O;

export declare function map2<I, O>(
  i: I | undefined,
  fn: (_: I) => O
): O | undefined;
```

As seen above, `map` has an incorrect type signature, while `map2` has the correct type signature.

## Commands to reproduce bug using this repo

```bash
# install `typescript` dependency
npm install

# clear the old build
rm -rf build

# run build
npm run build
```
