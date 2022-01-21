import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to my new gatsby blog site.</p>
    <p>I've used different method to server those dynamic pages this time (with better understanding of it ofc)</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/blogs/">Go to Blogs Page</Link> <br />
      <Link to="/users/">Go to Users Page</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
