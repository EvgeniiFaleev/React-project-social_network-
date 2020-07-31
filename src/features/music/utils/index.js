export const converter = (duration) => {
  const minutes = Math.floor(duration / 60);
  let seconds = String(Math.floor(duration % 60));
  if (seconds.length === 1) {
    seconds = "0" + seconds;
  }
  const result = minutes + " : " + seconds;
  return result;
};

export const calculateProgress = (mouseX, progressElement) => {
  const barWidth = progressElement.getBoundingClientRect().right -
    progressElement.getBoundingClientRect().left;
  const scrollPos = Math.abs(mouseX -
    progressElement.getBoundingClientRect().left);
  const percentToScroll = scrollPos / barWidth * 100;
  return percentToScroll;
};