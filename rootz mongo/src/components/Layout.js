import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import './global.css';
import { header, footer, nav } from './Layout.module.css';

export default function Layout({ children }) {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    author
                }
            }
        }
    `);

    return (
        <>
            <div>
                <header className={header}>
                    <h1>{data.site.siteMetadata.title}</h1>
                    <nav className={nav}>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/projects'>Projects</Link>
                    </nav>
                </header>

                <main>
                    {children}
                </main>

                <footer className={footer}>
                    <p>copyright &copy; {new Date().getFullYear()}</p>
                    <p>{data.site.siteMetadata.author}</p>
                </footer>
            </div>
        </>
    )
}
