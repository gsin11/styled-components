import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Content = styled.main`
  max-width: 800px;
  margin: 80px auto 0 auto;
  padding: 0 16px;
  box-sizing: border-box;

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter';
  }
`;

export function PageLayout({ children }) {
  return (
    <>
      <Header />
      <Content>
        {children}
      </Content>
    </>
  )
}
