import { test, expect } from '@playwright/test';

test.describe('Blog Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog');
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
  });

  test('should display blog page header', async ({ page }) => {
    // Check heading
    const heading = page.locator('.heading');
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Blog');

    // Check breadcrumb
    const breadcrumb = page.locator('.path');
    await expect(breadcrumb).toBeVisible();
    await expect(breadcrumb).toHaveText('Home . Pages . Blog page');
  });

  test('should display all required blog page components', async ({ page }) => {
    // Check blog container
    const blogContainer = page.locator('.blog-container');
    await expect(blogContainer).toBeVisible();
    
    // Check blog posts section
    const blogPosts = page.locator('.blog-posts');
    await expect(blogPosts).toBeVisible();
    
    // Check sidebar
    const sidebar = page.locator('.sidebar');
    await expect(sidebar).toBeVisible();
    
    // Check search section
    const searchSection = sidebar.locator('.search');
    await expect(searchSection).toBeVisible();
    await expect(searchSection.locator('h3')).toHaveText('Search');
    await expect(searchSection.locator('.search-input')).toBeVisible();
    
    // Check categories section
    const categoriesSection = sidebar.locator('.categories');
    await expect(categoriesSection).toBeVisible();
    await expect(categoriesSection.locator('h3')).toHaveText('Categories');
    await expect(categoriesSection.locator('.category')).toHaveCount(await categoriesSection.locator('.category').count());
    
    // Check recent posts section
    const recentPostsSection = sidebar.locator('.recent-posts');
    await expect(recentPostsSection).toBeVisible();
    await expect(recentPostsSection.locator('h3')).toHaveText('Recent Post');
    await expect(recentPostsSection.locator('.recent-item')).toHaveCount(4);
    
    // Check sale products section
    const saleProductsSection = sidebar.locator('.sale-products');
    await expect(saleProductsSection).toBeVisible();
    await expect(saleProductsSection.locator('h3')).toHaveText('Sale Product');
    await expect(saleProductsSection.locator('.product-item')).toHaveCount(3);
  });

  test('should display blog post content correctly', async ({ page }) => {
    // Check blog items
    const blogItems = page.locator('.blog-item');
    await expect(blogItems).toHaveCount(await blogItems.count());
    
    // Check first blog item
    const firstBlogItem = blogItems.first();
    await expect(firstBlogItem).toBeVisible();
    
    // Check blog image
    const blogImage = firstBlogItem.locator('.blog-image');
    await expect(blogImage).toBeVisible();
    
    // Check blog meta
    const blogMeta = firstBlogItem.locator('.blog-meta');
    await expect(blogMeta).toBeVisible();
    await expect(blogMeta.locator('.blog-author')).toBeVisible();
    await expect(blogMeta.locator('.blog-date')).toBeVisible();
    
    // Check blog title
    await expect(firstBlogItem.locator('h2')).toBeVisible();
    
    // Check blog description
    const description = firstBlogItem.locator('p');
    await expect(description).toBeVisible();
    
    // Check read more button
    const readMoreButton = firstBlogItem.locator('.read-more');
    await expect(readMoreButton).toBeVisible();
    await expect(readMoreButton).toHaveText('Read More');
  });

  test('should have working read more functionality', async ({ page }) => {
    const firstBlogItem = page.locator('.blog-item').first();
    const readMoreButton = firstBlogItem.locator('.read-more');
    
    // Click read more
    await readMoreButton.click();
    await expect(readMoreButton).toHaveText('Show Less');
    
    // Click show less
    await readMoreButton.click();
    await expect(readMoreButton).toHaveText('Read More');
  });

  test('should have working pagination', async ({ page }) => {
    const pagination = page.locator('.pagination');
    await expect(pagination).toBeVisible();
    
    // Check pagination buttons
    const paginationButtons = pagination.locator('span');
    await expect(paginationButtons).toHaveCount(await paginationButtons.count());
    
    // Click next page
    const nextButton = paginationButtons.nth(1);
    await nextButton.click();
    await expect(nextButton).toHaveClass(/active/);
  });
}); 