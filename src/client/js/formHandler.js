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
    .then(function(res) { updateUI(res) })
}

function updateUI(content) {
    let element = document.getElementById('results');
    if(content.confidence === undefined) {
        element.innerHTML = "Couldn't analyze text, please try again."
    }
    else {
        element.innerHTML = 
        `<strong>Confidence: </strong>${content.confidence}<br>
        <strong>Score tag: </strong>${content.score_tag}<br>
        <strong>Subjectivity: </strong>${content.subjectivity}<br>
        <strong>Irony: </strong>${content.irony}`; 
    }
}
export { handleSubmit };
export { analyzeText };
export { updateUI };