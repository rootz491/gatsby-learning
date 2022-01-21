## Goal:   

Fetch all blogs from Sanity CMS and display them here!

---

Gatsby proves plugins for everything, headless cms is no different. so i used `[gatsby-source-sanity](https://www.gatsbyjs.com/docs/sourcing-from-sanity)` plugin to interact with [Sanity's Graphql API](https://www.sanity.io/docs/graphql) to retrieve data.

Rest is pretty much similar to the way we used to do it in the past.

* i used `[@sanity/block-content-to-react](https://www.npmjs.com/package/@sanity/block-content-to-react)` to convert blog's [Block Text](https://www.sanity.io/docs/what-you-need-to-know-about-block-text) to react components.