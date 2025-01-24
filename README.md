# Match Data Tracker

The **Match Data Tracker** is a web-based application designed to track match performance in ranked gaming scenarios. This application calculates RP (Ranked Points) based on kills, assists, participation, placement, and rank. It also allows customization of penalties associated with different ranks.

---

## Features

- **Starting RP Management:** Users can set an initial RP value as the starting point.
- **Match Data Input:** Input fields for kills, assists, participation percentage, and placement.
- **Rank Selection:** Dropdown menu to select the player's current rank.
- **RP Calculation:** Calculates RP earned for each match based on input data.
- **Dynamic Penalties:** Allows customization of RP penalties for each rank.
- **Rank Updates:** Automatically adjusts the rank when RP exceeds the threshold for the current rank.
- **Match History:** Tracks and displays match history in a table format.

---

## Technologies Used

- **HTML:** For structuring the application layout.
- **CSS:** For styling the interface.
- **JavaScript:** For dynamic calculations, data processing, and interactive functionalities.

---

## Getting Started

### Prerequisites

- A web browser (e.g., Chrome, Firefox, Edge).

### Setup

1. Download or clone the repository to your local machine.
2. Open the `index.html` file in your preferred web browser.

---

## Usage

1. **Set Starting RP**
   - Enter the starting RP value in the "Starting RP" input field.
   - Click the "Set Starting RP" button to initialize the tracker.

2. **Input Match Data**
   - Fill in the match details:
     - **Kills**: Total number of kills.
     - **Assists**: Total number of assists.
     - **Participation (%):** A percentage value for participation.
     - **Placement**: Position in the match (1 = 1st place, etc.).
     - **Rank**: Select the current rank from the dropdown menu.
   - Click the "Process Match Data" button to calculate and display the results.

3. **View Match History**
   - Processed match data will be displayed in the table at the bottom of the page.

---

## File Structure

- **index.html**: Contains the structure and elements of the application.
- **style.css**: Contains the styles for the application (optional).
- **script.js**: Contains the JavaScript logic for RP calculation and rank management.

---

## Future Enhancements

- Add **export to CSV** functionality for match history.
- Include detailed visualizations, such as charts for performance tracking.
- Enhance rank thresholds to support new game updates.
- Add authentication for saving match data to a user account.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contributions

Contributions are welcome! Feel free to fork this repository, submit issues, or open pull requests to enhance the application.
