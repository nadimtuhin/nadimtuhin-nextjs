const { test, expect } = require('@playwright/test')

test.describe('Navigation', () => {
  test('should navigate to all pages successfully', async ({ page }) => {
    // Test home page
    await page.goto('/')
    await expect(page).toHaveTitle(/Nadim Tuhin/)

    // Test about page
    await page.goto('/about')
    await expect(page).toHaveTitle(/About - Nadim Tuhin/)

    // Test blog page
    await page.goto('/blog')
    await expect(page).toHaveTitle(/Blog - Nadim Tuhin/)

    // Test projects page
    await page.goto('/projects')
    await expect(page).toHaveTitle(/Projects - Nadim Tuhin/)

    // Test tags page
    await page.goto('/tags')
    await expect(page).toHaveTitle(/Tags - Nadim Tuhin/)
  })

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/')

    // Test navigation through links
    await page.click('text=About')
    await expect(page).toHaveURL('/about')

    await page.click('text=Blog')
    await expect(page).toHaveURL('/blog')

    await page.click('text=Projects')
    await expect(page).toHaveURL('/projects')

    await page.click('text=Tags')
    await expect(page).toHaveURL('/tags')
  })

  test('404 page should work', async ({ page }) => {
    await page.goto('/non-existent-page')
    await expect(page.locator('h1')).toContainText('404')
  })
})
