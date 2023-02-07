const form = document.getElementById("main-form");
const imgApproved = '<img src="./assets/aprovado.png" alt="celebrating emoji" />'
const imgDisapproved = '<img src="./assets/reprovado.png" alt="sad emoji" />'
const activitys = [];
const notes = [];
const approvedSpan = '<span class="resultado aprovado">Aprovado</span>';
const disapprovedSpan = '<span class="resultado reprovado">Reprovado</span>';
const minNote = parseFloat(prompt("Digite a nota mínima:"));

let lines = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    addLine();
    updateTable();
    updateFinalMedia();
});

function addLine() {
    const inputActivityName = document.getElementById("activity-name");
    const inputActivityNote = document.getElementById("activity-note");

    if (activitys.includes(inputActivityName.value)) {
        alert(`A atividade: ${inputActivityName.value} já foi inserida`);
    } else {
        activitys.push(inputActivityName.value);
        notes.push(parseFloat(inputActivityNote.value));

        let line = '<tr>';
        line += `<td>${inputActivityName.value}</td>`;
        line += `<td>${inputActivityNote.value}</td>`;
        line += `<td>${inputActivityNote.value >= minNote ? imgApproved : imgDisapproved}</td>`;
        line += '</tr>';

        lines += line;
    }

    inputActivityName.value = '';
    inputActivityNote.value = '';
}

function updateTable() {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = lines;
}

function updateFinalMedia() {
    const finalMedia = calculateFinalMedia();

    document.getElementById('final-media-value').innerHTML = finalMedia.toFixed(2);
    document.getElementById('final-media-result').innerHTML = finalMedia >= minNote ? approvedSpan : disapprovedSpan;

}

function calculateFinalMedia() {
    let sumNotes = 0;

    for (let i = 0; i < notes.length; i++) {
        sumNotes += notes[i];
    }

    return sumNotes / notes.length;
}