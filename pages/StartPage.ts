  import { expect, type Locator, type Page } from '@playwright/test';

export class StartPage {
  readonly page: Page;
  readonly getCity: Locator;
  readonly clickMenuItem: Locator;
  readonly windowOfCityItem:Locator;

  constructor(page: Page) {
    this.page = page;
    
    this.getCity = page.locator("//div[contains(@class,'kVJScY')]/a/p[text()='Бровари']");
    this.clickMenuItem = page.locator("//div[contains(@class,'jDjInB')]/a/p[text()='Піца']");
    this.windowOfCityItem = page.locator("//div[contains(@class,'kFnTKo')]");
  }

  async goto() {
    await this.page.goto('https://dominos.ua/');
  }

  async selectCity(cityName: Locator) {
    await cityName.click();
  }

  async selectMenuItem(menuItem: Locator) {
    await menuItem.click();
  }

  async closeWindowOfCity() {
    await this.windowOfCityItem.click();
  }
}