/* global chrome */
const get_config = () => {
    let config = {
        GAPI_KEY: 'AIzaSyDhsYNMlYnJjdEfHIZt0UoL-4dKuQj6n6s',
        WEATHER_API_KEY: 'b23c041249f8e1b699fe0e22560b992c',
        WEATHER_CITY_ID: '2673730',
        CAL_ID: 'primary',
        NUM_EVENTS: '9',
        FORMAT_TYPE: '',
    };
    let saved_attr = ['CAL_ID', 'NUM_EVENTS', 'FORMAT_TYPE'];
    chrome.storage.sync.get(saved_attr, res =>
        saved_attr.forEach(attr => {
            if (res[attr])
                config[attr] = res[attr];
        })
    );
    return config;
};

// Cannot use Object.freeze here. Chrome caches this meaning it cannot
// overwrite the changed attributes when loading the page after the first time.
// We only want to read this, and it should not change.
export default get_config();
