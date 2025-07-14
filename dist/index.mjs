// src/index.ts
var Uniconst = class {
  constructor(__source) {
    this.__source = __source;
  }
  /**
   * 根据键获取对应的值
   *
   * 此方法通过泛型K来限制可以访问的属性类型，确保类型安全
   * 它利用了TypeScript的索引访问特性，以键值的形式获取对象的属性
   *
   * @param key - 要获取的属性的键，必须是对象T的有效键
   * @returns 返回对象T中与键K对应的值
   */
  get(key) {
    return this.__source[key];
  }
  /**
   * 获取选项数组
   *
   * 此方法用于获取当前源数据中的所有选项这些选项是源数据对象的值的集合
   * 如果源数据为空或者不存在，将返回一个空数组
   *
   * @returns {UniconstItem[]} 一个包含所有选项的数组如果源数据为空，则返回空数组
   */
  getOptions() {
    return Object.values(this.__source) ?? [];
  }
  /**
   * 将当前对象的选项转换为标签映射
   * 此方法主要用于生成一个映射对象，其中键是选项的值，值是选项的标签
   * @returns {UniconstMaps} 返回一个对象，其中每个选项的值映射到其对应的标签
   */
  toLabelMap() {
    return this.getOptions().reduce((obj, item) => {
      return { ...obj, [item.value]: item.label };
    }, {});
  }
};
var index_default = Uniconst;
export {
  index_default as default
};
//# sourceMappingURL=index.mjs.map