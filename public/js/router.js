// Simple client-side router for lingua-card app
class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
        
        // Listen for browser navigation
        window.addEventListener('popstate', () => this.handleRoute());
        
        // Handle initial load
        this.handleRoute();
    }
    
    // Register a route
    addRoute(path, handler) {
        this.routes[path] = handler;
    }
    
    // Navigate to a route
    navigate(path) {
        window.history.pushState({}, '', path);
        this.handleRoute();
    }
    
    // Handle current route
    handleRoute() {
        const path = window.location.pathname;
        this.currentRoute = path;
        
        // Check for exact matches first
        if (this.routes[path]) {
            this.routes[path]();
            return;
        }
        
        // Check for route aliases
        if (path === '/verbs' || path === '/conjugations') {
            if (this.routes['/verbs']) {
                this.routes['/verbs']();
                return;
            }
        }
        
        // Default to home/flashcards
        if (this.routes['/'] || this.routes['']) {
            const homeHandler = this.routes['/'] || this.routes[''];
            homeHandler();
        }
    }
}

// Initialize router
const router = new Router();

// Route handlers
function showFlashcardsPage() {
    // Hide all views
    document.getElementById('flashcard-view').style.display = 'block';
    document.getElementById('conjugation-view').style.display = 'none';
    
    // Show flashcard-specific elements
    document.getElementById('flashcards-header').style.display = 'block';
    document.getElementById('flashcards-controls').style.display = 'block';
    
    // Update active nav
    updateActiveNav('flashcards');
}

function showVerbsPage() {
    // Hide all views
    document.getElementById('flashcard-view').style.display = 'none';
    document.getElementById('conjugation-view').style.display = 'block';
    
    // Hide flashcard-specific elements
    document.getElementById('flashcards-header').style.display = 'none';
    document.getElementById('flashcards-controls').style.display = 'none';
    
    // Initialize verb conjugation view
    if (typeof initializeLanguageToggle === 'function') {
        initializeLanguageToggle();
    }
    if (typeof updateVerbSuggestions === 'function') {
        updateVerbSuggestions();
    }
    if (typeof displayEmptySearchMessage === 'function') {
        displayEmptySearchMessage();
    }
    
    // Update active nav
    updateActiveNav('verbs');
}

function updateActiveNav(activeSection) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const activeItem = document.querySelector(`[data-nav="${activeSection}"]`);
    if (activeItem) {
        activeItem.classList.add('active');
    }
}

// Register routes
router.addRoute('/', showFlashcardsPage);
router.addRoute('', showFlashcardsPage);
router.addRoute('/verbs', showVerbsPage);
router.addRoute('/conjugations', showVerbsPage);

// Navigation functions for use in HTML
function navigateToFlashcards() {
    router.navigate('/');
}

function navigateToVerbs() {
    router.navigate('/verbs');
}

// Update existing showFlashcards and showVerbConjugations functions
function showFlashcards() {
    router.navigate('/');
}

function showVerbConjugations() {
    router.navigate('/verbs');
}
