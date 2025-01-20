import { chromium } from '@playwright/test'
import projectsData from '../data/projectsData.js'
import path from 'path'
import { promises as fs } from 'fs'

async function takeScreenshots() {
  const browser = await chromium.launch()
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  })
  const page = await context.newPage()

  for (const project of projectsData) {
    try {
      console.log(`Taking screenshot of ${project.title}...`)
      await page.goto(project.href, { waitUntil: 'networkidle' })

      // Extract filename from imgSrc
      const filename = project.imgSrc.split('/').pop()
      const screenshotPath = path.join(
        process.cwd(),
        'public',
        'static',
        'images',
        'projects',
        filename
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

      console.log(`Screenshot saved: ${filename}`)
    } catch (error) {
      console.error(`Error taking screenshot for ${project.title}:`, error)
    }
  }

  await browser.close()
}

takeScreenshots().catch(console.error)
