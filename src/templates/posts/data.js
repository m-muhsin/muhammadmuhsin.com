const PostTemplateFragment = `
  fragment PostTemplateFragment on WPGraphQL_Post {
    id
    postId
    title
    excerpt
    content
    uri
    date
    categories {
      nodes {
        name
        slug
      }
    }
    tags {
      nodes {
        name
        slug
      }
    }
    featuredImage {
      altText
      uri
      sourceUrl
    }
    author {
      name
      slug
      avatar(size: 50) {
        url
      }
    }
  }
`
module.exports.PostTemplateFragment = PostTemplateFragment
