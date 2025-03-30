import { test, expect } from '@playwright/test';

test.describe('Home Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
  });

  test('should display home page header', async ({ page }) => {
    // Check heading
    const heading = page.locator('.heading');
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Product Details');

    // Check breadcrumb
    const breadcrumb = page.locator('.path');
    await expect(breadcrumb).toBeVisible();
    await expect(breadcrumb).toHaveText('Home . Pages . Product Details');
  });

  test('should display product details part 1', async ({ page }) => {
    // Check part 1 container
    const part1 = page.locator('.part-1');
    await expect(part1).toBeVisible();

    // Check left section with images
    const leftSection = part1.locator('.left .left');
    await expect(leftSection).toBeVisible();
    await expect(leftSection.locator('img')).toHaveCount(3);

    // Check right section with main image
    const rightSection = part1.locator('.left .right');
    await expect(rightSection).toBeVisible();
    await expect(rightSection.locator('img')).toHaveCount(1);

    // Check product info section
    const productInfo = part1.locator('.right').nth(1);
    await expect(productInfo).toBeVisible();
    await expect(productInfo.locator('h1')).toHaveText('Playwood arm chair');
    await expect(productInfo.locator('.stars')).toBeVisible();
    await expect(productInfo.locator('.stars span')).toHaveText('(22)');
    await expect(productInfo.locator('.price')).toBeVisible();
    await expect(productInfo.locator('.current-price')).toHaveText('$32.00');
    await expect(productInfo.locator('.real-price')).toHaveText('$52.00');
    await expect(productInfo.locator('.color')).toHaveText('Color');
    await expect(productInfo.locator('.description')).toBeVisible();
    await expect(productInfo.locator('.add-to-cart')).toBeVisible();
    await expect(productInfo.locator('.add-to-cart p')).toHaveText('Add To Cart');
    await expect(productInfo.locator('.product-info')).toBeVisible();
    await expect(productInfo.locator('.product-info p')).toHaveCount(3);
  });

  test('should display product details part 2', async ({ page }) => {
    // Check part 2 container
    const part2 = page.locator('.part-2');
    await expect(part2).toBeVisible();

    // Check tabs
    const tabs = part2.locator('.top a');
    await expect(tabs).toHaveCount(4);
    await expect(tabs.nth(0)).toHaveText('Description');
    await expect(tabs.nth(1)).toHaveText('Additional Info');
    await expect(tabs.nth(2)).toHaveText('Reviews');
    await expect(tabs.nth(3)).toHaveText('Video');

    // Check description section
    const description = part2.locator('.center');
    await expect(description).toBeVisible();
    await expect(description.locator('h1')).toHaveText('Varius tempor.');
    await expect(description.locator('p')).toBeVisible();

    // Check more details section
    const moreDetails = part2.locator('.bottom');
    await expect(moreDetails).toBeVisible();
    await expect(moreDetails.locator('h1')).toHaveText('More Details');
    await expect(moreDetails.locator('p')).toHaveCount(4);
  });

  test('should display product details part 3', async ({ page }) => {
    // Check part 3 container
    const part3 = page.locator('.part-3');
    await expect(part3).toBeVisible();
    await expect(part3.locator('h1').first()).toHaveText('Related Products');

    // Check product cards
    const cards = part3.locator('.card');
    await expect(cards).toHaveCount(4);

    // Check first card
    const firstCard = cards.first();
    await expect(firstCard.locator('img')).toBeVisible();
    await expect(firstCard.locator('img')).toHaveAttribute('width', '100%');
    await expect(firstCard.locator('.card_content')).toBeVisible();
    await expect(firstCard.locator('h1')).toHaveText('Playwood arm chair');
    await expect(firstCard.locator('.stars')).toBeVisible();
    await expect(firstCard.locator('.price span')).toHaveText('$43.00');
  });

  test('should have working like button', async ({ page }) => {
    const likeButton = page.locator('.add-to-cart .heart');
    await expect(likeButton).toBeVisible();
    
    // Click like button
    await likeButton.click();
    await expect(likeButton).toHaveClass(/icon heart/);
    
    // Click again to unlike
    await likeButton.click();
    await expect(likeButton).toHaveClass(/icon heart/);
  });
}); 