import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

export default function users({ data }) {
    return (
        <Layout>
            <h1 style={{ textAlign: 'center' }}>Users</h1>
            {
                data.allDataJson.nodes[0].user.map(user => (
                    <div key={user.id} style={{
                        border: '1px solid black',
                        margin: '10px 0',
                        padding: '10px',
                        textAlign: 'center'
                    }}>
                        <Link style={{ color: 'black' }} to={`/users/${user.id}`}>Go to {user.name}'s page</Link>
                    </div>
                ))
            }
        </Layout>
    );
}

export const query = graphql`
    query UserQuery {
        allDataJson {
            nodes {
                user {
                    id
                    name
                    email
                    surname
                }
            }
        }
    }  
`;