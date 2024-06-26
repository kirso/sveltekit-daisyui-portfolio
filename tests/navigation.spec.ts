import {test, expect} from '@playwright/test'

test('navigation smoke test', async ({page}) => {
	await page.goto('/')
	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle('Paulina Puppers')
	await expect(
		page.getByRole('heading', {name: 'Paulina Puppers', level: 1}),
	).toBeVisible()

	// navigate to Contact page
	await page.getByRole('link', {name: 'contact'}).click()
	await expect(page).toHaveTitle('Contact')
	await expect(
		page.getByRole('heading', {name: 'Reach out', level: 1}),
	).toBeVisible()
})
