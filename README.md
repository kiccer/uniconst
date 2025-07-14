# Uniconst

Uniconst is a lightweight TypeScript utility library designed to manage constant mappings in a type-safe and structured manner. It provides an intuitive class-based API for handling constants with associated labels, values, and additional metadata such as colors.

## 📌 Features

* **Type Safety**: Built with TypeScript generics to ensure compile-time type checking.
* **Flexible Data Structure**: Supports extensible constant items with customizable fields.
* **Utility Methods**: Offers convenient methods for retrieving values, extracting options, and mapping labels.
* **Scalable Design**: Easily integrable into various applications including UI frameworks, backend services, and configuration systems.

## 🛠️ Usage

Create a constant definition object and instantiate the `Uniconst` class:

```ts
import Uniconst from 'uniconst';

const Status = new Uniconst({
  PENDING: { label: 'Pending', value: 0 },
  APPROVED: { label: 'Approved', value: 1 },
  REJECTED: { label: 'Rejected', value: 2 }
});

console.log(Status.get('PENDING')); // { label: 'Pending', value: 0 }
console.log(Status.getOptions());   // Array of all options
console.log(Status.toLabelMap());   // { '0': 'Pending', '1': 'Approved', '2': 'Rejected' }
```

## ✅ Benefits

* **Strong Typing**: Ensures that only valid keys and values are accessed.
* **Extensible**: You can add custom fields to your constant items without breaking existing logic.
* **Clean Abstraction**: Encapsulates common patterns for working with labeled constants.

## 📦 Installation

If you plan to publish this package to npm, install it via:

```bash
npm install uniconst
```

Or if using yarn:

```bash
yarn add uniconst
```

## 📄 License

MIT License — See LICENSE for details.
