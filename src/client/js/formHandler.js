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
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input: formText })
    })
    .then(res => res.json())
    .then(function(res) { updateUI(res) })
}

function updateUI(content) {
    document.getElementById('results').innerHTML = `${content.score_tag} <br> ${content.irony}`;
}
export { handleSubmit };
export { analyzeText };
export { updateUI };