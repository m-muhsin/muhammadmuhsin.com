// const pageQuery = `{
//     pages: allMarkdownRemark(
//       filter: {
//         fileAbsolutePath: { regex: "/pages/" },
//         frontmatter: {purpose: {eq: "page"}}
//       }
//     ) {
//       edges {
//         node {
//           objectID: id
//           frontmatter {
//             title
//             slug
//           }
//           excerpt(pruneLength: 5000)
//         }
//       }
//     }
//   }`

//   const postQuery = `{
//     posts: allMarkdownRemark(
//       filter: { fileAbsolutePath: { regex: "/posts/" } }
//     ) {
//       edges {
//         node {
//           objectID: id
//           frontmatter {
//             title
//             slug
//             date(formatString: "MMM D, YYYY")
//             tags
//           }
//           excerpt(pruneLength: 5000)
//         }
//       }
//     }
//   }`

const postQuery = `{
    posts: wpgraphql {
        # Ask for posts
        posts{
            edges {
                node {
                    objectID: id
                    uri
                    postId
                    title
                    excerpt
                    content
                    uri
                    date
                }
            }
        }
    }
  }`

const flatten = arr => {
    console.log('arr',arr)
    return arr.map(({ node: { frontmatter, ...rest } }) => ({
        ...frontmatter,
        ...rest,
    }))
}
const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
    {
        query: postQuery,
        transformer: ({ data }) => flatten(data),
        indexName: `mtwoblog.com`,
        settings,
    },
]
console.log('queries', queries)
module.exports = queries