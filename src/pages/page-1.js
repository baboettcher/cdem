import React from "react"
import { Link } from "gatsby"
import Image from "../components/image2"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page ONE" />
    <h1>BeSO</h1>
    <p>Welcome to Breathing, Stretching, and Observing</p>
    <p>BeSO will likleybe done using Next.js</p>


    <div style={{
      maxWidth: `300px`,
      marginBottom: `1.45rem`
    }} >
      <Image path={"cyp.jpg"} />
    </div>
    <Link to="/">home</Link>
  </Layout>
)

export default SecondPage

