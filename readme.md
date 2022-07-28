# Safe JSON stringify
Returns a safe stringified version of a given string

## Motivation
Solves potential XSS vulnerabilities when using JSON.stringify() inside dangerouslySetInnerHtml={}

## Installation

```
yarn add @kaliber/safe-json-stringify
```

## Usage
```jsx
import { safeJsonStringify }  from '@kaliber/safe-json-stringify'

const content =  {"title":"Woooppppss","content":"</script><script>alert('gotcha!')</script>"}

export default function Component() {
  return <div dangerouslySetInnerHTML={{__html: safeJsonStringify(content)}}/>
}

```

## Releasing a new version
Because this library is used in both the node runtime and webpack environment, the library is precompiled using [kaliberjs/pack](https://github.com/kaliberjs/pack). When releasing a new version, do not forget to execute `yarn build` before running `yarn publish`. This should be done because the yarn publish command uses your local files to upload to the npm registry.

## Disclaimer
This library is intended for internal use, we provide __no__ support, use at your own risk. It does not import React, but expects it to be provided, which [@kaliber/build](https://kaliberjs.github.io/build/) can handle for you.

This library is not transpiled.
