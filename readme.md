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

## Disclaimer
This library is intended for internal use, we provide __no__ support, use at your own risk. It does not import React, but expects it to be provided, which [@kaliber/build](https://kaliberjs.github.io/build/) can handle for you.

This library is not transpiled.
