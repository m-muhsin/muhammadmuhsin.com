const { PostTemplateFragment } = require('../src/templates/posts/data')
const postTemplate = require.resolve('../src/templates/posts/single')
const blogTemplate = require.resolve('../src/templates/posts/archive')

const GET_POSTS = `
  # Define our query variables
  query GET_POSTS {
      allWpPost {
        nodes {              
            # This is the fragment used for the Post Template
            ...PostTemplateFragment
        }
      }
  }
  # Here we make use of the imported fragments which are referenced above
  ${PostTemplateFragment}
`

/**
 * Array to store allPosts. We make paginated requests
 * to WordPress to get allPosts, and once we have all posts,
 * then we iterate over them to create pages.
 *
 * @type {Array}
 */
const allPosts = []

/**
 * Here we store an array of blogPages. For each xx amount of posts
 * we want to create a blogPage so users can browse
 * chunks of data at a time, much like a traditional
 * WordPress paginated archive page.
 *
 * @type {Array}
 */
const blogPages = []

/**
 * This is the export which Gatbsy will use to process.
 *
 * @param { actions, graphql }
 * @returns {Promise<void>}
 */
module.exports = async ({ actions, graphql }) => {
  /**
   * This is the method from Gatsby that we're going
   * to use to create pages in our static site.
   */
  const { createPage } = actions

  const fetchPosts = async () => {
    /**
     * Fetch posts using the GET_POSTS query and the variables passed in.
     */
    return await graphql(GET_POSTS).then(({ data }) => {
      /**
       * Extract the data from the GraphQL query results
       */
      const {
        allWpPost: {
          nodes
        },
      } = data

      /**
       * Define the path for the paginated blog page.
       * This is the url the page will live at
       * @type {string}
       */
      const blogPagePath = `/blog`;

      /**
       * The IDs of the posts which were got from GraphQL.
       */
      const nodeIds = nodes.map(node => node.databaseId)

      /**
       * Add config for the blogPage to the blogPage array
       * for creating later
       *
       * @type {{path: string, component: string, context: {nodes: *}}}
       */
      blogPage = {
        path: blogPagePath,
        component: blogTemplate,
        context: {
          ids: nodeIds,
          nodes,
        },
      }

      /**
       * Map over the posts for later creation
       */
      nodes &&
        nodes.map(post => {
          allPosts.push(post)
        })

      /**
       * Once we're done, return all the posts
       * so we can create the necessary pages with
       * all the data on hand.
       */
      return allPosts
    })
  }

  /**
   * Kick off our `fetchPosts` method which will get us all
   * the posts we need to create individual post pages
   * and paginated blogroll archive pages.
   */
  await fetchPosts().then(allPosts => {
    /**
     * Map over the allPosts array to create the
     * single-post pages
     */
    allPosts &&
      allPosts.map((post, index) => {
        createPage({
          path: `/blog/${post.slug}/`,
          component: postTemplate,
          context: {
            ...post,
            relatedPosts: [...post.relatedPosts],
            prev: allPosts[index + 1],
            next: allPosts[index - 1],
          },
        })
      })

    /**
     * Map over the `blogPages` array to create the
     * paginated blogroll pages
     */
    blogPage && createPage(blogPage)
  })
}