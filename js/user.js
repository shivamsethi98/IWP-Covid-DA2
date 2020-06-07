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
getJSON('http://localhost:3000/Json', function(err, data) {
    if (err != null) {
        console.error(err);
    } else {
        const myObj = data //India
        document.getElementById("india_cases").innerHTML = (myObj.India.Cases);
        document.getElementById("india_deaths").innerHTML = (myObj.India.Deaths);
        document.getElementById("india_death_rate").innerHTML = (myObj.India.DeathRate + '%');
        document.getElementById("india_recovered").innerHTML = (myObj.India.Recoveries);
        document.getElementById("india_recovered_rate").innerHTML = (myObj.India.RecoveredRate + '%');
        document.getElementById("state_cases").innerHTML = (myObj.Punjab.Cases);
        document.getElementById("state_deaths").innerHTML = (myObj.Punjab.Deaths);
        document.getElementById("state_death_rate").innerHTML = (myObj.Punjab.DeathRate + '%');
        document.getElementById("state_recovered").innerHTML = (myObj.Punjab.Recoveries);
        document.getElementById("state_recovered_rate").innerHTML = (myObj.Punjab.RecoveredRate + '%');
        function getSelectValue() {
            var selectedValue = document.getElementById("state").value;
            console.log(selectedValue)
            return selectedValue;
        }
        document.getElementById("submit").addEventListener('click', function() {
            console.log('click')
            selectedValue = getSelectValue();
            if (selectedValue == 'PUNJAB') {
                document.getElementById('title-state').innerHTML = selectedValue;
                document.getElementById("state_cases").innerHTML = (myObj.Punjab.Cases);
                document.getElementById("state_deaths").innerHTML = (myObj.Punjab.Deaths);
                document.getElementById("state_death_rate").innerHTML = (myObj.Punjab.DeathRate + '%');
                document.getElementById("state_recovered").innerHTML = (myObj.Punjab.Recoveries);
                document.getElementById("state_recovered_rate").innerHTML = (myObj.Punjab.RecoveredRate + '%');
            } else if (selectedValue == 'SIKKIM') {
                document.getElementById('title-state').innerHTML = selectedValue;
                document.getElementById("state_cases").innerHTML = (myObj.Sikkim.Cases);
                document.getElementById("state_deaths").innerHTML = (myObj.Sikkim.Deaths);
                document.getElementById("state_death_rate").innerHTML = (myObj.Sikkim.DeathRate + '%');
                document.getElementById("state_recovered").innerHTML = (myObj.Sikkim.Recoveries);
                document.getElementById("state_recovered_rate").innerHTML = (myObj.Sikkim.RecoveredRate + '%');
            } else if (selectedValue == 'GOA') {
                document.getElementById('title-state').innerHTML = selectedValue;
                document.getElementById("state_cases").innerHTML = (myObj.Goa.Cases);
                document.getElementById("state_deaths").innerHTML = (myObj.Goa.Deaths);
                document.getElementById("state_death_rate").innerHTML = (myObj.Goa.DeathRate + '%');
                document.getElementById("state_recovered").innerHTML = (myObj.Goa.Recoveries);
                document.getElementById("state_recovered_rate").innerHTML = (myObj.Goa.RecoveredRate + '%');
            } else if (selectedValue == 'GUJRAT') {
                document.getElementById('title-state').innerHTML = selectedValue;
                document.getElementById("state_cases").innerHTML = (myObj.Gujrat.Cases);
                document.getElementById("state_deaths").innerHTML = (myObj.Gujrat.Deaths);
                document.getElementById("state_death_rate").innerHTML = (myObj.Gujrat.DeathRate + '%');
                document.getElementById("state_recovered").innerHTML = (myObj.Gujrat.Recoveries);
                document.getElementById("state_recovered_rate").innerHTML = (myObj.Gujrat.RecoveredRate + '%');
            } else if (selectedValue == 'ASSAM') {
                document.getElementById('title-state').innerHTML = selectedValue;
                document.getElementById("state_cases").innerHTML = (myObj.Assam.Cases);
                document.getElementById("state_deaths").innerHTML = (myObj.Assam.Deaths);
                document.getElementById("state_death_rate").innerHTML = (myObj.Assam.DeathRate + '%');
                document.getElementById("state_recovered").innerHTML = (myObj.Assam.Recoveries);
                document.getElementById("state_recovered_rate").innerHTML = (myObj.Assam.RecoveredRate + '%');
            }
        })
    }
})