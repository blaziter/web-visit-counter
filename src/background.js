let visit = {
  url: '',
  count: 0
};

chrome.tabs.onActivated.addListener((activeInfo) => {
  getCurrentTab();
  fileController.writeFile(visit);
});

const getCurrentTab = async () => {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  console.log(tab.url.split('/')[2]);
  visit.url = tab.url.split('/')[2];
  visit.count = visit.count++;
}

