import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card } from 'components/common';
import { Wrapper, Grid, Item, Content, Stats } from './styles';

export const Works = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        
      </Grid>
    </Wrapper>
  );
};
