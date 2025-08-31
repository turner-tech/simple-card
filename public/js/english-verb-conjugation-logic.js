// English Verb Conjugation Logic
// Handles search, display, and interaction for English verb conjugations

let currentEnglishVerb = null;

// Show English verb conjugations view
function showEnglishVerbConjugations() {
    document.getElementById('flashcard-view').style.display = 'none';
    document.getElementById('conjugation-view').style.display = 'none';
    document.getElementById('english-conjugation-view').style.display = 'block';
    
    // Clear any previous results
    document.getElementById('english-conjugation-results').innerHTML = '';
    document.getElementById('englishVerbSearch').value = '';
    document.getElementById('englishVerbSearch').focus();
}

// Search for English verb
function searchEnglishVerb() {
    const searchTerm = document.getElementById('englishVerbSearch').value.trim().toLowerCase();
    if (!searchTerm) return;
    
    // Find verb by English infinitive or Portuguese translation
    const verb = englishVerbConjugations.find(v => 
        v.infinitive.toLowerCase() === searchTerm ||
        v.portuguese.toLowerCase().includes(searchTerm) ||
        v.infinitive.toLowerCase().includes(searchTerm)
    );
    
    if (verb) {
        selectEnglishVerb(verb.infinitive);
    } else {
        displayEnglishVerbNotFound(searchTerm);
    }
}

// Select and display English verb
function selectEnglishVerb(infinitive) {
    const verb = englishVerbConjugations.find(v => v.infinitive === infinitive);
    if (!verb) return;
    
    currentEnglishVerb = verb;
    displayEnglishVerbConjugation(verb);
    document.getElementById('englishVerbSearch').value = infinitive;
}

// Display English verb conjugation
function displayEnglishVerbConjugation(verb) {
    const resultsContainer = document.getElementById('english-conjugation-results');
    
    const html = `
        <div class="verb-conjugation-card">
            <div class="verb-header">
                <h3>${verb.infinitive}</h3>
                <div class="verb-info">
                    <span class="portuguese-translation">${verb.portuguese}</span>
                    <span class="verb-type ${verb.type}">${verb.type}</span>
                    <span class="difficulty ${verb.difficulty}">${verb.difficulty}</span>
                </div>
            </div>
            
            <div class="conjugation-grid">
                ${Object.entries(englishTenseNames).map(([tenseKey, tenseInfo]) => `
                    <div class="tense-section">
                        <h4 class="tense-title">${tenseInfo.en}</h4>
                        <div class="conjugation-table">
                            ${Object.entries(englishPronounLabels).map(([pronounKey, pronounInfo]) => `
                                <div class="conjugation-row">
                                    <span class="pronoun">${pronounInfo.en}</span>
                                    <span class="conjugation">${verb.conjugations[tenseKey][pronounKey]}</span>
                                </div>
                            `).join('')}
                        </div>
                        <div class="example-sentence">
                            <strong>Example:</strong> ${verb.examples[tenseKey]}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    resultsContainer.innerHTML = html;
}

// Display verb not found message
function displayEnglishVerbNotFound(searchTerm) {
    const resultsContainer = document.getElementById('english-conjugation-results');
    
    const suggestions = englishVerbConjugations
        .filter(v => 
            v.infinitive.toLowerCase().includes(searchTerm) ||
            v.portuguese.toLowerCase().includes(searchTerm)
        )
        .slice(0, 6);
    
    let html = `
        <div class="verb-not-found">
            <h3>Verb "${searchTerm}" not found</h3>
            <p>Try searching for one of these common English verbs:</p>
    `;
    
    if (suggestions.length > 0) {
        html += `
            <div class="verb-suggestions">
                ${suggestions.map(verb => `
                    <button class="verb-suggestion" onclick="selectEnglishVerb('${verb.infinitive}')">
                        ${verb.infinitive} (${verb.portuguese})
                    </button>
                `).join('')}
            </div>
        `;
    } else {
        html += `
            <div class="verb-suggestions">
                <button class="verb-suggestion" onclick="selectEnglishVerb('be')">be (ser/estar)</button>
                <button class="verb-suggestion" onclick="selectEnglishVerb('have')">have (ter)</button>
                <button class="verb-suggestion" onclick="selectEnglishVerb('do')">do (fazer)</button>
                <button class="verb-suggestion" onclick="selectEnglishVerb('go')">go (ir)</button>
                <button class="verb-suggestion" onclick="selectEnglishVerb('get')">get (conseguir)</button>
                <button class="verb-suggestion" onclick="selectEnglishVerb('make')">make (fazer)</button>
            </div>
        `;
    }
    
    html += `</div>`;
    resultsContainer.innerHTML = html;
}

// Handle Enter key in search input
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('englishVerbSearch');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchEnglishVerb();
            }
        });
    }
});

// Handle Enter key in search input for English verbs
