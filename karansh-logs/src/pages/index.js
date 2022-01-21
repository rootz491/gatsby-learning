import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to my unofficial blog site which is backed by Sanity CMS.</p>
    <p>Gatsby is using Sanity's GraphQL API to pull data and display it here!</p>
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gridGap: "1rem",
      margin: "auto"
    }}>
      {
        data.allSanityPost.nodes.map(post => (
          <Link to={`/${post.slug.current}`}>
          <div key={post.title}>
            <img
              style={{ width: "100%", height: "200px", margin: "0" }}
              src={post.mainImage.asset.url}
              alt={post.title}
            />
            <h5>
              {post.title}
            </h5>
          </div>
          </Link>
        ))
      }
    </div>
  </Layout>
)

export const query = graphql`
  query MyQuery {
    allSanityPost {
      nodes {
        slug {
          current
        }
        title
        mainImage {
          asset {
            url
          }
        }
      }
    }
  }
`;

export default IndexPage
