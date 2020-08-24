function handleSubmit(event) {
    event.preventDefault();

    let formText = document.getElementById('name').value;

    console.log("::: Form Submitted :::");
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
    .then(function(res) { updateUI(res)
        // document.getElementById('results').innerHTML = `${res.score_tag} <br> ${res.irony}`;
    })
}

function updateUI(content) {
    document.getElementById('results').innerHTML = `${content.score_tag} <br> ${content.irony}`;
}
export { handleSubmit };
export { analyzeText };
export { updateUI };