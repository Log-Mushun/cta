export const emitCustomEvent = () => {
  const customEvent = new CustomEvent('customEvent');
  window.dispatchEvent(customEvent);
};

export const subscribeToCustomEvent = (callback) => {
  window.addEventListener('customEvent', callback);
};
