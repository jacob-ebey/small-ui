- [Home](/small-ui)

# Toolbar
A simple, responsive toolbar.

## Importing
```typescript
import { Toolbar, ToolbarProps, ToolbarItem } from 'small-ui';
```

## Using

```typescript
render() {
  return (
    <Toolbar
      items={[
        { key: 'home', label: 'Home', href: '/#/home' },
        { key: 'about', label: 'About', href: '/#/about' }
      ]}
    />
  );
}
```

## Props
```typescript
export interface ToolbarProps {
  className?: string;
  label?: string;
  items?: ToolbarItem[];
}

export interface ToolbarItem {
  key?: string;
  label?: string;
  href?: string;
}
```