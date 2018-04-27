// Saves options to chrome.storage
save_options = () => {
    let CAL_ID     = document.getElementById('CAL_ID').value;
    let NUM_EVENTS = document.getElementById('NUM_EVENTS').value;
    let FORMAT_TYPE = document.getElementById('FORMAT_TYPE').checked ? 'Axel' : 'Elli';
    chrome.storage.sync.set({
        'CAL_ID': CAL_ID,
        'NUM_EVENTS': NUM_EVENTS,
        'FORMAT_TYPE': FORMAT_TYPE,
    }, () => {
      let button = document.getElementById('save');
      button.textContent = 'Saved!';
      setTimeout(() => button.textContent = 'Save', 750);
    });
}

// Fills the options with the currently saved in values
fill_options = () => {
    chrome.storage.sync.get(['CAL_ID', 'NUM_EVENTS', 'FORMAT_TYPE'], res => {
        document.getElementById('CAL_ID').value = res.CAL_ID;
        document.getElementById('NUM_EVENTS').value = res.NUM_EVENTS;
        document.getElementById('FORMAT_TYPE').checked = (res.FORMAT_TYPE === 'Axel');
    });
}
document.addEventListener('DOMContentLoaded', fill_options);
document.getElementById('save').addEventListener('click', save_options);
