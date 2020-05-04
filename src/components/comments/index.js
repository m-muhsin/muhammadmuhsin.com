import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const APOLLO_QUERY = gql`
  query CommentsQuery($id: ID!) {
    post(id: $id) {
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
            }
          }
        }
      }
    }
  }
`

const Comments = ({ id }) => {
  const submitCommentForm = (e) => {
    console.log('event', e)
    console.log('formText', formText)
    e.preventDefault()
  }

  const [formText, setFormText] = useState(``)

  const handleFormTextChange = (event) => {
    setFormText(event.target.value)
  }

  const { loading, error, data } = useQuery(APOLLO_QUERY, {
    variables: { id },
  })

  return (
    <div className="entry-content">
      <h2>Comments</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: ${error.message}</p>}
      {data?.post?.comments?.nodes?.length ? (
        <div>
          {data.post.comments.nodes.map((comment) => (
            <div key={comment.commentId}>
              <h4 className="comment-autor">{comment?.author?.name}</h4>
              <p dangerouslySetInnerHTML={{ __html: comment?.content }} />
              {comment?.children?.nodes?.map((childComment) => (
                <div key={childComment.commentId}>
                  <h4 className="comment-autor">
                    {childComment?.author?.name}
                  </h4>
                  <p
                    dangerouslySetInnerHTML={{ __html: childComment?.content }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <h5>This post does not have any comments</h5>
      )}
      <hr className="styled-separator" />
      <h2>Leave a Reply</h2>
      <form
        onSubmit={(e) => submitCommentForm(e)}
        id="commentform"
        className="section-inner thin max-percentage"
      >
        <p className="comment-form-comment">
          <label htmlFor="comment">Comment</label>
          <textarea
            onChange={handleFormTextChange}
            id="comment"
            name="comment"
            cols="45"
            rows="8"
            maxLength="65525"
            required="required"
            spellCheck="false"
          ></textarea>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  )
}

export default Comments
