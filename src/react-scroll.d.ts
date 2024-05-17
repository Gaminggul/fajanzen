declare module 'react-scroll' {
    import * as React from 'react';
  
    interface LinkProps {
      to: string;
      spy?: boolean;
      hashSpy?: boolean;
      smooth?: boolean | string;
      offset?: number;
      duration?: number | string;
      delay?: number;
      isDynamic?: boolean;
      onSetActive?: () => void;
      onSetInactive?: () => void;
      ignoreCancelEvents?: boolean;
      spyThrottle?: number;
      containerId?: string;
      activeClass?: string;
      className?: string;
      style?: React.CSSProperties;
      children: React.ReactNode;
    }
  
    export class Link extends React.Component<LinkProps> {}
  
    interface ElementProps {
      name: string;
      id?: string;
      className?: string;
      style?: React.CSSProperties;
      children?: React.ReactNode;
    }
  
    export class Element extends React.Component<ElementProps> {}
  }
  