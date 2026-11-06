const EMAIL = 'vikneshsrv24@gmail.com';
const btn = document.getElementById('copy');
btn.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(EMAIL); btn.textContent = 'Copied!'; }
  catch (e) { location.href = 'mailto:' + EMAIL; return; }
  setTimeout(() => (btn.textContent = 'Copy Email'), 1600);
});
