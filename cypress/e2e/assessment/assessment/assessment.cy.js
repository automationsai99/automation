/// <reference types="Cypress" />
import { When, Then, Given, And } from 'cypress-cucumber-preprocessor/steps';
import AssessmentPage from '../../../support/pageObjects/AssessmentPage';
const assessmentPage = new AssessmentPage();
let data = {};

beforeEach(() => {
    cy.fixture('products').then(function(jsonData)
    {
        data = jsonData
    })
});

Given('Launchapplication', () => {
    cy.visit('https://sweetshop.netlify.app/')
});

When('Cilck on BrowseSweets button', () => {
    assessmentPage.clickBrowseSweets()
});

And('add products to cart and move to cart',() => {
    cy.xpath('//a[text()="Add to Basket"]').each(($product, index) => {
        const quantity = index + 1; 
        cy.wrap($product).click();
    })
    assessmentPage.clickBasketButton().click()
})

Then('verify added products are in the cart',() => {
    cy.get('#basketItems').each((basketItem) => {
    const productName = basketItem.find('#basketItems > li').text();
    expect([data.product1,data.product2,data.product3,data.product4,'']).to.include(productName);
    });
})

And('verify total price of the products in the cart',() => {
    cy.get('#basketItems').each((basketItem) => {
    const productName = basketItem.find('#basketItems > li').text();
    expect([data.product1,data.product2,data.product3,data.product4,'']).to.include(productName);
    });
})

And('fill all the details and click on check out',() => {
    assessmentPage.selectShipping().select('Standard Shipping');
    assessmentPage.enterFirstName().type(data.firstName);
    assessmentPage.enterLastName().type(data.lastName);
    assessmentPage.enterEmail().type(data.email);
    assessmentPage.enterAddress().type(data.Address);
    assessmentPage.enterCountry().select(data.country);
    assessmentPage.enterCity().select(data.city);
    assessmentPage.enterZip().type(data.zip);
    assessmentPage.enterNameOnCard().type(data.cardname);
    assessmentPage.enterCreditCard().type(data.cardnumber);
    assessmentPage.enterCVV().type(data.expiration);
    assessmentPage.enterZip().type(data.cvv);
    assessmentPage.clickCheckout().click();  
})




