'use strict';
var OrderSummaryPage = function(){};
var scrollIntoView = require('./util.js').scrollIntoView;

OrderSummaryPage.prototype = Object.create( {}, {
    visit : {
        value : function () {
            browser.get('/amruta-20181212');
        }
    },
    coupon: {
        get: function () {
            return element(by.id('order-coupons'));
        }
    },
    applyButton: {
        get: function () {
            return element(by.css('ng-click="applyCoupons()"'))
        }
    }

});

module.exports = OrderSummaryPage;