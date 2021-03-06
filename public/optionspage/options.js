const CAL_ID_INPUT    = document.getElementById('CAL_ID');
const EVENTS_INPUT    = document.getElementById('NUM_EVENTS');
const CITY_ID_INPUT   = document.getElementById('WEATHER_CITY_ID');
const FORMAT_TYPE_BOX = document.getElementById('FORMAT_TYPE');
const SAVE_BUTTON     = document.getElementById('SAVE');

// Saves options to chrome.storage
save_options = () => {
    chrome.storage.sync.set({
        'CAL_ID': CAL_ID_INPUT.value,
        'NUM_EVENTS': EVENTS_INPUT.value,
        'WEATHER_CITY_ID': CITY_ID_INPUT.value,
        'FORMAT_TYPE': FORMAT_TYPE_BOX.checked ? 'special' : '',
    }, () => {
      SAVE_BUTTON.textContent = 'Saved!';
      setTimeout(() => SAVE_BUTTON.textContent = 'Save', 1000);
    });
}

// Fills the options with the currently saved in values
fill_options = () => {
    const saved_attrs = ['WEATHER_CITY_ID', 'CAL_ID', 'NUM_EVENTS', 'FORMAT_TYPE'];
    chrome.storage.sync.get(saved_attrs, res => {
        if (res.CAL_ID) CAL_ID_INPUT.value = res.CAL_ID;
        if (res.NUM_EVENTS) EVENTS_INPUT.value = res.NUM_EVENTS;
        if (res.WEATHER_CITY_ID) CITY_ID_INPUT.value = res.WEATHER_CITY_ID;
        if (res.FORMAT_TYPE) FORMAT_TYPE_BOX.checked = (res.FORMAT_TYPE === 'special');
    });
}

document.addEventListener('DOMContentLoaded', fill_options);
SAVE_BUTTON.addEventListener('click', save_options);
