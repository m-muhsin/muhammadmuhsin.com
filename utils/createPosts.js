const { PostTemplateFragment } = require('../src/templates/posts/data')
const postTemplate = require.resolve('../src/templates/posts/single')
const blogTemplate = require.resolve('../src/templates/posts/archive')
const chunk = require(`lodash/chunk`)

module.exports = async ({ actions, graphql }) => {
  const {
    data: {
      allWpPost: { nodes: postNodes },
    },
  } = await graphql(`
    query ALL_POST_NODES {
      allWpPost {
        nodes {
          # This is the fragment used for the Post Template
          ...PostTemplateFragment
        }
      }
    }
    # Here we make use of the imported fragments which are referenced above
    ${PostTemplateFragment}
  `)

  await Promise.all(
    postNodes.map(async (node, index) => {
      const { slug, id, databaseId, relatedPosts } = node

      await actions.createPage({
        component: postTemplate,
        path: `blog/${slug}`,
        context: {
          id,
          ...node,
          databaseId,
          relatedPosts: [...relatedPosts],
          prev: postNodes[index + 1],
          next: postNodes[index - 1],
        },
      })
    })
  )

  const perPage = 10
  const chunkedpostNodes = chunk(postNodes, perPage)

  await Promise.all(
    chunkedpostNodes.map(async (nodesChunk, index) => {
      const firstNode = nodesChunk[0]
      const page = index + 1
      const offset = perPage * index
      const nodeIds = postNodes.map((node) => node.databaseId)

      await actions.createPage({
        component: blogTemplate,
        path: page === 1 ? `/blog/` : `/blog/${page}/`,
        context: {
          ids: nodeIds,
          firstId: firstNode.id,
          page: page,
          offset: offset,
          totalPages: chunkedpostNodes.length,
          perPage,
          nodes: postNodes,
        },
      })
    })
  )
}
