import React from 'react';
import Layout from '../components/Layout';

export default function BlogPage({ data }) {
  return (
    <Layout pageTitle={"blog"}>
        {
            data.allMdx.nodes.map(node => (
                <article key={node.id}>
                    <h2>{node.frontmatter.name}</h2>
                    <p>Posted: {node.frontmatter.date}</p>
                </article>
            ))
        }
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`