(() => {
    'use strict';

    angular
        .module('app')
        .directive('screenshotForm', screenshotForm);

    screenshotForm.$inject = '$timeout NotifyService ScreenshotFormService screenshotFormConstant FeatureFlagService'.split(' ');

    function screenshotForm($timeout, NotifyService, ScreenshotFormService, screenshotFormConstant, FeatureFlagService) {
        return {
            restrict: 'E',
            scope: {
                screenshotInfo: '@',
                siteInfo: '@'
            },
            templateUrl: '/assets/js/screenshots/screenshot-form.template.html',
            link: link
        }

        function link(scope) {
            const vm = scope;

            const screenshotInfo = JSON.parse(vm.screenshotInfo);
            const siteInfo = JSON.parse(vm.siteInfo);

            vm.hasFlag = {
                sentToPdfGenerator: FeatureFlagService.getFlagFor('sentToPdfGenerator')
            }

            vm.isGenerating = false;
            vm.isLoading = true;

            vm.domains  = siteInfo.domains;
            vm.pagesets = siteInfo.pagesets;
            vm.siteId   = siteInfo.site_id;
            vm.siteName = siteInfo.site_name;

            vm.isNewScreenshotSet = screenshotInfo.is_new_screenshot_set;
            vm.screenshotId       = screenshotInfo.screenshot_id;
            vm.screenshotName     = screenshotInfo.screenshot_name;

            vm.selected = {
                breakpoints   : screenshotFormConstant.breakpoints,
                domains       : [],
                pageset       : screenshotInfo.selected_pageset,
            }

            vm.generateScreenshots = generateScreenshots;
            vm.updateScreenshotSet = updateScreenshotSet;
            vm.userInputIsInvalid  = userInputIsInvalid;

            activate();

            ////////////

            function activate() {
                vm.isLoading = false;

                $timeout(() => {
                    $('.js-dual-select').bootstrapDualListbox({
                        filterPlaceHolder     : 'Search',
                        infoText              : false,
                        nonSelectedListLabel  : 'Select one or more environments for the screenshots',
                        selectedListLabel     : 'Environments Selected',
                        selectorMinimalHeight : 200,
                    })
                }, 0)
            }

            ////////////

            function generateScreenshots(selected) {
                checkArgumentIsOfType('object', selected);

                const config = {
                    name      : vm.screenshotName,
                    pagesetId : selected.pageset.id,
                    selected  : selected,
                    siteId    : vm.siteId,
                }

                vm.isGenerating = true;

                ScreenshotFormService.generateScreenshots(config)
                    .then(redirectUserToSiteDashboard)
                    .catch(errorsGeneratingScreenshots)
                    .then(() => vm.isGenerating = false)
            }

            function updateScreenshotSet(data) {
                checkArgumentIsOfType('object', data);
                NotifyService('Set updated!', 'success');
            }

            function userInputIsInvalid(selected) {
                checkArgumentIsOfType('object', selected);

                const isMissingDomains = (selected.domains.length === 0) ? true : false;
                const isMissingBreakpoints = selected.breakpoints.every(breakpoint => breakpoint.selected === false)

                return (isMissingDomains || isMissingBreakpoints) ? true : false;
            }

            ////////////

            function checkArgumentIsOfType(expectedType, property) {
                const actualType = Object.prototype.toString.call(property).slice(8, -1).toLowerCase();

                if (actualType !== expectedType) {
                    throw new TypeError(`Method argument must be of type ${expectedType.toUpperCase()}, but was actually of type ${actualType.toUpperCase()}!`);
                } else {
                    return property;
                }
            }

            ////////////

            function redirectUserToSiteDashboard() {
                $timeout(() => {
                    window.location.href = `/dashboard/${vm.siteId}?tab=finished`;
                }, 0)
            }

            function errorsGeneratingScreenshots() {
                NotifyService('Error generating screenshots. Please try again.', 'error');
            }
        }
    }

})();
