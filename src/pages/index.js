import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout >
    <SEO title="Home" />
    <p > Running your classroom like a democracy. </p>
    <p > NEXT: navigation bar </p>
    <div style={{
      maxWidth: `300px`,
      marginBottom: `1.45rem`
    }} >
      <Image />
    </div>
    <Link to="/page-1/" > ONE </Link>
    <Link to="/page-2/" > TWO </Link>
    <Link to="/page-3/" > THREE </Link>
    <Link to="/page-4/" > FOUR </Link>
  </Layout >)

export default IndexPage

