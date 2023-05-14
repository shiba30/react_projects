// Reactでのstyleの当て方
import React from 'react';
import { InlineStyle } from './components/styleComponents/InlineStyle'
import { CssModules } from './components/styleComponents/CssModules';
import { StyledJsx } from './components/styleComponents/StyledJsx';
import { StyledComponents } from './components/styleComponents/StyledComponents';
import { Emotion } from './components/styleComponents/Emotion';

export default function App() {

  return (
    <div>
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
};
