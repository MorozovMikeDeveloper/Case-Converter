const upperCaseBtn = document.getElementById('upper-case');
const lowerCaseBtn = document.getElementById('lower-case');
const properCaseBtn = document.getElementById('proper-case');
const sentenceCaseBtn = document.getElementById('sentence-case');
const saveTextFileBtn = document.getElementById('save-text-file');

const text = document.querySelector('textarea');

function download(filename, text) {
    const link = document.createElement('a');
    link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    link.setAttribute('download', filename);

    link.style.display = 'none';
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}

// Start file download.
saveTextFileBtn.addEventListener("click", function (){
    download("text.txt",text.value);
})


upperCaseBtn.addEventListener("click", function () {
    text.value = text.value.toUpperCase();
});

lowerCaseBtn.addEventListener("click", function () {
    text.value = text.value.toLowerCase();
});

properCaseBtn.addEventListener("click", function () {
    const wordsArr = text.value.split(' ');
    text.value = wordsArr.map(function(word) {
        return word[0].toUpperCase() + word.substring(1);
    }).join(' ');
});

sentenceCaseBtn.addEventListener("click", function () {
    let words = text.value.split('. ');
    text.value = words.map(function (word) {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
    }).join('. ');
});

