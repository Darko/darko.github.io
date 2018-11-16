export function loadFont() {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Bangers';
  link.rel = 'stylesheet';
  document.head.append(link);
  return link;
}