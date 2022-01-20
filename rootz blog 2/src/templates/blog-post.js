import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const BlogPost = ({ pageContext }) => {
  console.log(pageContext);
  return (
    <Layout>
      <p>Blog Page</p>
      <h1>{pageContext.name}</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default BlogPost
