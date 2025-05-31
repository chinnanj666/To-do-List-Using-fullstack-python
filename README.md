# TODO List Application

## Overview
This project is a simple TODO list application built with a Python backend using FastAPI, and a frontend using HTML, CSS, and JavaScript. It allows users to create, read, update, and delete (CRUD) tasks, with the backend handling data storage and the frontend providing a user-friendly interface.

## Features
- Add new tasks with a title and description
- View a list of all tasks
- Mark tasks as complete or incomplete
- Edit existing tasks
- Delete tasks
- Persistent storage via a Python/FastAPI backend

## Tech Stack
- **Backend**: Python, FastAPI
- **Frontend**: HTML, CSS, JavaScript
- **Database**: SQLite (or replace with your preferred database, e.g., PostgreSQL)
- **Communication**: REST API endpoints via FastAPI

## Prerequisites
- Python 3.8 or higher
- Node.js (for local development, if additional JS tools are used)
- A modern web browser (Chrome, Firefox, etc.)

## Installation

### Backend Setup
1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd todo-list
   ```
2. **Create a Virtual Environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. **Install Dependencies**
   ```bash
   pip install fastapi uvicorn pydantic
   ```
4. **Run the FastAPI Server**
   ```bash
   uvicorn main:app --reload
   ```
   - The backend will be available at `http://127.0.0.1:8000`
   - API docs are auto-generated at `http://127.0.0.1:8000/docs`

### Frontend Setup
1. **Navigate to the Frontend Directory**
   ```bash
   cd todo-frontend
   ```
2. **Serve the Frontend**
   - Place your `index.html`, `styles.css`, and `script.js` files in the `todo-frontend` directory
   - Use a simple local server (e.g., via Python):
     ```bash
     python -m http.server 8080
     ```
   - Access the app at `http://localhost:8080`

## Project Structure
```
todo-list/
├── todo-backend/
│   ├── main.py          # FastAPI backend entry point
│   ├── models.py        # Pydantic models for task data
│   ├── database.py      # Database setup and connection (e.g., SQLite)
├── todo-frontend/
│   ├── index.html       # Main HTML file
│   ├── styles.css       # CSS for styling
│   ├── script.js        # JavaScript for frontend logic
├── README.md            # This file
└── requirements.txt     # Python dependencies
```

## Usage
1. **Start the Backend**
   - Run the FastAPI server: `uvicorn main:app --reload`
2. **Access the Frontend**
   - Open `http://localhost:8080` in your browser
3. **Interact with the App**
   - Add a task: Enter a title and description, then click "Add Task"
   - View tasks: See the list of tasks fetched from the backend
   - Edit a task: Click "Edit" to modify title/description, then save
   - Mark complete: Toggle the checkbox to update task status
   - Delete a task: Click "Delete" to remove a task
4. **API Endpoints**
   - `GET /tasks`: List all tasks
   - `POST /tasks`: Create a new task
   - `PUT /tasks/{id}`: Update a task by ID
   - `DELETE /tasks/{id}`: Delete a task by ID

## Example API Request
- **Create a Task**
  ```bash
  curl -X POST "http://127.0.0.1:8000/tasks" -H "Content-Type: application/json" -d '{"title": "Buy groceries", "description": "Milk, bread, eggs", "completed": false}'
  ```

## Development
- **Backend**: Modify `todo-backend/main.py` to add new endpoints or logic
- **Frontend**: Update `todo-frontend/script.js` for API calls, `styles.css` for design
- **Database**: Adjust `todo-backend/database.py` for your preferred storage (e.g., PostgreSQL)

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a pull request

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact
For questions, reach out at <your-email@example.com> or open an issue on GitHub.