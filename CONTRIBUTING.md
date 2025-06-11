# Contributing to Lingua Card

Thank you for considering contributing to Lingua Card! This document provides guidelines for contributions.

## How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test your changes**
5. **Commit your changes**
   ```
   git commit -m "Add feature: description of changes"
   ```
6. **Push to your branch**
   ```
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**

## Adding New Flashcards

To add new flashcards to the collection:

1. Open `public/js/improvedFlashcards.js`
2. Add new flashcard objects following the existing format:
   ```javascript
   {
     portuguese: "word",
     english: "translation",
     example: "Example sentence.",
     partOfSpeech: "noun/verb/etc.",
     tags: "#tag1 #tag2",
     difficulty: "beginner/intermediate/advanced"
   }
   ```

## Code Style

- Use consistent indentation (2 spaces)
- Follow existing naming conventions
- Add comments for complex logic

## Questions?

Feel free to open an issue if you have any questions about contributing.
