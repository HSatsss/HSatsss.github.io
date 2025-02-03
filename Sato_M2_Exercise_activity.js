function predictUserGender(){
    const userName = document.getElementById('userName').value.trim();

    if (userName === "") {
        alert("Please enter a name!");
        return;
    }

    fetch(`https://api.genderize.io/?name=${userName}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("gender").textContent = data.gender ? data.gender : "Not found";
        })
        .catch(error => console.error("Error fetching gender:", error));
}


function predictUserNationality(){
    const userName = document.getElementById('userName').value.trim();

    if (userName === "") {
        alert("Please enter a name!");
        return;
    }

    fetch(`https://api.nationalize.io?name=${userName}`)
        .then(response => response.json())
        .then(data => {
            if (data.country && data.country.length > 0) {
                document.getElementById("nationality").textContent = data.country[0].country_id;
            } else {
                document.getElementById("nationality").textContent = "Not found";
            }
        })
        .catch(error => console.error("Error fetching gender:", error));
}
