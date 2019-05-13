import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const NewsPage = () => (
  <Layout>
    <SEO title="News" keywords={[`news`, `art`, `painting`]} />
    <h1>Hi people</h1>
    <p>Welcome to my news</p>
    <p>...</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default NewsPage
