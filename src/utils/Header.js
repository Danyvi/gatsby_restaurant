import React from 'react'
import styled from 'styled-components'
import img from '../images/bcg/homeBcg.jpeg'

function HomeHeader({ img, children }) {
  return (
    <IndexHeader img={ img }>
      { children }
    </IndexHeader>
  )
}

function PageHeader({ img, children }) {
  return (
    <DefaultHeader img={ img }>
      { children }
    </DefaultHeader>
  )
}


const IndexHeader = styled.header`
  min-height: calc(100vh - 55.78px);
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${ props => props.img }) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DefaultHeader = styled(IndexHeader)`
min-height:60vh;
`

// we create default props in case of just some error in loading the image in pages/index.js
HomeHeader.defaultProps = {
  img: img
}

PageHeader.defaultProps = {
  img: img
}

export { HomeHeader, PageHeader }