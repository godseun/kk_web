export const debounceFunction = (callback: Function, delay: number) => {
  let timer: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
};
