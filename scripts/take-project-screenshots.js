const { chromium } = require('@playwright/test')
const path = require('path')
const { promises: fs } = require('fs')

async function takeScreenshot(url, filename) {
  const browser = await chromium.launch()
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  })
  const page = await context.newPage()

  try {
    console.log(`Taking screenshot of ${url}...`)
    await page.goto(url, { waitUntil: 'networkidle' })

    const screenshotPath = path.join(
      process.cwd(),
      'public',
      'static',
      'images',
      'projects',
      `${filename}.png`
    )

    // Ensure directory exists
    await fs.mkdir(path.dirname(screenshotPath), { recursive: true })

    // Take screenshot
    await page.screenshot({
      path: screenshotPath,
      fullPage: false,
      clip: {
        x: 0,
        y: 0,
        width: 1280,
        height: 800,
      },
    })

    console.log(`Screenshot saved: ${filename}.png`)
  } catch (error) {
    console.error(`Error taking screenshot for ${url}:`, error)
  } finally {
    await browser.close()
  }
}

const [url, filename] = process.argv.slice(2)
if (!url || !filename) {
  console.error('Usage: node take-project-screenshots.js <url> <filename>')
  process.exit(1)
}

takeScreenshot(url, filename).catch(console.error)
