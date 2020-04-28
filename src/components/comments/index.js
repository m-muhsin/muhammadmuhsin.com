import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const APOLLO_QUERY = gql`
  {
    post(id: "cG9zdDo1Njc=") {
      databaseId
      title
      comments {
        nodes {
          commentId
          author {
            ... on CommentAuthor {
              id
              email
              name
              url
            }
            ... on User {
              id
              email
              name
            }
          }
          content
          date
          children {
            nodes {
              id
              content
              author {
                ... on CommentAuthor {
                  id
                  email
                  name
                  url
                }
                ... on User {
                  id
                  email
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`

export default () => {
  const { loading, error, data } = useQuery(APOLLO_QUERY)

  return (
    <div className="entry-content">
      <h2>Comments</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: ${error.message}</p>}
      {data?.post?.comments?.nodes?.length && (
        <div key="">
          {data.post.comments.nodes.map((comment) => (
            <div key={comment.commentId}>
              <h4 className="comment-autor">{comment?.author?.name}</h4>
              <p dangerouslySetInnerHTML={{ __html: comment?.content }} />
              {comment.children?.nodes?.map((childComment) => (
                <div key={childComment.commentId}>
                  <h4 className="comment-autor">{childComment?.author?.name}</h4>
                  <p
                    dangerouslySetInnerHTML={{ __html: childComment?.content }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
