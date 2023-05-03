const alightTags = document.querySelectorAll(".offer__subtitle, .botteled-beer__subtitle h2, .blog-header h2");
const alightTagsText = [];
let currentWordIndex = 0;

for (let i = 0; i < alightTags.length; i++) {
  const words = alightTags[i].textContent.trim().split(" ");
  alightTagsText.push(words);
}

function highlightWord() {
    for(let i = 0; i < alightTags.length; i++) {
        alightTags[i].innerHTML = "";

        for (let j = 0; j < alightTagsText[i].length; j++) {
            const span = document.createElement("span");
            span.innerText = alightTagsText[i][j] + " ";
        
            currentWordIndex % alightTagsText[i].length === j 
                    ? span.style.color = '#ffc123'
                    : span.style.color = '#fff'
            alightTags[i].appendChild(span); 
        }
    }
    currentWordIndex++;
}

setInterval(highlightWord, 2000);
highlightWord();