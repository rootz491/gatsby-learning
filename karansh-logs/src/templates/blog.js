import * as React from "react";
import { Link } from "gatsby";
import BlockContent from "@sanity/block-content-to-react";
import Layout from "../components/layout"
import Seo from "../components/seo"


const BlogPage = ({ pageContext }) => {
    return (
        <Layout>
            <Seo title={pageContext.title} />
            <h1 style={{ fontSize: "1.75em" }}>{pageContext.title}</h1>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
            }}>
                <p>{pageContext.publishedAt}</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img 
                        style={{ width: "25px", height: "25px", borderRadius: "50%", border: "1px solid black", marginRight: "4px" }} 
                        src={pageContext.author.image.asset.url} 
                        alt={pageContext.author.name} 
                    />
                    <p>{pageContext.author.name}</p>
                </div>
            </div>
            <img
                style={{ width: "100%" }}
                src={pageContext.mainImage.asset.url}
                alt={pageContext.title}
            />
            <BlockContent 
                blocks={pageContext._rawBody} 
                imageOptions={{w: 320, h: 240, fit: 'max'}}
                projectId="frxazqw4"
                dataset="production"
            />
            <Link to="/">Go back to the homepage</Link>
        </Layout>
    )
}

export default BlogPage;
