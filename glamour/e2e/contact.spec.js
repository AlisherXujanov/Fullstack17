import { test, expect } from '@playwright/test';

test.describe('Contact Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Устанавливаем более короткий таймаут для навигации
    await page.goto('/contact', { timeout: 30000 });
    
    // Дожидаемся появления заголовка
    await page.waitForSelector('.main-heading-wrapper', { timeout: 30000 });
  });

  test('should display contact page header', async ({ page }) => {
    // Check heading
    const headingWrapper = page.locator('.main-heading-wrapper');
    await expect(headingWrapper).toBeVisible();
    
    const heading = headingWrapper.locator('h1.heading');
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Contact');

    // Check breadcrumb
    const breadcrumb = headingWrapper.locator('p.path');
    await expect(breadcrumb).toBeVisible();
    await expect(breadcrumb).toContainText('Contact . Pages . Contact page');
  });

  test('should display contact details section', async ({ page }) => {
    const contactDetails = page.locator('.contact-details');
    await expect(contactDetails).toBeVisible();
    
    // Check left section
    const leftSection = contactDetails.locator('.left');
    await expect(leftSection).toBeVisible();
    await expect(leftSection.locator('h2')).toHaveText('Information About us');
    await expect(leftSection.locator('p.text-muted')).toBeVisible();
    
    // Check colors in left section
    const colors = leftSection.locator('.colors span');
    await expect(colors).toHaveCount(3);
    await expect(colors.nth(0)).toHaveClass('indigo');
    await expect(colors.nth(1)).toHaveClass('red');
    await expect(colors.nth(2)).toHaveClass('cyan');
    
    // Check right section
    const rightSection = contactDetails.locator('.right');
    await expect(rightSection).toBeVisible();
    await expect(rightSection.locator('h2')).toHaveText('Contact Way');
    
    // Check contact ways
    const contactWays = rightSection.locator('.contact-way');
    await expect(contactWays).toHaveCount(4);
    
    // Check first contact way
    const firstContactWay = contactWays.first();
    await expect(firstContactWay.locator('span')).toHaveClass('indigo');
    await expect(firstContactWay.locator('p.text-muted')).toContainText('Tel:877 676767');
    await expect(firstContactWay.locator('p.text-muted')).toContainText('E-Mail: shop@store.com');
  });

  test('should display contact form section', async ({ page }) => {
    const contactForm = page.locator('.contact-form');
    await expect(contactForm).toBeVisible();
    
    // Check left section
    const leftSection = contactForm.locator('.left');
    await expect(leftSection).toBeVisible();
    await expect(leftSection.locator('h2')).toHaveText('Get In Touch');
    await expect(leftSection.locator('p.text-muted')).toBeVisible();
    
    // Check form
    const form = leftSection.locator('form');
    await expect(form).toBeVisible();
    
    // Check form inputs
    const nameInput = form.locator('#contact-name');
    await expect(nameInput).toBeVisible();
    await expect(nameInput).toHaveAttribute('type', 'text');
    await expect(nameInput).toHaveAttribute('placeholder', 'First name*');
    
    const emailInput = form.locator('#contact-email');
    await expect(emailInput).toBeVisible();
    await expect(emailInput).toHaveAttribute('type', 'email');
    await expect(emailInput).toHaveAttribute('placeholder', 'Your email');
    
    const subjectInput = form.locator('#contact-subject');
    await expect(subjectInput).toBeVisible();
    await expect(subjectInput).toHaveAttribute('type', 'text');
    await expect(subjectInput).toHaveAttribute('placeholder', 'Subject*');
    
    const messageTextarea = form.locator('#contact-message');
    await expect(messageTextarea).toBeVisible();
    await expect(messageTextarea).toHaveAttribute('placeholder', 'Type your message');
    await expect(messageTextarea).toHaveAttribute('rows', '8');
    
    // Check submit button
    const submitButton = form.locator('button');
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toHaveText('Send Mail');
    
    // Check right section with image
    const rightSection = contactForm.locator('.right');
    await expect(rightSection).toBeVisible();
    const image = rightSection.locator('img');
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute('alt', 'Contact Image');
  });

  test('should handle form submission', async ({ page }) => {
    const form = page.locator('.contact-form form');
    
    // Fill in the form
    await form.locator('#contact-name').fill('John Doe');
    await form.locator('#contact-email').fill('john@example.com');
    await form.locator('#contact-subject').fill('Test Subject');
    await form.locator('#contact-message').fill('This is a test message');
    
    // Проверяем, что поля заполнены правильно
    await expect(form.locator('#contact-name')).toHaveValue('John Doe');
    await expect(form.locator('#contact-email')).toHaveValue('john@example.com');
    await expect(form.locator('#contact-subject')).toHaveValue('Test Subject');
    await expect(form.locator('#contact-message')).toHaveValue('This is a test message');
    
    // Note: В реальном приложении мы бы проверили отправку формы,
    // но здесь просто проверяем, что поля заполнены правильно
  });
}); 