const { PageTemplateFragment } = require('../src/templates/page/data')
const pageTemplate = require.resolve('../src/templates/page/index')

const GET_PAGES = `
  query GET_PAGES {
    allWpPage {
        nodes {
            slug
            # This is the fragment used for the pages Template
            ...PageTemplateFragment
        }
    }
  }
  # Here we make use of the imported fragments which are referenced above
  ${PageTemplateFragment}
`

/**
 * Array to store allpagess. We make paginated requests
 * to WordPress to get allpagess, and once we have all pages,
 * then we iterate over them to create pages.
 *
 * @type {Array}
 */
const allPages = []

/**
 * We track the page number so we can output the page number to the console.
 *
 * @type {number}
 */
// let pageNumber = 0

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

  /**
   * Fetch pages method.
   *
   * @returns {Promise<*>}
   */
  const fetchPages = async () => {
    /**
     * Fetch pages using the GET_PAGES query.
     */
    return await graphql(GET_PAGES).then(({ data }) => {
      /**
       * Extract the data from the GraphQL query results
       */
      const {
        allWpPage: {
          nodes,
        },
      } = data

      /**
       * Map over the pages for later creation
       */
      nodes &&
        nodes.map(pages => {
          allPages.push(pages)
        })

      /**
       * Once we're done, return all the pages
       * so we can create the necessary pages with
       * all the data on hand.
       */
      return allPages
    })
  }

  /**
   * Kick off our `fetchPages` method which will get us all
   * the pages we need to create individual pages.
   */
  await fetchPages({ first: 10, after: null }).then(allPages => {
    /**
     * Map over the allPages array to create the
     * single pages
     */
    allPages &&
      allPages.map(page => {        
        if(page.slug === 'blog') {
          console.log(`Skipping the "blog" page. It will be generated by the createPosts file.`)
        } else {
          createPage({
            path: `/${page.slug}/`,
            component: pageTemplate,
            context: page,
          })
        }
      })
  })
}
