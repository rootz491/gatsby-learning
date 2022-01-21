import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

export default function Blogs({ data }) {
    return (
        <Layout>
            <h1 style={{ textAlign: 'center' }}>Blogs</h1>
            {
                data.allMdx.nodes.map((blog, i) => (
                    <div key={i} style={{
                        border: '1px solid black',
                        margin: '10px 0',
                        padding: '10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Link style={{ color: 'black' }} to={`/blog/${blog.slug}`}>{blog.frontmatter.name}</Link>
                        <p>By {blog.frontmatter.author}</p>
                    </div>
                ))
            }
        </Layout>
    );
}

export const query = graphql`
    query BlogQuery {
        allMdx {
            nodes {
                frontmatter {
                    name
                    author
                }
                slug
            }
        }
    }  
`;