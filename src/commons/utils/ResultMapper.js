class ResultMapper {
  static toCamelCase(str) {
    return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
  }

  static toSnakeCase(str) {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
  }

  static objectToCamelCase(obj) {
    if (!obj) return null;

    const newObj = {};
    Object.keys(obj).forEach(key => {
      newObj[this.toCamelCase(key)] = obj[key];
    });
    return newObj;
  }

  static objectToSnakeCase(obj) {
    if (!obj) return null;

    const newObj = {};
    Object.keys(obj).forEach(key => {
      newObj[this.toSnakeCase(key)] = obj[key];
    });
    return newObj;
  }
}

module.exports = ResultMapper;
