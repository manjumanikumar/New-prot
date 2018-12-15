
exports.config = {
    chromeOnly: true,
    directConnect:true,

    specs: ['specs/spec.js'],
    baseUrl: 'https://fschallenge.test.qa.onfastspring.com',

    // seleniumAddress: 'http://localhost:4444/wd/hub',

    framework: 'jasmine2',

    plugins: [{
        package: 'protractor-screenshoter-plugin',
        screenshotPath: './screenshots/e2e',
        screenshotOnExpect: 'failure+success',
        screenshotOnSpec: 'none',
        withLogs: true,
        writeReportFreq: 'asap',
        imageToAscii: 'none',
        clearFoldersBeforeTest: true
    }],

    onPrepare: function () {
        var caps = browser.getCapabilities()
    },

    multiCapabilities: [
        {
            browserName:'chrome',
            maxInstances : 1,
            shardTestFiles: true

        }
    ],

    onComplete: function () {

        console.log("Session completed");
    }
}
