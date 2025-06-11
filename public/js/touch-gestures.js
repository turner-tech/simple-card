/**
 * Touch Gestures Handler for Lingua Card
 * Enables swipe up/down to flip cards and swipe left/right to navigate
 */

class TouchGestureHandler {
    constructor() {
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.touchEndX = 0;
        this.touchEndY = 0;
        this.minSwipeDistance = 50; // Minimum distance for a swipe to be registered
        
        // Bind methods
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
        
        // Initialize
        this.init();
    }
    
    init() {
        // Add event listeners when study mode is open
        document.addEventListener('studyModeOpened', () => {
            const flashcard = document.getElementById('flashcard');
            if (flashcard) {
                flashcard.addEventListener('touchstart', this.handleTouchStart, false);
                flashcard.addEventListener('touchmove', this.handleTouchMove, false);
                flashcard.addEventListener('touchend', this.handleTouchEnd, false);
            }
        });
        
        // Remove event listeners when study mode is closed
        document.addEventListener('studyModeClosed', () => {
            const flashcard = document.getElementById('flashcard');
            if (flashcard) {
                flashcard.removeEventListener('touchstart', this.handleTouchStart, false);
                flashcard.removeEventListener('touchmove', this.handleTouchMove, false);
                flashcard.removeEventListener('touchend', this.handleTouchEnd, false);
            }
        });
    }
    
    handleTouchStart(event) {
        this.touchStartX = event.touches[0].clientX;
        this.touchStartY = event.touches[0].clientY;
    }
    
    handleTouchMove(event) {
        // Prevent scrolling when in study mode
        event.preventDefault();
    }
    
    handleTouchEnd(event) {
        this.touchEndX = event.changedTouches[0].clientX;
        this.touchEndY = event.changedTouches[0].clientY;
        
        this.handleGesture();
    }
    
    handleGesture() {
        const deltaX = this.touchEndX - this.touchStartX;
        const deltaY = this.touchEndY - this.touchStartY;
        
        // Check if horizontal or vertical swipe is more significant
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Horizontal swipe
            if (Math.abs(deltaX) > this.minSwipeDistance) {
                if (deltaX > 0) {
                    // Swipe right - previous card
                    prevCard();
                } else {
                    // Swipe left - next card
                    nextCard();
                }
            }
        } else {
            // Vertical swipe
            if (Math.abs(deltaY) > this.minSwipeDistance) {
                // Both up and down swipes flip the card
                flipCard();
            }
        }
    }
}

// Initialize touch gestures when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TouchGestureHandler();
});
