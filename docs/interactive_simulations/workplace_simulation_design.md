# Workplace Simulation: The Slow Burn

## 1. Core Concept

A multi-day, interactive simulation where the player must identify a bad-faith actor in a workplace environment. The key challenge is that the evidence is subtle and distributed over a significant period (days or even weeks), requiring the player to pay close attention, connect disparate events, and manage their own reputation.

## 2. Learning Objectives

This simulation is designed to teach players to:

*   **Recognize subtle patterns of manipulation** and bad-faith behavior over time.
*   **Understand the importance of documentation** and evidence gathering.
*   **Develop strategic thinking** in social and political environments.
*   **Manage opportunity cost** when deciding where to focus limited attention.
*   **Experience the slow, ambiguous nature** of dealing with a sophisticated harmful actor.

## 3. Core Gameplay Mechanics

### 3.1. Time and Progression

*   **Real-Time Pacing:** The simulation progresses in real-time. One in-game day equals one real-world day.
*   **Daily Actions:** Each day, the player has a limited number of "Action Points" (e.g., 3-5 points) to spend on various activities. This creates a sense of opportunity cost.
*   **State Persistence:** The game state (player stats, collected evidence, relationship statuses) must be saved locally in the user's browser or in a simple backend database, allowing them to pick up where they left off each day.

### 3.2. Player Actions

Players can spend their Action Points on activities such as:

*   **`Read Emails`**: Review daily communications. Some may contain subtle clues, manipulative language, or evidence of others' actions.
*   **`Attend Meeting`**: Participate in a team meeting. This is a key venue for observing group dynamics and the antagonist's behavior.
*   **`Talk to a Colleague`**: Have a one-on-one conversation with a team member. This can be used to build alliances, gather information, or fall victim to misinformation.
*   **`Work on Tasks`**: Focus on core job responsibilities. This improves the player's performance metric but may cause them to miss social cues.
*   **`Document an Incident`**: Spend time writing down a specific observation. This is crucial for building a case later.

### 3.3. The Antagonist

The bad-faith actor will not be overtly hostile. Their actions will be subtle and deniable in isolation. Examples include:

*   **Plausible Misinformation:** Spreading rumors or false narratives that are hard to disprove immediately.
*   **Strategic Incompetence:** "Forgetting" to do things that subtly undermine the player or the team.
*   **Gaslighting:** Distorting past events to make the player question their own memory or judgment.
*   **Credit Theft:** Taking credit for the player's work in a way that is difficult to challenge without looking petty.
*   **Manager Betrayal:** A previously supportive manager becomes inexplicably hostile. They might start micromanaging, publicly criticizing the player's work, or setting impossible-to-meet expectations. This introduces a power imbalance and makes documentation even more critical.

### 3.4. The Environment Integrity Metric (Hidden)

To simulate the systemic impact of the player's actions, a hidden metric called `Environment Integrity` will track the overall health of the team's culture.

*   **Function:** This score represents the prevailing norms of the workplace. It starts at a neutral value.
*   **Decreases:** The score goes down each time the player tolerates a clear act of disrespect or manipulation (e.g., choosing a "do nothing" option). This represents the **environmental conditioning** of accepting lower standards.
*   **Increases:** The score goes up each time the player successfully enforces a boundary or models ethical behavior. This represents the player actively calibrating the environment to a higher standard.

This metric directly implements the **"Systemic Contagion"** mechanic. A low `Environment Integrity` score will unlock new negative events (e.g., other colleagues mimicking the antagonist's behavior, increased team-wide stress), while a high score will unlock positive ones (e.g., allies offering unsolicited support). The player will feel the environment shift based on their willingness to uphold a standard.

## 4. Narrative Structure

*   **The First 90 Days:** The simulation will take place over a 90-day period, mirroring the critical onboarding and integration phase in a new role.
*   **Phases of the Game:**
    1.  **Honeymoon (Days 1-15):** Everything seems fine. The antagonist is friendly and helpful. Clues are extremely rare.
    2.  **The Cracks Appear (Days 16-45):** The first subtle incidents occur. The player starts to feel that something is "off."
    3.  **Escalation (Days 46-75):** The antagonist's actions become more frequent and slightly bolder as they test boundaries.
    4.  **The Endgame (Days 76-90):** The situation comes to a head. The player must decide whether they have enough evidence to act, and how to do so.

## 5. Win/Loss Conditions

*   **Standard Win Condition:** The player successfully identifies the antagonist and presents a well-documented case to a neutral third party (e.g., HR or a senior manager), leading to a positive resolution for themselves.
*   **Leadership Win Condition (Golden Ending):** If the player achieves the Standard Win *and* finishes with a high `Environment Integrity` score, they receive a special epilogue. This outcome highlights how their actions not only protected themselves but also fundamentally improved the team's culture, fulfilling a moral duty to create a more respectful and ethical environment for everyone.
*   **Loss Conditions:**
    *   The player is fired or marginalized due to the antagonist's actions.
    *   The player accuses the wrong person, destroying their own credibility.
    *   The player does nothing, and the antagonist causes significant damage to the team or project (low `Environment Integrity` endgame).

## 6. Technical Considerations

*   **Platform:** A web-based application (HTML, CSS, JavaScript) is the most accessible option.
*   **State Management:**
    *   **Initial Prototype:** Use the browser's `localStorage` to store the game state as a JSON object.
    *   **Future Version:** A simple backend (e.g., Firebase or a small Node.js server) could allow for user accounts and cross-device play.
*   **Content:** The narrative events, dialogues, and clues will be stored in a structured format (like JSON or YAML) to be easily loaded by the game engine.

This design provides a solid foundation for building a compelling and educational simulation. The next step is to start prototyping the core daily loop and the state persistence mechanism.
