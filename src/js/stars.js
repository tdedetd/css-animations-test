/**
 * @param {HTMLElement} root
 */
export function drawStars(root) {
  const width = innerWidth - 3;
  const height = innerHeight - 3;
  const count = Math.round(width * height / 4000);

  for (let i = 0; i < count; i++) {
    const x = Math.round(Math.random() * width);
    const y = Math.round(Math.random() * height);
    const elem = document.createElement('div');

    elem.classList.add('star');
    elem.style.left = `${x}px`;
    elem.style.top = `${y}px`;
    elem.style.opacity = 1 - (y / height);
    root.appendChild(elem);
  }
}
