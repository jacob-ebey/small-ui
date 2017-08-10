export interface ToolbarItem {
  key?: string;
  label?: string;
  href?: string;
}

export interface ToolbarProps {
  className?: string;
  label?: string;
  items?: ToolbarItem[];
}

export interface ToolbarState {
  isVisible: boolean;
}