function toggle(old, newId) {
  const oldE = document.getElementById(old);
  const newE = document.getElementById(newId);

  oldE.style = 'display: none;';
  newE.style = '';
}