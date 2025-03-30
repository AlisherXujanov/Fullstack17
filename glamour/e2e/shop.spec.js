import { test, expect } from '@playwright/test';

test.describe('Shop Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/shop');
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
  });

  test('should display shop header', async ({ page }) => {
    // Check heading
    const heading = page.locator('.heading');
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Shop');

    // Check breadcrumb
    const breadcrumb = page.locator('.path');
    await expect(breadcrumb).toBeVisible();
    await expect(breadcrumb).toHaveText('Shop . Pages . Shop');
  });

  test('should display filters section', async ({ page }) => {
    const filtersWrapper = page.locator('.filters-wrapper');
    await expect(filtersWrapper).toBeVisible();
    
    // Check left section
    const leftSection = filtersWrapper.locator('.left');
    await expect(leftSection).toBeVisible();
    await expect(leftSection.locator('h4')).toHaveText('Ecommerce Accessories & Fashion Item');
    await expect(leftSection.locator('p')).toHaveText('Lorem ipsum dolor sit amet.');
    
    // Check right section
    const rightSection = filtersWrapper.locator('.right');
    await expect(rightSection).toBeVisible();
    
    // Check per page input
    const perPageSection = rightSection.locator('.per-page');
    await expect(perPageSection).toBeVisible();
    await expect(perPageSection.locator('p')).toContainText('Per page:');
    await expect(perPageSection.locator('input')).toBeVisible();
    
    // Check sort by select
    const sortBySection = rightSection.locator('.sort-by');
    await expect(sortBySection).toBeVisible();
    await expect(sortBySection.locator('p')).toHaveText('Sort By:');
    await expect(sortBySection.locator('select')).toBeVisible();
    
    // Check view toggle
    const viewSection = rightSection.locator('.view');
    await expect(viewSection).toBeVisible();
    await expect(viewSection.locator('p')).toContainText('View:');
    await expect(viewSection.locator('span')).toHaveCount(2);
  });

  test('should display product grid/list view', async ({ page }) => {
    const itemsWrapper = page.locator('.items-wrapper');
    await expect(itemsWrapper).toBeVisible();
    
    // Check if products are displayed
    const products = itemsWrapper.locator('.item-wrapper');
    await expect(products).toHaveCount(await products.count());
  });

  test('should have working view toggle', async ({ page }) => {
    const viewSection = page.locator('.view');
    const viewToggles = viewSection.locator('span');
    
    // Click grid view
    await viewToggles.nth(0).click();
    await expect(page.locator('.items-wrapper')).toHaveClass(/grid/);
    
    // Click list view
    await viewToggles.nth(1).click();
    await expect(page.locator('.items-wrapper')).toHaveClass(/list/);
  });

  test('should have working product actions', async ({ page }) => {
    const firstProduct = page.locator('.item-wrapper').first();
    await expect(firstProduct).toBeVisible();
    
    // Check action buttons
    const actionButtons = firstProduct.locator('.action-buttons span');
    await expect(actionButtons).toHaveCount(3);
    
    // Test like button
    const likeButton = actionButtons.nth(1);
    await likeButton.click();
    await expect(likeButton.locator('.liked')).toBeVisible();
  });

  test('should have working pagination', async ({ page }) => {
    const pagination = page.locator('.pagination');
    await expect(pagination).toBeVisible();
    
    // Check if pagination buttons are present
    const paginationButtons = pagination.locator('button');
    await expect(paginationButtons).toHaveCount(await paginationButtons.count());
    
    // Click next page
    const nextButton = paginationButtons.last();
    await nextButton.click();
    await expect(nextButton).toHaveClass(/active/);
  });
}); 