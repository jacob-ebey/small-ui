import * as React from 'react';

import { ToolbarItem, ToolbarProps, ToolbarState } from './Toolbar.Props';

import './Toolbar.css';

export class Toolbar extends React.Component<ToolbarProps, ToolbarState> {
  public state: ToolbarState = {
    isVisible: false,
  };

  public render(): JSX.Element {
    const { label, items } = this.props;
    const { isVisible } = this.state;
    const className: string = isVisible ? 'open' : 'closed';

    return (
      <div className={`toolbar ${className || ''}`}>
        <i className="fa fa-bars menuButton" onClick={this._toggleVisible} />
        <h1>{label}</h1>
        <div>
          {
            items && items.map((item: ToolbarItem) => (
              <a
                key={item.key}
                href={`/#${item.href}`}
                onClick={this._toggleVisible}
              >
                {item.label}
              </a>
            ))
          }
        </div>
      </div>
    );
  }

  private _toggleVisible = () => {
    const { isVisible } = this.state;
    this.setState({ isVisible: !isVisible });
  }
}
