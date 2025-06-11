let currentFilter = 'all';
let cardsVisible = false;

// Generates and displays flashcards based on the current filter
function generateCards() {
    const cardGrid = document.querySelector('.card-grid');
    cardGrid.innerHTML = '';

    improvedFlashcards.forEach(card => {
        let show = false;
        if (currentFilter === 'all') {
            show = true;
        } else {
            // Check difficulty
            if (card.difficulty && card.difficulty.toLowerCase() === currentFilter) {
                show = true;
            }
            // Check partOfSpeech (substring match, case-insensitive)
            else if (card.partOfSpeech && card.partOfSpeech.toLowerCase().includes(currentFilter)) {
                show = true;
            }
            // Check tags (must match #tag exactly)
            else if (card.tags && card.tags.split(' ').some(tag => tag.replace('#','').toLowerCase() === currentFilter)) {
                show = true;
            }
            // Check if the filter is a word type (verb, noun, etc.) and matches partOfSpeech
            else if (card.partOfSpeech && card.partOfSpeech.toLowerCase().startsWith(currentFilter)) {
                show = true;
            }
        }
        if (show) {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.innerHTML = `
                <h3>${card.portuguese}</h3>
                <div class="english">${card.english}</div>
                ${card.example ? `<div class="example">${card.example}</div>` : ''}
                <div class="meta">
                    <span class="part-of-speech">${card.partOfSpeech}</span>
                    <span class="difficulty ${card.difficulty}">${card.difficulty}</span>
                    <span class="tags">${card.tags}</span>
                </div>
            `;
            cardGrid.appendChild(cardElement);
        }
    });
}


function updateStats() {
    const stats = {
        total: improvedFlashcards.length,
        beginner: improvedFlashcards.filter(c => c.difficulty === 'beginner').length,
        intermediate: improvedFlashcards.filter(c => c.difficulty === 'intermediate').length,
        advanced: improvedFlashcards.filter(c => c.difficulty === 'advanced').length,
        withExamples: improvedFlashcards.filter(c => c.example).length
    };

    document.getElementById('totalCards').textContent = stats.total;
    document.getElementById('beginnerCards').textContent = stats.beginner;
    document.getElementById('intermediateCards').textContent = stats.intermediate;
    document.getElementById('advancedCards').textContent = stats.advanced;
    document.getElementById('withExamples').textContent = stats.withExamples;
}

function showAllCards() {
    cardsVisible = true;
    document.querySelector('.card-grid').style.display = 'grid';
    generateCards();
}

function hideCards() {
    cardsVisible = false;
    document.querySelector('.card-grid').style.display = 'none';
}

function filterCards(filter) {
    currentFilter = filter.toLowerCase();
    
    // Highlight the active button
    document.querySelectorAll('.filter-button').forEach(btn => {
        // Get the filter value from the onclick attribute
        const onclickAttr = btn.getAttribute('onclick');
        const filterMatch = onclickAttr?.match(/filterCards\('([^']+)'\)/); 
        const buttonFilter = filterMatch ? filterMatch[1] : '';
        
        // Compare the button's filter value with the current filter
        btn.classList.toggle('active', buttonFilter.toLowerCase() === currentFilter);
    });
    
    // Always show cards when filtering
    if (!cardsVisible) {
        showAllCards();
    } else {
        generateCards();
    }
}

function downloadExcel() {
    const ws = XLSX.utils.json_to_sheet(improvedFlashcards);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Flashcards");
    XLSX.writeFile(wb, "portuguese_flashcards.xlsx");
}

function downloadAnkiCSV() {
    const csvContent = "Portuguese,English,Example,Part of Speech,Tags,Difficulty\n" +
        improvedFlashcards.map(card => 
            `${card.portuguese},${card.english},${card.example || ''},${card.partOfSpeech},${card.tags},${card.difficulty}`
        ).join("\n");
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'portuguese_flashcards_anki.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateStats();
    generateCards();
});
