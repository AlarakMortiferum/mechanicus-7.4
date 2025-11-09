let page;

describe('Github page tests', () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('https://github.com/team');
  }, 15000);

  afterEach(async () => {
    await page.close();
  });

  test('The h1 header contains text', async () => {
    const header = await page.$('header div div h1');
    const text = await header.evaluate(element => element.textContent);
    expect(text).toContain('Build like the best');
  }, 10000);

  test('The first link attribute', async () => {
    const actual = await page.$eval('a', link => link.getAttribute('href'));
    expect(actual).toEqual('#start-of-content');
  }, 10000);

  test('The page contains Sign up button', async () => {
    const btnSelector = '.btn-mktg';
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain('Sign up for free');
  }, 10000);
});

describe('Additional page tests', () => {
  test('GitHub main page title', async () => {
    page = await browser.newPage();
    await page.goto('https://github.com');
    const title = await page.title();
    expect(title).toContain('GitHub: Let\'s build from here');
    await page.close();
  }, 10000);

  test('GitHub pricing page', async () => {
    page = await browser.newPage();
    await page.goto('https://github.com/pricing');
    const header = await page.$('h1');
    const text = await header.evaluate(element => element.textContent);
    expect(text).toContain('Get the complete developer platform');
    await page.close();
  }, 10000);

  test('GitHub features page', async () => {
    page = await browser.newPage();
    await page.goto('https://github.com/features');
    const header = await page.$('h1');
    const text = await header.evaluate(element => element.textContent);
    expect(text).toContain('The tools you need to build what you want');
    await page.close();
  }, 10000);
});