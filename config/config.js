'use strict';

// Common configuration goes here
// Configuration that depends on the environment, should go into config-<env>.js
// Infrastructure related configuration should go into parameters.json

const config = {
    env: '',
    publicPath: '/build',  // The webpack public path

    // Array of routes to prefetch, see https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ
    // These names are folders relative to src/pages
    routesToPrefetch: ['about'],

    // Google tracking id used for Google Analytics  and other google services
    googleTrackingId: '',

    // Facebook tracking id, used by the Facebook Pixel
    facebookTrackingId: '',
};

module.exports = config;
