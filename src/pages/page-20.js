import React from "react"
import Image from "../components/imageComponent/image2"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Page20 = () => (
  <Layout>
    <SEO title="Page 20" />
    <h1>BeSO</h1>
    <p>Welcome to Breathing, Stretching, and Observing</p>
    <p>This page will explore the connections a teacher can make between the Classroom Democracy and BeSO</p>
    <div style={{
      maxWidth: `300px`,
      marginBottom: `1.45rem`
    }} >
      <Image path={"cyp.jpg"} />
    </div>
  </Layout>
)

export default Page20

