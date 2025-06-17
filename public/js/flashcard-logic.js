let currentFilter = 'all';
let cardsVisible = false;

// Generates and displays flashcards based on the current filter
// Store filtered cards for study mode
let filteredCards = [];

function generateCards() {
    const cardGrid = document.querySelector('.card-grid');
    cardGrid.innerHTML = '';
    filteredCards = [];
    const totalCards = improvedFlashcards.length;

    improvedFlashcards.forEach((card, index) => {
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
            // Store the card for study mode
            filteredCards.push(card);
            
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.dataset.index = filteredCards.length - 1; // Store the index in filtered cards
            cardElement.innerHTML = `
                <h3>${card.portuguese}</h3>
                <div class="english">${card.english}</div>
                ${card.example ? `<div class="example">${card.example}</div>` : ''}
                ${card.exampleEnglish ? `<div class="example-english">${card.exampleEnglish}</div>` : ''}
                <div class="meta">
                    <span class="part-of-speech">${card.partOfSpeech}</span>
                    <span class="difficulty ${card.difficulty}">${card.difficulty}</span>
                    <span class="tags">${card.tags}</span>
                </div>
            `;
            
            // Add click event to open study mode
            cardElement.addEventListener('click', () => openStudyMode(parseInt(cardElement.dataset.index)));
            
            cardGrid.appendChild(cardElement);
        }
    });
    
    // Update the filter counter
    const filterCounter = document.getElementById('filter-counter');
    if (currentFilter === 'all') {
        filterCounter.textContent = `Showing all ${filteredCards.length} cards`;
    } else {
        filterCounter.textContent = `Showing ${filteredCards.length} of ${totalCards} cards (Filter: ${currentFilter})`;
    }
}


function updateStats() {
    const stats = {
        // Difficulty stats
        total: improvedFlashcards.length,
        beginner: improvedFlashcards.filter(c => c.difficulty === 'beginner').length,
        intermediate: improvedFlashcards.filter(c => c.difficulty === 'intermediate').length,
        advanced: improvedFlashcards.filter(c => c.difficulty === 'advanced').length,
        withExamples: improvedFlashcards.filter(c => c.example).length,
        
        // Word type stats
        verbs: improvedFlashcards.filter(c => c.partOfSpeech && c.partOfSpeech.toLowerCase().includes('verb')).length,
        nouns: improvedFlashcards.filter(c => c.partOfSpeech && c.partOfSpeech.toLowerCase().includes('noun')).length,
        prepositions: improvedFlashcards.filter(c => c.partOfSpeech && c.partOfSpeech.toLowerCase().includes('preposition')).length,
        cognates: improvedFlashcards.filter(c => c.tags && c.tags.includes('#cognate')).length,
        falseCognates: improvedFlashcards.filter(c => c.tags && c.tags.includes('#false_cognate')).length,
        questions: improvedFlashcards.filter(c => {
            // Check if it's a question in the Portuguese text or tagged as question
            return (c.portuguese && c.portuguese.includes('?')) || 
                   (c.tags && c.tags.toLowerCase().includes('question'));
        }).length,
        phrases: improvedFlashcards.filter(c => {
            // Check if it's tagged as phrase or contains multiple words
            return (c.tags && c.tags.toLowerCase().includes('phrase')) || 
                   (c.portuguese && c.portuguese.split(' ').length > 2);
        }).length
    };

    // Update difficulty stats
    document.getElementById('totalCards').textContent = stats.total;
    document.getElementById('beginnerCards').textContent = stats.beginner;
    document.getElementById('intermediateCards').textContent = stats.intermediate;
    document.getElementById('advancedCards').textContent = stats.advanced;
    document.getElementById('withExamples').textContent = stats.withExamples;
    
    // Update word type stats
    document.getElementById('verbCards').textContent = stats.verbs;
    document.getElementById('nounCards').textContent = stats.nouns;
    document.getElementById('prepCards').textContent = stats.prepositions;
    document.getElementById('questionCards').textContent = stats.questions;
    document.getElementById('phraseCards').textContent = stats.phrases;
    document.getElementById('cognateCards').textContent = stats.cognates;
    document.getElementById('falseCognateCards').textContent = stats.falseCognates;
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

// Study Mode Variables
let currentCardIndex = 0;
let isCardFlipped = false;
let isEnglishMode = false; // Default to Portuguese mode
let showBackSide = false; // Default to showing front side when navigating

// Open Study Mode with a specific card
function openStudyMode(cardIndex) {
    if (filteredCards.length === 0) return;
    
    currentCardIndex = cardIndex;
    isCardFlipped = false;
    
    // Reset the flashcard to front side
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.remove('flipped');
    
    // Update the card content
    updateStudyCard();
    
    // Show the modal
    document.getElementById('studyModeModal').style.display = 'block';
    
    // Dispatch custom event for touch gesture handler
    document.dispatchEvent(new CustomEvent('studyModeOpened'));
}

// Update the study card content
function updateStudyCard() {
    const card = filteredCards[currentCardIndex];
    
    // Apply the current mode (Portuguese or English)
    if (isEnglishMode) {
        // English mode: English on front, Portuguese on back
        document.getElementById('cardFrontText').textContent = card.english;
        document.getElementById('cardBackText').textContent = card.portuguese;
    } else {
        // Portuguese mode: Portuguese on front, English on back
        document.getElementById('cardFrontText').textContent = card.portuguese;
        document.getElementById('cardBackText').textContent = card.english;
    }
    
    // Update Portuguese example if available
    const exampleElement = document.getElementById('cardExample');
    if (card.example) {
        exampleElement.textContent = card.example;
        exampleElement.style.display = 'block';
    } else {
        exampleElement.style.display = 'none';
    }
    
    // Update English example if available
    const exampleEnglishElement = document.getElementById('cardExampleEnglish');
    if (card.exampleEnglish) {
        exampleEnglishElement.textContent = card.exampleEnglish;
        exampleEnglishElement.style.display = 'block';
    } else {
        exampleEnglishElement.style.display = 'none';
    }
    
    // Update metadata
    document.getElementById('cardPartOfSpeech').textContent = card.partOfSpeech;
    document.getElementById('cardDifficulty').textContent = card.difficulty;
    document.getElementById('cardDifficulty').className = `difficulty ${card.difficulty}`;
    
    // Format tags if they exist
    const tagsContainer = document.getElementById('cardTags');
    tagsContainer.innerHTML = '';
    if (card.tags) {
        const tagsList = card.tags.split(' ');
        tagsList.forEach(tag => {
            if (tag.trim() !== '') {
                const tagSpan = document.createElement('span');
                tagSpan.className = 'tag';
                tagSpan.textContent = tag;
                tagsContainer.appendChild(tagSpan);
            }
        });
    }
    
    // Update counter
    document.getElementById('cardCounter').textContent = `Card ${currentCardIndex + 1} of ${filteredCards.length}`;
    
    // Update toggle switches to match current modes
    document.getElementById('cardModeToggle').checked = isEnglishMode;
    document.getElementById('cardSideToggle').checked = showBackSide;
}

// Flip the flashcard
function flipCard(e) {
    // Prevent default space bar behavior (page scrolling)
    if (e && e.preventDefault && (e.key === ' ' || e.code === 'Space')) {
        e.preventDefault();
    }
    
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('flipped');
    isCardFlipped = !isCardFlipped;
}

// Navigate to previous card
function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        // Set card flip state based on user preference
        isCardFlipped = showBackSide;
        if (showBackSide) {
            document.getElementById('flashcard').classList.add('flipped');
        } else {
            document.getElementById('flashcard').classList.remove('flipped');
        }
        updateStudyCard();
    }
}

// Navigate to next card
function nextCard() {
    if (currentCardIndex < filteredCards.length - 1) {
        currentCardIndex++;
        // Set card flip state based on user preference
        isCardFlipped = showBackSide;
        if (showBackSide) {
            document.getElementById('flashcard').classList.add('flipped');
        } else {
            document.getElementById('flashcard').classList.remove('flipped');
        }
        updateStudyCard();
    }
}

// Close the study mode
function closeStudyMode() {
    document.getElementById('studyModeModal').style.display = 'none';
    
    // Dispatch custom event for touch gesture handler
    document.dispatchEvent(new CustomEvent('studyModeClosed'));
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateStats();
    generateCards();
    
    // Set up study mode event listeners
    document.getElementById('flipCard').addEventListener('click', flipCard);
    document.getElementById('prevCard').addEventListener('click', prevCard);
    document.getElementById('nextCard').addEventListener('click', nextCard);
    document.querySelector('.close-button').addEventListener('click', closeStudyMode);
    
    // Set up card mode toggle listener
    document.getElementById('cardModeToggle').addEventListener('change', function() {
        isEnglishMode = this.checked;
        // Reset card flip state when changing modes
        isCardFlipped = showBackSide;
        if (showBackSide) {
            document.getElementById('flashcard').classList.add('flipped');
        } else {
            document.getElementById('flashcard').classList.remove('flipped');
        }
        updateStudyCard();
    });
    
    // Set up card side toggle listener
    document.getElementById('cardSideToggle').addEventListener('change', function() {
        showBackSide = this.checked;
        // Update card flip state immediately
        isCardFlipped = showBackSide;
        if (showBackSide) {
            document.getElementById('flashcard').classList.add('flipped');
        } else {
            document.getElementById('flashcard').classList.remove('flipped');
        }
    });
    
    // Add click event to the flashcard itself to flip it
    const flashcardElement = document.getElementById('flashcard');
    let isTextSelected = false;
    
    // Track text selection
    document.addEventListener('selectionchange', function() {
        isTextSelected = window.getSelection().toString().length > 0;
    });
    
    // Handle mousedown/touchstart to check for potential text selection
    flashcardElement.addEventListener('mousedown', function(e) {
        // Reset the text selection flag on mousedown
        isTextSelected = false;
    });
    
    flashcardElement.addEventListener('click', function(e) {
        // Don't flip if text is selected or if clicking on controls
        if (isTextSelected || 
            window.getSelection().toString().length > 0 || 
            e.target.closest('.study-controls') !== null || 
            e.target.closest('.study-info') !== null || 
            e.target.id === 'closeModalBtn') {
            return;
        }
        
        // Flip the card
        flipCard();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        // Only handle keyboard events when study mode is open
        if (document.getElementById('studyModeModal').style.display !== 'block') return;
        
        // Prevent all arrow keys from scrolling the background page when modal is open
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
            e.preventDefault();
        }
        
        switch(e.key) {
            case ' ':  // Space
                flipCard(e);
                break;
            case 'Enter':
                flipCard(e);
                break;
            case 'ArrowLeft':
                prevCard();
                break;
            case 'ArrowRight':
                nextCard();
                break;
            case 'ArrowUp':
            case 'ArrowDown':
                flipCard(e);
                break;
            case 'Escape':
                closeStudyMode();
                break;
        }
    });
    
    // Close modal when clicking outside of it
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('studyModeModal');
        if (e.target === modal) {
            closeStudyMode();
        }
    });
});
