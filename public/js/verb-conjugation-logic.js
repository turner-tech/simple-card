// Verb Conjugation Logic
// Handles search, display, and interaction for verb conjugations

let currentVerb = null;
let isEnglishVerbMode = false;

// Initialize verb conjugation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add Enter key support for search
    const verbSearchInput = document.getElementById('verbSearch');
    if (verbSearchInput) {
        verbSearchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchVerb();
            }
        });
    }
});

// Show verb conjugations view
function showVerbConjugations() {
    document.getElementById('flashcard-view').style.display = 'none';
    document.getElementById('conjugation-view').style.display = 'block';
    
    // Clear any previous results
    document.getElementById('conjugation-results').innerHTML = '';
    document.getElementById('verbSearch').value = '';
    document.getElementById('verbSearch').focus();
    
    // Initialize toggle listener
    initializeLanguageToggle();
    updateVerbSuggestions();
    
    // Show initial empty search message
    displayEmptySearchMessage();
}

// Show flashcards view
function showFlashcards() {
    document.getElementById('conjugation-view').classList.remove('active');
    document.getElementById('flashcard-view').style.display = 'block';
}

// Search for a verb
function searchVerb() {
    const searchTerm = document.getElementById('verbSearch').value.trim().toLowerCase();
    if (!searchTerm) {
        displayEmptySearchMessage();
        return;
    }
    
    let verb = null;
    
    if (isEnglishVerbMode) {
        // Search in English verbs
        verb = englishVerbConjugations.find(v => 
            v.infinitive.toLowerCase() === searchTerm ||
            v.portuguese.toLowerCase().includes(searchTerm) ||
            v.infinitive.toLowerCase().includes(searchTerm)
        );
        
        if (!verb) {
            // Try partial matches
            verb = englishVerbConjugations.find(v => 
                v.infinitive.toLowerCase().includes(searchTerm) ||
                v.portuguese.toLowerCase().includes(searchTerm)
            );
        }
    } else {
        // Search in Portuguese verbs
        verb = verbConjugations.find(v => 
            v.infinitive.toLowerCase() === searchTerm ||
            v.english.toLowerCase().includes(searchTerm) ||
            v.english.toLowerCase() === searchTerm
        );
        
        if (!verb) {
            // Try partial matches
            verb = verbConjugations.find(v => 
                v.infinitive.toLowerCase().includes(searchTerm) ||
                v.english.toLowerCase().includes(searchTerm)
            );
        }
    }
    
    if (verb) {
        displayVerbConjugation(verb);
    } else {
        displayVerbNotFound(searchTerm);
    }
}

// Select a verb from suggestions
function selectVerb(infinitive) {
    let verb = null;
    
    if (isEnglishVerbMode) {
        verb = englishVerbConjugations.find(v => v.infinitive === infinitive);
    } else {
        verb = verbConjugations.find(v => v.infinitive === infinitive);
    }
    
    if (verb) {
        document.getElementById('verbSearch').value = infinitive;
        displayVerbConjugation(verb);
    }
}

// Display verb conjugation
function displayVerbConjugation(verb) {
    currentVerb = verb;
    const resultsContainer = document.getElementById('conjugation-results');
    
    if (isEnglishVerbMode) {
        // Display English verb conjugation
        const translationText = verb.portuguese || verb.english;
        resultsContainer.innerHTML = `
            <div class="conjugation-result">
                <div class="verb-header">
                    <h1 class="verb-infinitive">${verb.infinitive}</h1>
                    <p class="verb-english">${translationText}</p>
                    <div class="verb-info">
                        <span class="verb-type">${verb.type}</span>
                        <span class="verb-difficulty ${verb.difficulty}">${verb.difficulty}</span>
                    </div>
                </div>
                
                <div class="tenses-container">
                    ${generateEnglishTensesHTML(verb)}
                </div>
            </div>
        `;
    } else {
        // Display Portuguese verb conjugation
        resultsContainer.innerHTML = `
            <div class="conjugation-result">
                <div class="verb-header">
                    <h1 class="verb-infinitive">${verb.infinitive}</h1>
                    <p class="verb-english">${verb.english}</p>
                    <div class="verb-info">
                        <span class="verb-type">${verb.type}</span>
                        <span class="verb-difficulty ${verb.difficulty}">${verb.difficulty}</span>
                    </div>
                </div>
                
                <div class="tenses-container">
                    ${generatePortugueseTensesHTML(verb)}
                </div>
            </div>
        `;
    }
}

// Generate HTML for Portuguese tenses
function generatePortugueseTensesHTML(verb) {
    const tenses = ['presente', 'preterito', 'imperfeito', 'futuro'];
    
    return tenses.map(tense => `
        <div class="tense-section">
            <div class="tense-title">
                <h3 class="tense-name-pt">${tenseNames[tense].pt}</h3>
                <p class="tense-name-en">${tenseNames[tense].en}</p>
            </div>
            
            <div class="conjugation-table">
                ${generatePortugueseConjugationRows(verb.conjugations[tense])}
            </div>
            
            ${verb.examples && verb.examples[tense] ? `
                <div class="example-sentence">
                    <strong>Exemplo:</strong> ${verb.examples[tense]}
                </div>
            ` : ''}
        </div>
    `).join('');
}

// Generate HTML for English tenses
function generateEnglishTensesHTML(verb) {
    const tenses = Object.keys(englishTenseNames);
    
    return tenses.map(tense => `
        <div class="tense-section">
            <div class="tense-title">
                <h3 class="tense-name-pt">${englishTenseNames[tense].en}</h3>
                <p class="tense-name-en">${englishTenseNames[tense].pt || englishTenseNames[tense].en}</p>
            </div>
            
            <div class="conjugation-table">
                ${generateEnglishConjugationRows(verb.conjugations[tense])}
            </div>
            
            ${verb.examples && verb.examples[tense] ? `
                <div class="example-sentence">
                    <strong>Example:</strong> ${verb.examples[tense]}
                </div>
            ` : ''}
        </div>
    `).join('');
}

// Generate Portuguese conjugation rows
function generatePortugueseConjugationRows(conjugations) {
    return Object.entries(pronounLabels).map(([pronoun, label]) => `
        <div class="conjugation-row">
            <span class="pronoun">${label}</span>
            <span class="conjugation">${conjugations[pronoun]}</span>
        </div>
    `).join('');
}

// Generate English conjugation rows
function generateEnglishConjugationRows(conjugations) {
    return Object.entries(englishPronounLabels).map(([pronoun, label]) => `
        <div class="conjugation-row">
            <span class="pronoun">${label.en}</span>
            <span class="conjugation">${conjugations[pronoun]}</span>
        </div>
    `).join('');
}

// Initialize language toggle functionality
function initializeLanguageToggle() {
    const toggle = document.getElementById('verbLanguageToggle');
    if (toggle) {
        toggle.addEventListener('change', function() {
            isEnglishVerbMode = this.checked;
            updateVerbSuggestions();
            // Clear results when switching languages
            document.getElementById('conjugation-results').innerHTML = '';
            document.getElementById('verbSearch').value = '';
        });
    }
}

// Update verb suggestions based on current language mode
function updateVerbSuggestions() {
    const suggestionsContainer = document.querySelector('.verb-suggestions');
    if (!suggestionsContainer) return;
    
    if (isEnglishVerbMode) {
        suggestionsContainer.innerHTML = `
            <button class="verb-suggestion" onclick="selectVerb('be')">be (ser/estar)</button>
            <button class="verb-suggestion" onclick="selectVerb('have')">have (ter)</button>
            <button class="verb-suggestion" onclick="selectVerb('do')">do (fazer)</button>
            <button class="verb-suggestion" onclick="selectVerb('go')">go (ir)</button>
            <button class="verb-suggestion" onclick="selectVerb('get')">get (conseguir)</button>
            <button class="verb-suggestion" onclick="selectVerb('make')">make (fazer)</button>
        `;
    } else {
        suggestionsContainer.innerHTML = `
            <button class="verb-suggestion" onclick="selectVerb('ir')">ir (to go)</button>
            <button class="verb-suggestion" onclick="selectVerb('ser')">ser (to be)</button>
            <button class="verb-suggestion" onclick="selectVerb('estar')">estar (to be)</button>
            <button class="verb-suggestion" onclick="selectVerb('ter')">ter (to have)</button>
            <button class="verb-suggestion" onclick="selectVerb('fazer')">fazer (to do)</button>
            <button class="verb-suggestion" onclick="selectVerb('falar')">falar (to speak)</button>
        `;
    }
}

// Display verb not found message
function displayVerbNotFound(searchTerm) {
    const resultsContainer = document.getElementById('conjugation-results');
    
    let suggestions = [];
    let message = '';
    
    if (isEnglishVerbMode) {
        suggestions = englishVerbConjugations
            .filter(v => 
                v.infinitive.toLowerCase().includes(searchTerm) ||
                v.portuguese.toLowerCase().includes(searchTerm)
            )
            .slice(0, 6);
        message = `English verb "${searchTerm}" not found. Try one of the options above.`;
    } else {
        suggestions = verbConjugations
            .filter(v => 
                v.infinitive.toLowerCase().includes(searchTerm) ||
                v.english.toLowerCase().includes(searchTerm)
            )
            .slice(0, 6);
        message = `Portuguese verb "${searchTerm}" not found. Try one of the options above.`;
    }
    
    let html = `
        <div class="no-results">
            <h3>${message}</h3>
    `;
    
    if (suggestions.length > 0) {
        html += `
            <div class="verb-suggestions">
                ${suggestions.map(verb => `
                    <button class="verb-suggestion" onclick="selectVerb('${verb.infinitive}')">
                        ${verb.infinitive} (${isEnglishVerbMode ? verb.portuguese : verb.english})
                    </button>
                `).join('')}
            </div>
        `;
    } else {
        // Show default suggestions
        updateVerbSuggestions();
        html += `<div class="verb-suggestions">Use the suggestions above to get started.</div>`;
    }
    
    html += `</div>`;
    resultsContainer.innerHTML = html;
}

// Display empty search message
function displayEmptySearchMessage() {
    const resultsContainer = document.getElementById('conjugation-results');
    const languageText = isEnglishVerbMode ? 'English' : 'Portuguese';
    
    resultsContainer.innerHTML = `
        <div class="no-results">
            <h3>🔍 Search for ${languageText} Verbs</h3>
            <p>Type a verb in the search box above to see its conjugations.</p>
            <p><strong>Try these popular verbs:</strong></p>
        </div>
    `;
    
    // Show suggestions after the message
    updateVerbSuggestions();
}

// Display no results message
function displayNoResults(message) {
    const resultsContainer = document.getElementById('conjugation-results');
    resultsContainer.innerHTML = `
        <div class="no-results">
            <p>${message}</p>
        </div>
    `;
}

// Show flashcards view (hide conjugation views)
function showFlashcards() {
    document.getElementById('flashcard-view').style.display = 'block';
    document.getElementById('conjugation-view').style.display = 'none';
}
