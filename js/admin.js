var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.withCredentials = false;
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status, null);
        }
    };
    xhr.send();
}
var myObj;
getJSON('http://localhost:3000/Json', function(err, data) {
    if (err != null) {
        console.error(err);
    } else {
        myObj = data
        document.getElementById("cases").value = (myObj.India.Cases);
        document.getElementById("deaths").value = (myObj.India.Deaths);
        document.getElementById("deathRate").value = (myObj.India.DeathRate);
        document.getElementById("recovered").value = (myObj.India.Recoveries);
        document.getElementById("recoveryRate").value = (myObj.India.RecoveredRate);
    }
})
function getSelectValue() {
    var selectedValue = document.getElementById("state").value;
    console.log(selectedValue)
    return selectedValue;
}
document.getElementById('submit').addEventListener('click', function() {
    var selectedValue = getSelectValue()
    document.getElementById('title-state').innerHTML = selectedValue;
    if (selectedValue == 'PUNJAB') {
        document.getElementById("cases").value = (myObj.Punjab.Cases);
        document.getElementById("deaths").value = (myObj.Punjab.Deaths);
        document.getElementById("deathRate").value = (myObj.Punjab.DeathRate);
        document.getElementById("recovered").value = (myObj.Punjab.Recoveries);
        document.getElementById("recoveryRate").value = (myObj.Punjab.RecoveredRate);
    } else if (selectedValue == 'ASSAM') {
        document.getElementById("cases").value = (myObj.Assam.Cases);
        document.getElementById("deaths").value = (myObj.Assam.Deaths);
        document.getElementById("deathRate").value = (myObj.Assam.DeathRate);
        document.getElementById("recovered").value = (myObj.Assam.Recoveries);
        document.getElementById("recoveryRate").value = (myObj.Assam.RecoveredRate);
    }
    else if (selectedValue == 'GOA') {
        document.getElementById("cases").value = (myObj.Goa.Cases);
        document.getElementById("deaths").value = (myObj.Goa.Deaths);
        document.getElementById("deathRate").value = (myObj.Goa.DeathRate);
        document.getElementById("recovered").value = (myObj.Goa.Recoveries);
        document.getElementById("recoveryRate").value = (myObj.Goa.RecoveredRate);
    } else if (selectedValue == 'GUJRAT') {
        document.getElementById("cases").value = (myObj.Gujrat.Cases);
        document.getElementById("deaths").value = (myObj.Gujrat.Deaths);
        document.getElementById("deathRate").value = (myObj.Gujrat.DeathRate);
        document.getElementById("recovered").value = (myObj.Gujrat.Recoveries);
        document.getElementById("recoveryRate").value = (myObj.Gujrat.RecoveredRate);
    } else if (selectedValue == 'SIKKIM') {
        document.getElementById("cases").value = (myObj.Sikkim.Cases);
        document.getElementById("deaths").value = (myObj.Sikkim.Deaths);
        document.getElementById("deathRate").value = (myObj.Sikkim.DeathRate);
        document.getElementById("recovered").value = (myObj.Sikkim.Recoveries);
        document.getElementById("recoveryRate").value = (myObj.Sikkim.RecoveredRate);
    } else if (selectedValue == 'INDIA') {
        document.getElementById("cases").value = (myObj.India.Cases);
        document.getElementById("deaths").value = (myObj.India.Deaths);
        document.getElementById("deathRate").value = (myObj.India.DeathRate);
        document.getElementById("recovered").value = (myObj.India.Recoveries);
        document.getElementById("recoveryRate").value = (myObj.India.RecoveredRate);
    }
})

document.getElementById('update').addEventListener('click', function() {
    selectedValue = getSelectValue()
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/Update', true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    var data = {}
    data.State = 'India'
    if (selectedValue == 'PUNJAB') {
        data.State = 'Punjab';
    } else if (selectedValue == 'INDIA') {
        data.State = 'India';
    } else if (selectedValue == 'SIKKIM') {
        data.State = 'Sikkim';
    } else if (selectedValue == 'ASSAM') {
        data.State = 'Assam';
    } else if (selectedValue == 'GUJRAT') {
        data.State = 'Gujrat';
    } else if (selectedValue == 'GOA') {
        data.State = 'Goa';
    }
    data.Cases = Number(document.getElementById("cases").value);
    data.Deaths = Number(document.getElementById("deaths").value);
    data.DeathRate = Number(document.getElementById("deathRate").value);
    data.Recoveries = Number(document.getElementById("recovered").value);
    data.RecoveredRate = Number(document.getElementById("recoveryRate").value);
    console.log(data)
    xhr.send(JSON.stringify(data));
})