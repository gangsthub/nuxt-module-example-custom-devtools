export const isPlainObject = (value: any): boolean => {
  return Object.prototype.toString.call(value) === "[object Object]";
};

export const deepMerge = (target: any, source: any) => {
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isPlainObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, { [key]: {} });
        }
        deepMerge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    });
  }
  return target;
};
