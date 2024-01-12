export default function isVisible(elem: HTMLElement) {
  const coords = elem.getBoundingClientRect();
  const windowHeight = document.documentElement.clientHeight;
  const topVisible = coords.top > 0 && coords.top < windowHeight;
  const bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
  return topVisible || bottomVisible;
}
