# small-ui

A small responsive ui framework.


## Installing

```
npm install small-ui
```


### The responsive breakponits
- small when width < 641px
- medium when width < 1025px
- large when width >= 1025px


## How to use

```tsx
import { Toolbar } from 'small-ui';

...

<Toolbar
  items={[
    { key: 'home', label: 'Home', href: '/#/home' },
    { key: 'about', label: 'About', href: '/#/about' }
  ]}
/>
```
