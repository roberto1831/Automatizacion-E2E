import { describe, it } from 'mocha';
import { actorCalled, Duration, Wait } from '@serenity-js/core';
import { Ensure, equals, isPresent } from '@serenity-js/assertions';
import {Navigate, Click, Enter, Text, By, PageElement, isVisible} from '@serenity-js/web';

// Selectores reutilizables
const LoginPage = {
    username: PageElement.located(By.id('user-name')),
    password: PageElement.located(By.id('password')),
    loginButton: PageElement.located(By.id('login-button')),
};

const InventoryPage = {
    addBackpack: PageElement.located(By.id('add-to-cart-sauce-labs-backpack')),
    addBikeLight: PageElement.located(By.id('add-to-cart-sauce-labs-bike-light')),
    cartBadge: PageElement.located(By.css('.shopping_cart_badge')),
    cartIcon: PageElement.located(By.css('.shopping_cart_link')),
};

const CheckoutPage = {
    firstName: PageElement.located(By.id('first-name')),
    lastName: PageElement.located(By.id('last-name')),
    zipCode: PageElement.located(By.id('postal-code')),
    continueButton: PageElement.located(By.id('continue')),
    finishButton: PageElement.located(By.id('finish')),
    confirmationMessage: PageElement.located(By.css('.complete-header')),
};

describe('Flujo de Compra en SauceDemo', () => {
    it('Completa una compra exitosa', async () => {
        await actorCalled('Usuario').attemptsTo(
            // 1. Autenticación
            Navigate.to('https://www.saucedemo.com/'),
            Enter.theValue('standard_user').into(LoginPage.username),
            Enter.theValue('secret_sauce').into(LoginPage.password),
            Click.on(LoginPage.loginButton),

            // 2. Agregar productos al carrito
            Click.on(InventoryPage.addBackpack),
            Click.on(InventoryPage.addBikeLight),
            Wait.upTo(Duration.ofSeconds(10)).until(InventoryPage.cartBadge, isPresent()),
            Ensure.that(Text.of(InventoryPage.cartBadge), equals('2')),

            // 3. Ver carrito
            Click.on(InventoryPage.cartIcon),

            // 4. Checkout y formulario
            Click.on(PageElement.located(By.id('checkout'))),
            Enter.theValue('Roberto').into(CheckoutPage.firstName),
            Enter.theValue('Toapanta').into(CheckoutPage.lastName),
            Enter.theValue('170502').into(CheckoutPage.zipCode),
            Click.on(CheckoutPage.continueButton),

            // 5. Finalizar compra
            Click.on(CheckoutPage.finishButton),
            Ensure.that(Text.of(CheckoutPage.confirmationMessage), equals('Thank you for your order!')),
        );
    });
});