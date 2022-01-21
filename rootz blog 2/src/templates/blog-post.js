import * as React from "react"
import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";

const BlogPost = ({ pageContext }) => {
  return (
    <Layout>
      <p>Blog Page</p>
      <h1>{pageContext.frontmatter.name}</h1>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <p>By {pageContext.frontmatter.author}</p>
        <p>{pageContext.frontmatter.date}</p>
      </div>
      <div>
        <MDXRenderer>
          {pageContext.body}
        </MDXRenderer>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default BlogPost
