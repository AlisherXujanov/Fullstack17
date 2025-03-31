import { test, expect } from '@playwright/test';

test.describe('Product Details Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to a specific product page (using ID 1 as an example)
    await page.goto('/product-details/1');
    // Wait for the page to load and for the product data to be fetched
    await page.waitForLoadState('networkidle');
    // Wait for the product wrapper to be visible
    await page.waitForSelector('.item-wrapper');
  });

  test('should display product details header', async ({ page }) => {
    // Check heading
    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Product Details');

    // Check breadcrumb
    const breadcrumb = page.locator('.path').first();
    await expect(breadcrumb).toBeVisible();
    await expect(breadcrumb).toHaveText('Home . Pages . Product Details');
  });

  test('should display product image', async ({ page }) => {
    const imageWrapper = page.locator('.img-wrapper');
    await expect(imageWrapper).toBeVisible();
    
    const image = imageWrapper.locator('img');
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute('alt', 'item-image');
    await expect(image).toHaveAttribute('width', '100%');
    await expect(image).toHaveAttribute('height', '200');
  });

  test('should display product information', async ({ page }) => {
    const itemInfo = page.locator('.item-info');
    await expect(itemInfo).toBeVisible();
    
    // Check title
    const title = itemInfo.locator('h3').first();
    await expect(title).toBeVisible();
    
    // Check colors
    const colors = title.locator('.colors span');
    await expect(colors).toHaveCount(await colors.count());
    
    // Check price section
    const priceSection = itemInfo.locator('.item-price');
    await expect(priceSection).toBeVisible();
    
    const currentPrice = priceSection.locator('.current-price');
    await expect(currentPrice).toBeVisible();
    
    const realPrice = priceSection.locator('.real-price');
    await expect(realPrice).toBeVisible();
    
    // Check stars
    const stars = priceSection.locator('.stars span');
    await expect(stars).toHaveCount(await stars.count());
  });

  test('should display product description', async ({ page }) => {
    const description = page.locator('.item-description');
    await expect(description).toBeVisible();
  });

  test('should display action buttons', async ({ page }) => {
    const actionButtons = page.locator('.action-buttons');
    await expect(actionButtons).toBeVisible();
    
    // Check add to cart button
    const addToCartButton = actionButtons.locator('.add-to-card');
    await expect(addToCartButton).toBeVisible();
    
    // Check like button
    const likeButton = actionButtons.locator('.toggle-like');
    await expect(likeButton).toBeVisible();
    
    // Check close look button
    const closeLookButton = actionButtons.locator('.close-look');
    await expect(closeLookButton).toBeVisible();
  });

  test('should handle like button functionality', async ({ page }) => {
    const likeButton = page.locator('.toggle-like');
    await expect(likeButton).toBeVisible();
    
    // Click the like button
    await likeButton.click();
    
    // Wait for the state to update
    await page.waitForTimeout(100);
    
    // Check if the heart icon has changed to filled
    const filledHeart = likeButton.locator('.liked');
    await expect(filledHeart).toBeVisible();
  });
}); 