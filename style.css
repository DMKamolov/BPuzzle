:root {
  --primary-color: #4a90e2;
  --primary-dark: #357ab8;
  --bg-color: #f2f2f8;
  --text-color: #333;
  --radius: 8px;
  --transition: 0.3s ease;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
  line-height: 1.6;
}

.container {
  max-width: 480px;
  margin: 2em auto;
  background: #fff;
  padding: 2em;
  border-radius: var(--radius);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

header h1 {
  font-size: 2rem;
  margin-bottom: 0.5em;
}

.puzzle {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity var(--transition), max-height var(--transition);
}

.puzzle.visible {
  opacity: 1;
  max-height: 800px;
  margin-top: 1.5em;
}

.btn {
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  padding: 0.6em 1.2em;
  border-radius: var(--radius);
  cursor: pointer;
  font-size: 1rem;
  transition: background var(--transition);
}

.btn:hover,
.btn:focus {
  background-color: var(--primary-dark);
  outline: none;
}

.input-group {
  position: relative;
  margin-top: 1em;
}

input[type="text"] {
  width: 100%;
  padding: 0.8em;
  border: 1px solid #ccc;
  border-radius: var(--radius);
}

input:focus {
  border-color: var(--primary-color);
  outline: none;
  box-shadow: 0 0 0 3px rgba(74,144,226,0.2);
}

.feedback {
  display: block;
  height: 1.2em;
  margin-top: 0.2em;
  color: var(--primary-dark);
  font-size: 0.9rem;
}

.code {
  background: #eef;
  padding: 1em;
  border-radius: var(--radius);
  overflow-x: auto;
}

.reveal {
  margin-top: 1.5em;
  font-size: 1.1rem;
}

/* Responsive */
@media (max-width: 500px) {
  .container { margin: 1em; padding: 1.5em; }
  header h1 { font-size: 1.5rem; }
}
