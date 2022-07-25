# BEFORE YOU PUBLISH
- Read [Libraries van Kaliber](https://docs.google.com/document/d/1FrJi-xWtKkbocyMVK5A5_hupjl5E4gD4rDvATDlxWyc/edit#heading=h.bb3md3gyf493).
- Make sure your example works.
- Make sure your package.json is correct. Have you change the library title?
- Update the bin/postInstall script. It should refer to your library.
- Update the `<title>` tag in `index.html.js`.
- Remove 'BEFORE YOU PUBLISH' and 'PUBLISHING' from this document.

# PUBLISHING
- Make sure you are added to the kaliber organization on NPM
- run `yarn publish`
- Enter a correct version, we adhere to semantic versioning (semver)
- run `git push`
- run `git push --tags`
- Send everybody an email to introduce them to your library!

# Safe JSON stringify
Returns a safe stringified version of a given string

## Motivation
Solves potential XSS vulnerabilities when using JSON.stringify() inside dangerouslySetInnerHtml={}

## Installation

```
yarn add @kaliber/library
```

## Usage
Short example. If your library has multiple ways to use it, show the most used one and refer to `/example` for further examples.

```jsx
import { safeJsonStringify } from '@kaliber/safe-json-stringify'

function Component() {
  return <div>{hello()}</div>
}
```

## Disclaimer
This library is intended for internal use, we provide __no__ support, use at your own risk. It does not import React, but expects it to be provided, which [@kaliber/build](https://kaliberjs.github.io/build/) can handle for you.

This library is not transpiled.