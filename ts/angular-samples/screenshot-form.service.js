(() => {
    'use strict';

    angular
        .module('app')
        .service('ScreenshotFormService', ScreenshotFormService);

    ScreenshotFormService.$inject = '$q $http'.split(' ');

    function ScreenshotFormService($q, $http) {
        const ScreenshotFormService = this;

        ScreenshotFormService.generateScreenshots = generateScreenshots;

        ////////////

        function generateScreenshots(config) {
            const name      = config.name;
            const pageId    = config.pageId;
            const selected  = config.selected;
            const siteId    = config.siteId;

            const endpoint = `/api/v1/${siteId}/${pagesetId}/screenshots/create`;

            const payload = {
                breakpoints     : selected.breakpoints,
                environments    : [],
                name            : name,
            }

            for (const key in selected.domains) {
                payload.environments.push(selected.domains[key].id);
            }

            return $q((success, failure) => {
                $http.post(endpoint, payload)
                     .then(response => success(response))
                     .catch(error => failure(error));
            })
        }
    }

})();
