import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import process from 'node:process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

async function prerender() {
  const templatePath = toAbsolute('dist/index.html')
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found! Run vite build first.')
    process.exit(1)
  }

  const serverEntryPath = toAbsolute('dist/server/entry-server.js')
  const serverEntryUrl = new URL(`file://${serverEntryPath.replace(/\\/g, '/')}`).href

  const { render } = await import(serverEntryUrl)
  const appHtml = render()

  const template = fs.readFileSync(templatePath, 'utf-8')
  // Inject prerendered HTML into <div id="root"></div>
  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  )

  fs.writeFileSync(templatePath, html, 'utf-8')
  console.log(`✓ Successfully prerendered full website content (${appHtml.length} characters) into dist/index.html!`)

  // Clean up temporary server bundle
  fs.rmSync(toAbsolute('dist/server'), { recursive: true, force: true })
}

prerender().catch((err) => {
  console.error('Prerender error:', err)
  process.exit(1)
})
