const { chromium } = require('playwright')
const path = require('path')

async function captureOGImage() {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  // Set viewport size for OG image (1200x630 is recommended for OG images)
  await page.setViewportSize({ width: 1200, height: 630 })

  // Navigate to your site
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' })

  // Take screenshot
  await page.screenshot({
    path: path.join(process.cwd(), 'public/static/images/og-image.png'),
    type: 'png',
  })

  await browser.close()
}

// Run the capture
captureOGImage()
  .then(() => console.log('OG image generated successfully!'))
  .catch(console.error)
