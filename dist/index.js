"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  default: () => index_default
});
module.exports = __toCommonJS(index_exports);
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
//# sourceMappingURL=index.js.map