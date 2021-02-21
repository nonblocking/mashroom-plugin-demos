
import type {MashroomPluginContext} from '@mashroom/mashroom/type-definitions';

const backgroundJob = (pluginContext: MashroomPluginContext) => {
    const logger = pluginContext.loggerFactory('test.backgroundJob');

    logger.info(`===== Executing dummy background job  =====`);
};

const bootstrap = () => {
    return backgroundJob;
};

export default bootstrap;

