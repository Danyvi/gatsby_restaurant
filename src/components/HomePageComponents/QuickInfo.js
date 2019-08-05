import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { styles } from '../../utils'

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="let us tell you" title="our mission" />
        <QuickInfoWrapper>
          <p className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At perferendis, aut nemo magni maiores neque dolores ab assumenda aperiam omnis mollitia architecto et adipisci nulla corporis repellat natus provident minus?
          </p>
          <Link to="/about/" style={ { textDecoration: 'none' } }>
            <SectionButton style={ { margin: '2rem auto'} }>about</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

// the basic section is 90vw for each and every screen
// However for each and every section if we want 90% of that or 80% of that we can define it
// here we say that QuickInfoWrapper is 90% of 90vw
// we have more flexibility where we know that we have some padding all around 
// but in this case I pick and choose my width for each and every section
const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text{
    line-height: 2rem;
    color: ${ styles.colors.mainGrey };
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
