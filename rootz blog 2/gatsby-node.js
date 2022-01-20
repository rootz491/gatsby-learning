const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("./src/templates/blog-post.js")

  // const result = await graphql(`
  //   query {
  //     allFile(filter: {extension: {eq: "mdx"}}) {
  //       nodes {
  //         name
  //       }
  //     }
  //   }
  // `);

  //   result.data.allFile.nodes.forEach(node => {
  //     createPage({
  //       path: `/blog/${node.name}`,
  //       component: blogPostTemplate,
  //       context: {
  //         name: node.name
  //       },
  //       defer: true
  //     })
  //   })
}
