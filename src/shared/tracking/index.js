function track(eventName, params) {
    // TODO: will likely need to create a mapping between event eventName and services
    // console.log('track', eventName, params);

    // If Facebook tracking is available
    if (typeof fbq === 'function') {
        fbq('track', eventName, params); // eslint-disable-line no-undef
    }

    // TODO: add Google Analytics
}

function trackViewContent(params) {
    track('ViewContent', params);
}

module.exports = {
    track,
    trackViewContent,
};
