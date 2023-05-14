import * as React from 'react';
import { Label } from '@fluentui/react';

export interface IFontImportProps {
  fonts:Array<Font>
}

export type Font ={
  name: string;
  url: string;
}

export class FontImportComponent extends React.Component<IFontImportProps> {
  constructor(props: IFontImportProps) {
    super(props);
  }

  /**
   * Renders the the style tag with the font definitions
   * @returns react node with the style information
   */
  public render(): React.ReactNode {
    return (
      <style>
        {this.props.fonts.map((font:Font)=>{
          return `@font-face {font-family: ${font.name};src: url(${font.url});}`;
        }).concat('')}
      </style>
    )
  }
}
