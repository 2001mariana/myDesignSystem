import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}


export const Thing: FC<Props> = ({ children }) => {
  return <div>{children || `the snozzberries taste like snozzberries`}</div>;
};

export * from './components/ABbutton'
export * from './components/Card'
export * from './components/Tag'
export * from './components/ABInput'
export * from './components/ABOptionGroup'
export * from './components/ABInputQuant'
export * from './components/ButtonGreen'
export * from './components/ButtonDanger'
export * from './components/ButtonBlack'
export * from './components/ButtonLed'
export * from './components/ButtonBlue'
export * from './components/ButtonYellow'
export * from './components/ButtonPink'