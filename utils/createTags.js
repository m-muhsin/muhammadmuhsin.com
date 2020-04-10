const { PostTemplateFragment } = require("../src/templates/posts/data")
const tagTemplate = require.resolve("../src/templates/tags/archive")

module.exports = async ({ actions, graphql }) => {
  const GET_TAGS = `
    query GET_TAGS {
      allWpTag {
        nodes {
          id
          name
          databaseId
          slug
          posts {
            nodes {
              ...PostTemplateFragment
            }
          }
        }
      }
    }
    ${PostTemplateFragment}
  `
  const { createPage } = actions
  const allTags = []
  const fetchTags = async () =>
    await graphql(GET_TAGS).then(({ data }) => {
      const {
        allWpTag: {
          nodes,
        },
      } = data
      nodes.map(tag => {
        allTags.push(tag)
      })

      return allTags
    })

  await fetchTags().then(allTags => {
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
