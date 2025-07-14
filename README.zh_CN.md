# Uniconst

Uniconst 是一个轻量级的 TypeScript 工具库，旨在以类型安全且结构化的方式管理常量映射。它提供了一个基于类的直观 API，用于处理带有相关标签、值以及附加元数据（如颜色）的常量。

## 📌 特性

* **类型安全**：使用 TypeScript 泛型确保编译时类型检查。
* **灵活的数据结构**：支持带有可扩展字段的常量项。
* **实用方法**：提供便捷的方法用于获取值、提取选项和映射标签。
* **可扩展的设计**：易于集成到各种应用中，包括 UI 框架、后端服务和配置系统。

## 🛠️ 使用方法

创建一个常量定义对象并实例化 `Uniconst` 类:

```ts
import Uniconst from 'uniconst';

const Status = new Uniconst({
  PENDING: { label: 'Pending', value: 0 },
  APPROVED: { label: 'Approved', value: 1 },
  REJECTED: { label: 'Rejected', value: 2 }
});

console.log(Status.get('PENDING')); // { label: 'Pending', value: 0 }
console.log(Status.getOptions());   // 所有选项的数组
console.log(Status.toLabelMap());   // { '0': 'Pending', '1': 'Approved', '2': 'Rejected' }
```

## ✅ 优势

* **强类型**：确保只能访问有效的键和值。
* **可扩展性**：可以向常量项中添加自定义字段而不破坏现有逻辑。
* **清晰的抽象**：封装了处理带标签常量的常见模式。

## 📦 Installation

如果你计划将此包发布到 npm，可以通过以下方式安装:

```bash
npm install uniconst
```

或使用 yarn:

```bash
yarn add uniconst
```

## 📄 许可证

MIT License — 详情请查看 LICENSE 文件。
