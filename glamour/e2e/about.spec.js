import { test, expect } from '@playwright/test';

test.describe('About Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Устанавливаем более короткий таймаут для навигации
    await page.goto('/about', { timeout: 30000 });
    
    // Дожидаемся появления конкретного элемента вместо networkidle
    await page.waitForSelector('.box', { timeout: 30000 });
  });

  test('should display about page header', async ({ page }) => {
    // Check heading
    const heading = page.locator('.heading');
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('About Us');

    // Check breadcrumb
    const breadcrumb = page.locator('.path');
    await expect(breadcrumb).toBeVisible();
    await expect(breadcrumb).toHaveText('Home . Pages . About Us');
  });

  test('should display counter box', async ({ page }) => {
    const counterBox = page.locator('.box').first();
    await expect(counterBox).toBeVisible();
    
    // Check counter value
    const counterValue = counterBox.locator('h1');
    await expect(counterValue).toBeVisible();
    await expect(counterValue).toHaveText('Count: 0');
    
    // Check counter buttons
    const decrementButton = counterBox.locator('button[name="dec"]');
    await expect(decrementButton).toBeVisible();
    await expect(decrementButton).toHaveText('➖ Decrement');
    
    const incrementButton = counterBox.locator('button[name="inc"]');
    await expect(incrementButton).toBeVisible();
    await expect(incrementButton).toHaveText('➕ Increment');
  });

  test('should display range box', async ({ page }) => {
    const rangeBox = page.locator('.box').last();
    await expect(rangeBox).toBeVisible();
    
    // Check range value
    const rangeValue = rangeBox.locator('h1');
    await expect(rangeValue).toBeVisible();
    
    // Проверяем, что значение содержит ключевое слово rangeVal
    const rangeText = await rangeValue.textContent();
    expect(rangeText).toContain('rangeVal:');
    
    // Check range input
    const rangeInput = rangeBox.locator('input[type="range"]');
    await expect(rangeInput).toBeVisible();
  });

  test('should have working counter functionality', async ({ page }) => {
    const counterBox = page.locator('.box').first();
    
    // Test increment
    const incrementButton = counterBox.locator('button[name="inc"]');
    await incrementButton.click();
    await expect(counterBox.locator('h1')).toHaveText('Count: 2');
    
    // Test decrement
    const decrementButton = counterBox.locator('button[name="dec"]');
    await decrementButton.click();
    await expect(counterBox.locator('h1')).toHaveText('Count: -1');
  });

  test('should have working range functionality', async ({ page }) => {
    const rangeBox = page.locator('.box').last();
    const rangeInput = rangeBox.locator('input[type="range"]');
    
    // Получаем начальное значение
    const initialValue = await rangeBox.locator('h1').textContent();
    
    // Устанавливаем новое значение 50
    await rangeInput.fill('50');
    
    // Ждем, пока значение изменится
    await page.waitForTimeout(500);
    
    // Получаем новое значение и проверяем, что оно содержит "50"
    const newValue = await rangeBox.locator('h1').textContent();
    expect(newValue).not.toEqual(initialValue);
    expect(newValue).toContain('50');
  });
}); 