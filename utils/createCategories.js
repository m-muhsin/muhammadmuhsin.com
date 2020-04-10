const { PostTemplateFragment } = require("../src/templates/posts/data")
const categoryTemplate = require.resolve("../src/templates/categories/archive")

module.exports = async ({ actions, graphql }) => {
  const GET_CATEGORIES = `
    query GET_CATEGORIES {
      allWpCategory {
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
  const allCategories = []
  const fetchCategories = async () =>
    await graphql(GET_CATEGORIES).then(({ data }) => {
      const {
        allWpCategory: {
          nodes,
        },
      } = data
      nodes.map(category => {
        allCategories.push(category)
      })
      return allCategories
    })

  await fetchCategories().then(allCategories => {
    allCategories.map(category => {
      createPage({
        path: `/blog/category/${category.slug}`,
        component: categoryTemplate,
        context: {
          ...category,
        },
      })
    })
  })
}
