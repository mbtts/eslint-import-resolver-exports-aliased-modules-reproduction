# eslint-import-resolver-exports-aliased-modules-reproduction

Reproduces a issue resolving aliased modules

## Setup

The following dependencies ([`package.json`](packages/consumer/package.json)):

1. [`globby`](https://github.com/sindresorhus/globby) aliased as `glob`
2. [`@scoped/dependency`](packages/dependency) aliased as `aliased-dependency`

```json
{
  "dependencies": {
    "glob": "npm:globby",
    "aliased-dependency": "workspace:@scoped/dependency@^"
  }
}
```

The following imports:

```javascript
import { globby } from 'glob';
import aliasedDependency from 'aliased-dependency';
```

ESLint configured using the [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import) with [`exports resolver`](https://github.com/cyco130/eslint-import-resolver-exports):

```javascript
module.exports = {
  extends: ['plugin:import/errors'],
  // …
  settings: {
    'import/resolver': {
      exports: {}
    }
  },
}
```

## Actual

```
  1:24  error  Unable to resolve path to module 'glob'                import/no-unresolved
  3:31  error  Unable to resolve path to module 'aliased-dependency'  import/no-unresolved

✖ 2 problems (2 errors, 0 warnings)
```

## Expected

Linting passes without error.

## Resolution

This issue can be resolved by passing the module name _instead of_ the `package.json` name to [`resolve.exports`](https://github.com/lukeed/resolve.exports).

See [support-aliased-packages](https://github.com/cyco130/eslint-import-resolver-exports/compare/main...mbtts:eslint-import-resolver-exports:support-aliased-packages) branch for fix.
