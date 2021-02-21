import {MashroomPortalPageEnhancementPluginBootstrapFunction} from '@mashroom/mashroom-portal/type-definitions';

const bootstrap: MashroomPortalPageEnhancementPluginBootstrapFunction = () => {
    return {
        dynamicResources: {
            myScript: () => `console.info('My Script added');`,
        },
        rules: {

        }
    }
};

export default bootstrap;
