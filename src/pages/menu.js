import React from "react"
// import { Link } from "gatsby"
// import styled from "styled-components";

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader } from '../utils'
import menuImg from '../images/bcg/menuBcg.jpeg'


const MenuPage = () => (
  <Layout>
    <SEO title="About" />
    <PageHeader img={menuImg}>
      Hello from Menu
    </PageHeader>
  </Layout>
)


export default MenuPage
