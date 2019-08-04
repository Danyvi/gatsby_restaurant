import React from "react"
// import { Link } from "gatsby"
// import styled from "styled-components";

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader } from '../utils'
import contactImg from '../images/bcg/contactBcg.jpeg'

const ContactPage = () => (
  <Layout>
    <SEO title="About" />
    <PageHeader img={contactImg}>
      Hello from Contact
    </PageHeader>
  </Layout>
)


export default ContactPage
