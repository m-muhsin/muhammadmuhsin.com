const PostTemplateFragment = `
    fragment PostTemplateFragment on Post { 
      id
      postId
      title
      content
      uri
      date
      excerpt
      author {
          name
          avatar(size:50) {
            url
          }
      }
      categories {
        nodes {
          name
          slug
        }
      }
      tags {
        nodes {
          slug
          name
        }
      }
    }
`

module.exports.PostTemplateFragment = PostTemplateFragment
