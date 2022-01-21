const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("./src/templates/blog-post.js")

  const result = await graphql(`
    query MDXQuery {
      allMdx {
        nodes {
          frontmatter {
            name
            author
            date
          }
          slug
          body
        }
      }
    }
  `);
  // fetching data using graphql from blogs folder using gatsby-source-filesystem & then transforming raw data into Markdowns using gatsby-plugin-mdx. Finally creating pages using createPage!
  result.data.allMdx.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.slug}`,
      component: blogPostTemplate,
      context: {
        body: node.body,
        frontmatter: node.frontmatter,
      },
      defer: true
    })
  });

  const userList = await graphql(`
    query {
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
  `);

  // fetching data using graphql from json file using gatsby-source-filesystem & then transforming to parse json data using gatsby-transformer-json
  userList.data.allDataJson.nodes[0].user.forEach(user => {
    createPage({
      path: `/users/${user.id}`,
      component: path.resolve("./src/templates/user-page.js"),
      context: {
        id: user.id,
        name: user.name,
        email: user.email,
        surname: user.surname
      },
      defer: true
    })
  });
}
