function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    // Client.checkForName(formText)

    console.log(formText);

    console.log("::: Form Submitted :::");
        
    fetch('/userData', {
        method: 'POST',
        // mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input: formText })
    })
    .then(res => res.json())
    .then(function(res) {
        // console.log(res.json());
        console.log("Client", res);
        document.getElementById('results').innerHTML = `${res.score_tag} <br> ${res.irony}`;
    })
}

export { handleSubmit };