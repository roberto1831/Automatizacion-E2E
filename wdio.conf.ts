import type { Options } from '@wdio/types';
import { WebdriverIOConfig } from '@serenity-js/webdriverio';

export const config: WebdriverIOConfig = {
    framework: '@serenity-js/webdriverio',
    specs: ['./test/specs/**/*.spec.ts'],
    reporters: ['spec'],
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless', '--window-size=1920,1080']
        },

    }],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        require: [
            '@serenity-js/mocha/lib/adapter/index.js'
        ]
    },
    serenity: {
        crew: [
            '@serenity-js/console-reporter',
            ['@serenity-js/core:ArtifactArchiver', { outputDirectory: './target/site/serenity' }],
            ['@serenity-js/web:Photographer', { strategy: 'TakePhotosOfInteractions' }],


        ]
    }
};