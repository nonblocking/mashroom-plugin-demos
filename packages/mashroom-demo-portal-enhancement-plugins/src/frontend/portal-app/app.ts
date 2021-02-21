import type {MashroomPortalAppPluginBootstrapFunction} from '@mashroom/mashroom-portal/type-definitions';

const bootstrap: MashroomPortalAppPluginBootstrapFunction = (portalAppHostElement, portalAppSetup, clientServices) => {
    const infoText = portalAppSetup.appConfig.info;

    const wrapper = document.createElement('div');
    wrapper.style.padding = '10px';
    const info = document.createElement('p');
    info.innerText = infoText;
    const button = document.createElement('button');
    button.innerText = 'Call custom service';
    button.onclick = function() {
        clientServices.customService.test();
    };
    wrapper.appendChild(info);
    wrapper.appendChild(button);

    portalAppHostElement.innerHTML = '';
    portalAppHostElement.appendChild(wrapper);
}

(window as any).startPortalAppEnhancementTestApp = bootstrap;
