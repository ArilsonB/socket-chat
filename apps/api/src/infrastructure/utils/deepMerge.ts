function deepMerge(target: Record<string, any>, source: Record<string, any>) {
  if (Array.isArray(target) && Array.isArray(source)) {
    return [...target, ...source];
  } else if (
    typeof target === 'object' &&
    target !== null &&
    typeof source === 'object' &&
    source !== null
  ) {
    const merged = { ...target };
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        merged[key] = target.hasOwnProperty(key)
          ? deepMerge(target[key], source[key])
          : source[key];
      }
    }
    return merged;
  } else {
    return source;
  }
}
