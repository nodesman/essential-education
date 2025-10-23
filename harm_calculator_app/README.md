# Project Goal: The Harm Calculator App

## 1. Core Purpose & User Experience

The goal of this project is to create a simple, private, single-page web application to help users analyze harmful incidents. The user experience will be focused and calming, guiding the user through a process of reflection.

A user will be able to:

*   Paste or write a description of a harmful incident into a text box.
*   Identify the individuals ("actors") involved in the incident.
*   For each actor, assign a "Harm Grade" using the predefined grading system.
*   View a clear, printable summary of their analysis for their own records and clarity.

**Core Principle: Privacy First.** All data will be processed and stored exclusively in the user's browser. No information will be sent to or saved on any server, ensuring complete user privacy and safety.

## 2. Technology Stack

*   **Framework:** Next.js (with React and TypeScript) for a modern, reliable, and fast single-page application.
*   **Styling:** Bootstrap for a clean, minimalist, and responsive design that is accessible and easy to use on both desktop and mobile browsers.

## 3. Implementation Steps

1.  **Scaffold the Application:** Use `create-next-app` to set up the basic project structure.
2.  **Build the UI:** Create the main React components:
    *   An input area for the incident description.
    *   A dynamic section to add, name, and manage the people involved.
    *   A modal or side panel displaying the grading definitions for easy reference.
    *   A summary view that clearly presents the final analysis.
3.  **Add Interactivity:** Implement the client-side logic to allow users to dynamically add actors, assign grades, and see the summary update in real-time.
4.  **Final Touches:** Ensure the styling is clean, the instructions are clear, and the privacy-first approach is explicitly stated to the user.
