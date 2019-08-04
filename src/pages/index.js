import React from "react"
// import { Link } from "gatsby"
// import styled from "styled-components";

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner } from '../utils'
import img from '../images/bcg/homeBcg.jpeg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader img={ img }>
      <Banner title="eatery" subtitle="55 main street - Santa Monica, CA" />
    </HomeHeader>
  </Layout>
)


export default IndexPage
