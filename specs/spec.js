var CheckOutPage = require('./page-objects/checkout.js');
var ErrorMessagesMapping = require('./pages/errorMessages.json');


describe('Protractor Application', function() {

    var checkOutPage;

    beforeEach(function() {
        checkOutPage = new CheckOutPage();
    });

    it('Apply coupon', function() {
        checkOutPage.visit();
        expect(browser.getCurrentUrl()).toContain("amruta");
        checkOutPage.coupon.sendKeys("abcd");
        checkOutPage.applyButton.click();

    });
});