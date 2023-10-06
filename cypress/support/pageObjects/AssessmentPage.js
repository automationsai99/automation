class AssessmentPage
{
   clickBrowseSweets()
   {
    return cy.get('.btn.btn-primary.btn-lg.sweets')
   }

   clickBasketButton()
   {
    return cy.xpath('//a[@href="/basket"]')
   }

   addProduct()
   {
    return cy.xpath('//a[text()="Add to Basket"]')
   }

   enterFirstName()
   {
     return cy.xpath('(//*[@id="name"])[1]')
   }

   enterLastName()
   {
     return cy.xpath('(//*[@id="name"])[2]')
   }

   enterEmail()
   {
     return cy.xpath('//*[@id="email"]')
   }

   enterAddress()
   {
     return cy.xpath('//*[@id="address"]')
   }

   enterCountry()
   {
    return cy.xpath('//*[@id="country"]')
   }

   enterCity()
   {
    return cy.xpath('//*[@id="city"]]')
   }

   enterZip()
   {
    return cy.xpath('//*[@id="zip"]')
   }

   enterNameOnCard()
   {
    return cy.xpath('//*[@id="cc-name"]')
   }

   enterCreditCard()
   {
    return cy.xpath('//*[@id="cc-number"]')
   }

   enterExpiration()
   {
    return cy.xpath('//*[@id="cc-expiration"]')
   }

   enterCVV()
   {
    return cy.xpath('//*[@id="cc-expiration"]')
   }

   selectShipping()
   {
     return cy.xpath('label[for="exampleRadios2"]')
   }
   clickCheckout()
   {
    return cy.xpath('//*[text()="Continue to checkout"]')
   }
}

export default AssessmentPage;