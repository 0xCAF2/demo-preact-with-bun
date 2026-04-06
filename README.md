# demo-preact-with-bun

Demo project to show how to use Preact with Bun.

At the moment (2026-04-05), HMR (Hot Module Replacement) does not work with this
configuration. The page includes `useSignal()`, `useContext()` and `useState()`
hooks to compare the state changes. Any of these state will be reset when
the page is reloaded.

While the Vite's starter template for Preact works with HMR out of the box,
it did not work with `@preact/signals` at the time of testing. I replaced
`useState()` with `useSignal()` simply to confirm that the state is reset on
reload, and it was.

Followed these steps to create this project:

1. `bun init` with "Blank".
2. `bun add preact` to add Preact as a dependency.
3. Modified settings in \*.json files.
4. Created `src/index.html` and `src/main.tsx` to render a simple Preact component.
5. Started the development server, and modified the code to confirm that hot reload works.

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.3.11. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
