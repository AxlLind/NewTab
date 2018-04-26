// Saves options to chrome.storage
save_options = () => {
    let CAL_ID = document.getElementById('CAL_ID').value;
    chrome.storage.sync.set({ 'CAL_ID': CAL_ID, }, () => {
      // Update status to let user know options were saved.
      let status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(() => status.textContent = '', 750);
    });
}

// Fills the options with the currently saved in values
fill_options = () => {
    chrome.storage.sync.get(['CAL_ID'],
        res => document.getElementById('CAL_ID').value = res.CAL_ID);
}
document.addEventListener('DOMContentLoaded', fill_options);
document.getElementById('save').addEventListener('click', save_options);
