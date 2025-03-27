# 🎭 Playwright - Простое Руководство

## Что такое Playwright?
Playwright - это инструмент для автоматического тестирования веб-сайтов. 
Представьте, что у вас есть робот, который может открывать веб-страницы и проверять, что всё работает правильно!

## Основные понятия

### 🎯 Locator (Локатор)
Локатор - это как указатель на элемент на странице. Например:
```javascript
const кнопка = page.locator('button');
```
Это как сказать: "Найди мне кнопку на странице!"

### 🔍 Как найти элементы?
Есть много способов найти элементы:
- По тексту: `page.locator('text=Нажми меня')`
- По ID: `page.locator('#моя-кнопка')`
- По классу: `page.locator('.красивая-кнопка')`
- По тегу: `page.locator('button')`

### ⏳ Ожидание (Wait)
Иногда нужно подождать, пока что-то появится на странице:
```javascript
await page.waitForLoadState('domcontentloaded'); // Ждём загрузки страницы
await элемент.waitFor({ state: 'visible' }); // Ждём, пока элемент станет видимым
```

### ✅ Проверки (Assertions)
Проверяем, что всё работает правильно:
```javascript
// Базовые проверки
await expect(элемент).toBeVisible(); // Проверяем, что элемент виден
await expect(элемент).toBeEnabled(); // Проверяем, что элемент активен
await expect(элемент).toHaveText('Привет'); // Проверяем текст

// Проверка классов
await expect(элемент).toHaveClass('красивый-класс'); // Проверяем один класс
await expect(элемент).toHaveClass(/красивый/); // Проверяем класс по частичному совпадению
await expect(элемент).toHaveClass(['класс1', 'класс2']); // Проверяем несколько классов

// Проверка CSS свойств
await expect(элемент).toHaveCSS('color', 'rgb(255, 0, 0)'); // Проверяем цвет
await expect(элемент).toHaveCSS('background-color', 'rgb(0, 0, 255)'); // Проверяем фон
await expect(элемент).toHaveCSS('font-size', '16px'); // Проверяем размер шрифта

// Проверка атрибутов
await expect(элемент).toHaveAttribute('href', 'https://example.com'); // Проверяем ссылку
await expect(элемент).toHaveAttribute('type', 'text'); // Проверяем тип поля
await expect(элемент).toHaveAttribute('data-testid', 'submit-button'); // Проверяем data-атрибут

// Проверка состояния
await expect(элемент).toBeChecked(); // Проверяем, что чекбокс отмечен
await expect(элемент).toBeDisabled(); // Проверяем, что элемент неактивен
await expect(элемент).toBeFocused(); // Проверяем, что элемент в фокусе
await expect(элемент).toBeEditable(); // Проверяем, что поле можно редактировать

// Проверка содержимого
await expect(элемент).toContainText('часть текста'); // Проверяем наличие части текста
await expect(элемент).toHaveValue('введённый текст'); // Проверяем значение поля ввода
await expect(элемент).toBeEmpty(); // Проверяем, что элемент пустой

// Проверка количества элементов
await expect(элементы).toHaveCount(5); // Проверяем количество элементов

// Проверка доступности (Accessibility)
await expect(элемент).toHaveAccessibleName('Отправить'); // Проверяем доступное имя элемента
await expect(элемент).toHaveAccessibleDescription('Нажмите для отправки формы'); // Проверяем описание
await expect(элемент).toHaveRole('button'); // Проверяем роль элемента

// Проверка URL
await expect(page).toHaveURL('https://example.com'); // Проверяем URL страницы
await expect(page).toHaveURL(/example/); // Проверяем URL по регулярному выражению

// Проверка заголовков
await expect(page).toHaveTitle('Моя страница'); // Проверяем заголовок страницы
await expect(page).toHaveTitle(/Моя/); // Проверяем заголовок по регулярному выражению

// Проверка скриншотов
await expect(page).toHaveScreenshot('screenshot.png'); // Проверяем скриншот страницы
await expect(элемент).toHaveScreenshot('element.png'); // Проверяем скриншот элемента
```

## 📝 Пример простого теста
```javascript
test('проверка кнопки', async ({ page }) => {
  // Открываем страницу
  await page.goto('http://мой-сайт.ru');
  
  // Находим кнопку
  const кнопка = page.locator('button');
  
  // Ждём, пока кнопка появится
  await кнопка.waitFor({ state: 'visible' });
  
  // Проверяем, что кнопка активна
  await expect(кнопка).toBeEnabled();
  
  // Нажимаем на кнопку
  await кнопка.click();
});
```

## �� Основные действия
### 👆 Взаимодействие с элементами
- `click()` - нажать на элемент
- `dblclick()` - двойной клик
- `rightclick()` - правый клик
- `hover()` - навести курсор
- `selectOption()` - выбрать опцию в выпадающем списке
- `check()` - поставить галочку
- `uncheck()` - убрать галочку

### ⌨️ Работа с текстом
- `fill()` - заполнить поле текстом (очищает поле перед вводом)
- `type()` - печатать текст (симулирует нажатие клавиш)
- `press()` - нажать клавишу (например, 'Enter', 'Tab')
- `down()` - нажать клавишу (не отпуская)
- `up()` - отпустить клавишу
- `insertText()` - вставить текст из буфера обмена

### 🔍 Поиск элементов
- `getByRole()` - найти по роли (button, link, textbox)
- `getByText()` - найти по тексту
- `getByLabel()` - найти по метке
- `getByPlaceholder()` - найти по placeholder
- `getByTestId()` - найти по data-testid
- `getByTitle()` - найти по title
- `locator()` - найти по CSS селектору или XPath

### 📄 Работа со страницей
- `goto()` - перейти по URL
- `reload()` - перезагрузить страницу
- `goBack()` - вернуться назад
- `goForward()` - перейти вперед
- `waitForLoadState()` - ждать загрузки страницы
- `waitForNavigation()` - ждать навигации
- `waitForURL()` - ждать определенного URL


## 💡 Советы
1. Всегда ждите загрузки страницы перед тестами
2. Используйте понятные имена для локаторов
3. Разбивайте сложные тесты на маленькие части
4. Добавляйте комментарии к важным действиям

## 🎯 Пример из реального мира
Вот пример из вашего кода:
```javascript
test('проверка заголовка', async ({ page }) => {
  // Ждём, пока заголовок появится
  const заголовок = page.locator('h1.heading');
  await заголовок.waitFor({ state: 'visible' });

  // Проверяем текст заголовка
  await expect(заголовок).toHaveText(/Leading the way in fashion/);
});
``` 