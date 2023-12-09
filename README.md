# Taskboard - Interactive Task Board Application

## Description
Taskboard aims to provide a smooth and efficient task management experience. We appreciate your interest and contributions to making this application better!. It is designed to offer a dynamic and user-friendly interface for managing tasks and tickets. The application interacts seamlessly with an external API, providing a rich and responsive user experience.

## Features

- **Dynamic Interaction with API**: Taskboard interacts with the provided API endpoint (https://api.quicksell.co/v1/internal/frontend-assignment) to fetch and display ticket information.
- **Grouping Options**: Users can dynamically adjust the Kanban board by selecting different grouping options:
    1. **By Status**: Tickets are grouped based on their current status, offering a clear view of the task progression.
    2. **By User**: This option arranges the tickets according to the assigned user, making it easy to track individual responsibilities.
    3. **By Priority**: Tickets are grouped based on their priority level, allowing users to focus on urgent tasks.
- **Sorting Capabilities**: Provides two distinct ways for sorting tickets:
    1. **Priority**: Tickets can be arranged in descending order of priority.
    2. **Title**: Users can sort tickets in ascending order based on their title.
- **Responsive Design**: The Kanban board is designed to be responsive and visually appealing, ensuring a consistent experience across various devices and screen sizes.
- **Priority Levels**: The application recognizes the following priority levels for tickets:
    - Urgent (Priority level 4)
    - High (Priority level 3)
    - Medium (Priority level 2)
    - Low (Priority level 1)
    - No priority (Priority level 0)

## Technology Stack

- **React JS**: For building the user interface.
- **HTML/CSS**: For structuring and styling the application.
- **JavaScript**: For application logic and API interaction.

## Installation and Setup

1. Clone the repository:
    ```
    git clone [repository URL]
    ```
2. Navigate to the project directory:
    ```
    cd taskboard
    ```
3. Install dependencies:
    ```
    npm install
    ```
4. Start the application:
    ```
    npm start
    ```
5. Open your browser and navigate to `localhost:3000` to view the application.

## Usage

- **Display Button**: Click the "display" button to load tickets from the API.
- **Grouping Options**: Select the desired grouping option (Status, User, Priority) to adjust the board's layout.
- **Sorting Options**: Choose either 'Priority' or 'Title' to sort the displayed tickets accordingly.

## Screenshots

*(Include screenshots of your application here)*

## Contributing

---



*(This is a basic template for your README.md file. You might need to adjust it according to your project's specific details and requirements.)*
