let count = 0;

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  /*chrome.storage.sync.clear(() => {
    console.log('Everything was removed');
  });*/
  getCurrentTab();
  /*const all = await chrome.storage.sync.get();
  for (const [key, val] of Object.entries(all)) {
    console.log(key + ' ' + val)
  }*/
});

const getCurrentTab = async () => {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  page = tab.url.split('/')[2];
  if (!getCount(page)) setCount(page, 0);
  setCount(page, count);
}

const setCount = (key, value) => {
  chrome.storage.sync.set({ [key]: value }, () => {
    if (chrome.runtime.lastError)
      console.log('Error setting');
  });
}

const getCount = (key) => {
  chrome.storage.sync.get([key], (result) => {
    if (chrome.runtime.lastError)
      console.log('Error getting');

    count = 1 + result[key];
  });
}
