/**
 * Theme Switcher for Lingua Card
 * Handles switching between light and dark mode
 */

class ThemeSwitcher {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.initTheme();
        this.addToggleButton();
    }

    initTheme() {
        // Apply saved theme on page load
        if (this.theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            this.updateToggleIcon('🌙');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            this.updateToggleIcon('☀️');
        }
    }

    addToggleButton() {
        // Create toggle button if it doesn't exist
        if (!document.getElementById('themeToggle')) {
            const button = document.createElement('button');
            button.id = 'themeToggle';
            button.className = 'theme-toggle';
            button.setAttribute('aria-label', 'Toggle dark/light mode');
            button.textContent = this.theme === 'dark' ? '🌙' : '☀️';
            
            button.addEventListener('click', () => this.toggleTheme());
            document.body.appendChild(button);
        }
    }

    toggleTheme() {
        // Switch between light and dark themes
        if (this.theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            this.theme = 'dark';
            this.updateToggleIcon('🌙');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            this.theme = 'light';
            this.updateToggleIcon('☀️');
        }
    }

    updateToggleIcon(icon) {
        const toggle = document.getElementById('themeToggle');
        if (toggle) {
            toggle.textContent = icon;
        }
    }
}

// Initialize theme switcher when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeSwitcher();
});
