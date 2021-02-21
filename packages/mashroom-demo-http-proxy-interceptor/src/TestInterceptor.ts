
import type {MashroomHttpProxyInterceptor} from '@mashroom/mashroom-http-proxy/type-definitions';
import {ExpressRequest, ExpressResponse} from '@mashroom/mashroom/type-definitions';
import {HttpHeaders, QueryParams} from '@mashroom/mashroom-http-proxy/type-definitions/api';
import {IncomingMessage} from 'http';

export default class TestInterceptor implements MashroomHttpProxyInterceptor {

    async interceptRequest(targetUri: string, existingHeaders: Readonly<HttpHeaders>, existingQueryParams: Readonly<QueryParams>,
                           clientRequest: ExpressRequest, clientResponse: ExpressResponse) {
        const logger = clientRequest.pluginContext.loggerFactory('test.http.interceptor');
        const securityService = clientRequest.pluginContext.services.security && clientRequest.pluginContext.services.security.service;

        const user = securityService.getUser(clientRequest);

        logger.info(`===== Intercepting http proxy request: ${targetUri}, user: ${user.username} =====`);


        return null;
    }

    async interceptResponse(targetUri: string, existingHeaders: Readonly<HttpHeaders>, targetResponse: IncomingMessage,
                            clientRequest: ExpressRequest, clientResponse: ExpressResponse) {
        const logger = clientRequest.pluginContext.loggerFactory('test.http.interceptor');

        logger.info(`===== Intercepting http proxy response: ${targetUri}, response code: ${targetResponse.statusCode}  =====`);

        return null;
    }
}
