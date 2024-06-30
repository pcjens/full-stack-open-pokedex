import { test, describe, expect } from '@playwright/test'

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('individual pokemon pages can be accessed from the front page', async ({ page }) => {
    await page.goto('/')
    await page.getByText('ninetales').click()

    await expect(page.getByText('ninetales')).toBeVisible()
    await expect(page.getByText('flash fire')).toBeVisible()
    await expect(page.getByText('drought')).toBeVisible()
  })
})
