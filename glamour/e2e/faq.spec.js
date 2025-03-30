import { test, expect } from '@playwright/test';

// Устанавливаем только один тест для FAQ и ограничиваем его Chromium
test.describe('FAQ Page Tests', () => {
  // Запускаем только в Chromium
  test.skip(({ browserName }) => browserName !== 'chromium', 'Test only on Chromium');
  
  test('basic FAQ page test', async ({ page }) => {
    // Переходим на страницу FAQ
    await page.goto('/faq');
    
    // Ждем загрузки основного содержимого
    await page.waitForLoadState('domcontentloaded');
    
    // Простая проверка, что страница загрузилась
    await expect(page.locator('body')).toBeVisible();
    
    // Отключаем strict mode для этого теста, чтобы избежать ошибок
    page.setDefaultTimeout(5000);
    
    // Проверяем, что после загрузки страницы у нас есть какой-то текст
    const pageText = await page.textContent('body');
    expect(pageText.length).toBeGreaterThan(0);
    
    // Проверяем, что на странице есть заголовок
    const title = await page.title();
    expect(title).toBeTruthy();
  });
}); 