import React from 'react';
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/Layout';
import './blog.css';

function BlogPost({ data }) {
  return (
    <Layout pageTitle={"Blog"}>
        <div id='blog'>
            <div id="header">
                <p>{data.mdx.frontmatter.date}</p>
                <p>@{data.mdx.frontmatter.author}</p>
            </div>
            <h1>{data.mdx.frontmatter.name}</h1>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </div>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        name
        author
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default BlogPost;