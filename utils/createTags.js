const { PostTemplateFragment } = require("../src/templates/posts/data")
const tagTemplate = require.resolve("../src/templates/tags/archive")

module.exports = async ({ actions, graphql }) => {
  const GET_TAGS = `
    query GET_TAGS($first: Int $after: String) {
      wpgraphql { 
        tags(first: $first after: $after) {
          pageInfo {
            hasNextPage
            endCursor
          }
          nodes {
            id
            name
            tagId
            slug
            posts {
              nodes {
                ...PostTemplateFragment
              }
            }
          }
        }
      }
    }
    ${PostTemplateFragment}
  `
  const { createPage } = actions
  const allTags = []
  const fetchTags = async variables =>
    await graphql(GET_TAGS, variables).then(({ data }) => {
      const {
        wpgraphql: {
          tags: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data
      nodes.map(tag => {
        allTags.push(tag)
      })
      if (hasNextPage) {
        return fetchTags({ first: 100, after: endCursor })
      }
      return allTags
    })

  await fetchTags({ first: 100, after: null }).then(allTags => {
    allTags.map(tag => {
      createPage({
        path: `/blog/tag/${tag.slug}`,
        component: tagTemplate,
        context: {
          ...tag,
        },
      })
    })
  })
}
