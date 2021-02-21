
import TestInterceptor from './TestInterceptor';
import type {MashroomHttpProxyInterceptorPluginBootstrapFunction} from '@mashroom/mashroom-http-proxy/type-definitions';

const bootstrap: MashroomHttpProxyInterceptorPluginBootstrapFunction = async () => {
    return new TestInterceptor();
};

export default bootstrap;


