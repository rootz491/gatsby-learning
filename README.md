# gatsby-learning


## References

*   [functions](https://www.gatsbyjs.com/docs/reference/functions/)

    *   Creating API endpoints with Gatsby, very similar to Next.js, i.e. create `/src/api/` folder and create `hello.js` files in it. Then access the API endpoint at route `/api/hello/`.
        Handle request and responses, [read more](https://www.gatsbyjs.com/docs/reference/functions/getting-started/).

    *   [Routing](https://www.gatsbyjs.com/docs/reference/functions/routing/) in Gatsby functions
        1.  static -> `/src/api/hello.js`
        2.  dynamic -> `src/api/users/[id].js`
        3.  splat -> `src/api/files/[...].js`

    *   

*   [Gatsby-node API](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/)

    *   Gatsby-node API is bascically programmatically creating pages over some dynamic content/data.
        This data can be fetched via GraphQL (or Hardcoded)

*   





## imp note

1.  whenever installing `gatsby-plugin-mdx`, use this command:
    ```sh
    npm install gatsby-plugin-mdx @mdx-js/mdx @mdx-js/react
    ```
