import React from "react"
// import { Link } from "gatsby"
// import styled from "styled-components";

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from '../utils'
import aboutImg from '../images/bcg/aboutBcg.jpeg'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <PageHeader img={ aboutImg }>
      <Banner title='about us' subtitle='a little about us' />
    </PageHeader>
  </Layout>
)


export default AboutPage
