const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query GET_POSTS {
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
        nodes {
          title
          publishedAt(formatString:"DD, MMMM YYYY")
          _rawBody
          slug {
            current
          }
          mainImage {
            asset {
              url
            }
          }
          author {
            name
            image {
              asset {
                url
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.log(result.errors)
  }

  const blogs = result.data.allSanityPost.nodes;

  blogs.forEach(node => {
    createPage({
      path: `/${node.slug.current}`,
      component: path.resolve("./src/templates/blog.js"),
      context: node,
      defer: true,
    })
  });
}
