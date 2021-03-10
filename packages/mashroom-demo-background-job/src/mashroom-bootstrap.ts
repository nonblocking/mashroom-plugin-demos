
import type {MashroomPluginContext} from '@mashroom/mashroom/type-definitions';
import type {MashroomBackgroundJobPluginBootstrapFunction} from '@mashroom/mashroom-background-jobs/type-definitions';

const backgroundJob = (pluginContext: MashroomPluginContext) => {
    const logger = pluginContext.loggerFactory('test.backgroundJob');

    logger.info(`===== Executing dummy background job  =====`);
};

const bootstrap: MashroomBackgroundJobPluginBootstrapFunction = () => {
    return backgroundJob;
};

export default bootstrap;

