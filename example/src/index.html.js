import { safeJsonStringify } from '@kaliber/safe-json-stringify'

export default (
  <html lang='en'>
    <head>
      <meta charSet='utf-8' />
      <title>Safe JSON stringify</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </head>
    <body>
      <div dangerouslySetInnerHTML={{ __html: JSON.stringify(content('JSON.stringify(...)')) }} />
      <div dangerouslySetInnerHTML={{ __html: safeJsonStringify(content('safeJsonStringify')) }} />
    </body>
  </html>
)

/** @arg {string} method */
function content(method) {
  return { 'title': 'Unsafe', 'content': `<script>alert('Injected using ${method}')</script>` }
}
