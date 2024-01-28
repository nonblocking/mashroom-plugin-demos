
import type {Request, Response} from 'express';
import type {IncomingMessage} from 'http';
import type {MashroomHttpProxyInterceptor, HttpHeaders, QueryParams, MashroomHttpProxyRequestInterceptorResult} from '@mashroom/mashroom-http-proxy/type-definitions';

export default class TestInterceptor implements MashroomHttpProxyInterceptor {

    async interceptRequest(targetUri: string, existingHeaders: Readonly<HttpHeaders>, existingQueryParams: Readonly<QueryParams>,
                           clientRequest: Request, clientResponse: Response): Promise<MashroomHttpProxyRequestInterceptorResult | undefined | null> {
        const logger = clientRequest.pluginContext.loggerFactory('test.http.interceptor');
        const securityService = clientRequest.pluginContext.services.security && clientRequest.pluginContext.services.security.service;

        const user = securityService.getUser(clientRequest);

        logger.info(`===== Intercepting http proxy request: ${targetUri}, user: ${user.username} =====`);


        return {
            addHeaders: {
                'x-test': '1',
                'invalid-header': undefined,
            },
        };
    }

    async interceptResponse(targetUri: string, existingHeaders: Readonly<HttpHeaders>, targetResponse: IncomingMessage,
                            clientRequest: Request, clientResponse: Response) {
        const logger = clientRequest.pluginContext.loggerFactory('test.http.interceptor');

        logger.info(`===== Intercepting http proxy response: ${targetUri}, response code: ${targetResponse.statusCode}  =====`);

        return null;
    }
}
