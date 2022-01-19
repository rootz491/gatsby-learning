import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import './blogs.css';

export default function BlogsPage({ data }) {
    console.log(data);
    return (
        <Layout>
            <div className="blogs">
                <h2>Blog Page</h2>
                <p>There are total {data.allMdx.totalCount} blogs in this site!</p>
                <ul>
                    {
                        data.allMdx.nodes.map(node => 
                            <li key={node.slug}>
                                <Link to={`/${node.slug}`}>
                                    {node.frontmatter.name}
                                </Link> by {node.frontmatter.author}
                            </li>
                        )
                    }
                </ul>
            </div>
        </Layout>
    );
}


export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                    name
                    author
                }
                slug
            }
            totalCount
        }
    }
`;


// query {              <- this query was used to fetch data from the file system node
//     allFile {
//         nodes {
//             name
//         }
//     }
// }