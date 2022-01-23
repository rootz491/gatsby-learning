import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

export default function Projects({ data }) {
    return (
        <Layout pageTitle="Projects">
            <div>
                <h1 style={{ textAlign: 'center' }}>Projects</h1>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '1em',
                    padding: '1em',
                    width: '90%',
                    margin: '1em auto'
                }}>
                    {
                        data.allMongodbRootzhowcaseProjects.nodes.map(project => (
                            <a 
                                key={project.id} 
                                href={project.live} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                    padding: '5px',
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                }}
                            >
                            <div>
                                <h2>{project.name}</h2>
                                <img 
                                    style={{
                                        width: '100%',
                                        height: '200px',
                                    }}
                                    src={project.previewImg} 
                                    alt='preview img' 
                                />
                                <p>{project.description}</p>
                            </div>
                            </a>
                        ))
                    }
                </div>
            </div>
        </Layout>
    );
}

export const query = graphql`
    query MyQuery {
        allMongodbRootzhowcaseProjects {
            nodes {
                id
                name
                description
                previewImg
                live
            }
        }
    }
`;