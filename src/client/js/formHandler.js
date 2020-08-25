function handleSubmit(event) {
    event.preventDefault();

    // get text that user submitted
    let formText = document.getElementById('name').value;
    analyzeText(formText);
}

function analyzeText(formText) {
    fetch('/userData', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input: formText })
    })
    .then(res => res.json())
    .then(function(res) {
        let element = document.getElementById('results');
        Client.updateUI(element, res);
    })
}

export { handleSubmit };
export { analyzeText };
