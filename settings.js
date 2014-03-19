var method = document.getElementById('method');
var number = document.getElementById('number');
document.getElementById('saveSettings').onclick = function() {
    chrome.storage.local.set({
        'swedbankautologin': {
            'number': number.value,
            'method': method.value
        } 
    });
};

chrome.storage.local.get('swedbankautologin', function(data) {
    if (data.swedbankautologin.number !== "") document.number.value = data.swedbankautologin.number;
    if (data.swedbankautologin.method !== "") document.method.value = data.swedbankautologin["method"];
});