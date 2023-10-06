Feature: Verify user able to add items to cart and check out

Scenario: Verify user navigates to website and add items to cart

Given Launchapplication
When Cilck on BrowseSweets button
And add products to cart and move to cart
Then verify added products are in the cart
And verify total price of the products in the cart
And fill all the details and click on check out
