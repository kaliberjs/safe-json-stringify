import { safeJsonStringify }  from '@kaliber/safe-json-stringify'

const content =  {"title":"Woooppppss","content":"</script><script>alert('gotcha!')</script>"}
console.log({safeJsonStringify})
export default function App() {
  return <div dangerouslySetInnerHTML={{__html: safeJsonStringify(content)}}/>
}
