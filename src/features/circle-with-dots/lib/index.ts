export const getClampedRadius = () => {
  const rootFontSize = Number.parseFloat(getComputedStyle(document.documentElement).fontSize);
  const minPx = 9.375 * rootFontSize;
  const maxPx = 16.5625 * rootFontSize;
  const vwPx = (25 / 100) * window.innerWidth;
  return Math.max(minPx, Math.min(vwPx, maxPx));
};
