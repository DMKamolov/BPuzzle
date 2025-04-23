```js
// Wait until DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('startBtn');
  const puzzles = ['puzzle1', 'puzzle2', 'puzzle3', 'final'];
  const answers = {
    1: 'PLACEHOLDER1',                // example: 'teacup'
    2: 'café is target',              // decoded ROT13 of “Gur Pbssrr ’f Tngure”
    3: 'PLACEHOLDER3',                // example: 'rooftop'
    final: 'TMG'                      // initial letters T + C + R etc.
  };

  // Utility: show/hide
  const show = id => document.getElementById(id).classList.add('visible');
  const hide = id => document.getElementById(id).classList.remove('visible');
  const setFeedback = (inputEl, message, success) => {
    const fb = inputEl.nextElementSibling;
    fb.textContent = message;
    fb.style.color = success ? 'green' : 'crimson';
  };

  // Start the trail
  startBtn.addEventListener('click', () => {
    hide('startBtn');
    show(puzzles[0]);
  });

  // Puzzle handlers
  document.querySelectorAll('.submit').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = btn.dataset.puzzle;
      const input = document.getElementById(`ans${idx}`);
      const val = input.value.trim().toLowerCase();
      const correct = answers[idx].toLowerCase();

      if (val === correct) {
        setFeedback(input, '✅ Correct!', true);
        hide(`puzzle${idx}`);
        const next = puzzles[puzzles.indexOf(`puzzle${idx}`) + 1];
        show(next);
      } else {
        setFeedback(input, '❌ Try again.', false);
      }
    });
  });

  // Final unlock
  document.getElementById('unlockBtn').addEventListener('click', () => {
    const finalInput = document.getElementById('ans4');
    const attempt = finalInput.value.trim().toUpperCase();
    if (attempt === answers.final) {
      document.getElementById('reveal').innerHTML =
        `🎂 Happy Birthday! <a href="YOUR-BIRTHDAY-VIDEO-OR-CALL-LINK" target="_blank">Click for your surprise!</a>`;
      hide('unlockBtn');
    } else {
      setFeedback(finalInput, '❌ Double-check your letters.', false);
    }
  });
});
