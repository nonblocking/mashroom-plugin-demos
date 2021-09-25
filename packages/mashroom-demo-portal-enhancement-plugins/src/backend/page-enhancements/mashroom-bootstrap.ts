import {MashroomPortalPageEnhancementPluginBootstrapFunction} from '@mashroom/mashroom-portal/type-definitions';

const bootstrap: MashroomPortalPageEnhancementPluginBootstrapFunction = () => {
    return {
        dynamicResources: {
            myScript: () => `console.info('My Script added');`,
        },
        rules: {
            onlyOnPage2: (sitePath, pageFriendlyUrl) => pageFriendlyUrl.indexOf("/test2") !== -1,
        }
    }
};

export default bootstrap;
