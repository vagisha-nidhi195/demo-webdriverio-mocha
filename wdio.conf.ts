import { join } from 'path';

exports.config = {
    runner: 'local',
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: ['./dist/**/WindowsApp.spec.js'],
    maxInstances: 1,
    capabilities: 
        {
            root: {
                capabilities: {
                    platformName: 'windows',
                    'appium:deviceName': 'WindowsPC',
                    'appium:app': 'Root',
                    'ms:experimental-webdriver': true,
                }
            },
            pv: {
                capabilities: {
                    platformName: 'windows',
                    'appium:deviceName': 'WindowsPC',
                    'appium:app': 'AmazonVideo.PrimeVideo_pwbj9vvecjh7j!App',
                    'ms:experimental-webdriver': true,
                }
            },

        },
    
    logLevel: 'debug',
    outputDir: './test-report/output',
    bail: 0,
    baseUrl: 'http://automationpractice.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        timeout: 30000,
       // ui: 'tdd'
    },
    reporters: [
    ],
    services: [
    ],
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json',
        },
        tsConfigPathsOpts: {
            baseUrl: './',
        },
    },
    before() {
        browser.setWindowSize(1280, 720);
    },
    afterTest: function (test: any, context: any, { error }: any) {
        if (error) {
            //browser.takeScreenshot();
        }
    },
};
