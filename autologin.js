chrome.storage.local.get('swedbankautologin', function(data) {
	if(data.swedbankautologin.method!=="" && data.swedbankautologin.number!=="") {
		document.getElementById("auth:kundnummer").value=data.swedbankautologin.number;
		document.getElementById('auth:metod_2').value=data.swedbankautologin.method;
		document.getElementById("auth:fortsett_knapp").click();
	}
});

