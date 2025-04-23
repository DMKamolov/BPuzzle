const startBtn = document.getElementById('startBtn');
const puzzles  = ['puzzle1','puzzle2','puzzle3','final'];
const answers  = {
  1: 'PLACEHOLDER1',
  2: 'café is target',
  3: 'PLACEHOLDER3',
  final: 'TMG'
};

// Show the first puzzle
startBtn.onclick = () => {
  startBtn.style.display = 'none';
  show('puzzle1');
};

// Attach handlers to each submit button
document.querySelectorAll('button[data-puzzle]').forEach(btn => {
  btn.onclick = () => {
    const p = btn.dataset.puzzle;
    const input = document.getElementById('ans' + p).value.trim().toLowerCase();
    if (input === answers[p].toLowerCase()) {
      alert('✅ Correct');
      hide('puzzle' + p);
      const nextIndex = puzzles.indexOf('puzzle' + p) + 1;
      show(puzzles[nextIndex]);
    } else {
      alert('❌ Try again');
    }
  };
});

// Final unlock
document.getElementById('unlockBtn').onclick = () => {
  const attempt = document.getElementById('ans4').value.trim().toUpperCase();
  if (attempt === answers.final) {
    document.getElementById('reveal').innerHTML = 
      `<p>🎂 Happy Birthday!  
       <a href="YOUR-BIRTHDAY-VIDEO-OR-CALL-LINK" target="_blank">
         Click for your surprise!
       </a></p>`;
    hide('unlockBtn');
  } else {
    alert('Not quite—double-check your first letters.');
  }
};

function show(id){ document.getElementById(id).style.display = 'block'; }
function hide(id){ document.getElementById(id).style.display = 'none'; }
