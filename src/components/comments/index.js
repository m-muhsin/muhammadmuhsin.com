import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import moment from 'moment/moment'

const ADD_COMMENT = gql`
  mutation ADD_COMMENT(
    $content: String!
    $commentOn: Int!
    $commentAuthorName: String
    $commentAuthorWebsite: String
  ) {
    createComment(
      input: {
        content: $content
        commentOn: $commentOn
        author: $commentAuthorName
        authorUrl: $commentAuthorWebsite
        clientMutationId: "234"
      }
    ) {
      comment {
        content
      }
    }
  }
`

const COMMENT_QUERY = gql`
  query CommentsQuery($id: ID!) {
    post(id: $id) {
      databaseId
      title
      comments {
        nodes {
          id
          commentId
          date
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
          children {
            nodes {
              id
              commentId
              date
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

const Comments = ({ id, databaseId }) => {
  const [addComment] = useMutation(ADD_COMMENT)
  // const [addComment, { data: postedData }] = useMutation(ADD_COMMENT)

  const submitCommentForm = (e) => {
    e.preventDefault()
    addComment({
      variables: {
        content: commentContent,
        commentOn: databaseId,
        commentAuthorName,
        commentAuthorEmail,
        commentAuthorWebsite,
      },
    })
    setShowThanks(true)
    setCommentContent(``)
    setCommentAuthorName(``)
    setCommentAuthorEmail(``)
    setCommentAuthorWebsite(``)
  }

  const [commentContent, setCommentContent] = useState(``)
  const [commentAuthorName, setCommentAuthorName] = useState(``)
  const [commentAuthorEmail, setCommentAuthorEmail] = useState(``)
  const [commentAuthorWebsite, setCommentAuthorWebsite] = useState(``)
  const [showThanks, setShowThanks] = useState(false)

  const { loading, error, data: queriedData } = useQuery(COMMENT_QUERY, {
    variables: { id },
  })

  return (
    <div className="entry-content">
      <h2>Comments</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: ${error.message}</p>}
      {queriedData?.post?.comments?.nodes?.length ? (
        <div>
          {queriedData.post.comments.nodes.map((comment) => {

            const formatted = `${moment(comment.date).format(
              'MMMM Do YYYY'
            )} at ${moment(comment.date).format('h:mm:ss a')}`

            return (
              <div key={comment.commentId}>
                {comment?.author?.url ? (
                  <a href={comment.author.url}>
                    <h3 className="comment-autor">{comment?.author?.name}</h3>
                  </a>
                ) : (
                  <h3 className="comment-autor">{comment?.author?.name}</h3>
                )}
                <div className="comment-metadata">
                  <time className="comment-datetime">{formatted}</time>
                </div>
                <p dangerouslySetInnerHTML={{ __html: comment?.content }} />
                {comment?.children?.nodes?.map((childComment) => (
                  <div key={childComment.commentId}>
                    <h4 className="comment-autor">
                      {childComment?.author?.name}
                    </h4>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: childComment?.content,
                      }}
                    />
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      ) : (
        <h5>This post does not have any comments</h5>
      )}
      <hr className="styled-separator" />
      <div className="comment-respond">
        <h2>Leave a Reply</h2>
        <form
          onSubmit={(e) => submitCommentForm(e)}
          id="commentform"
          className="section-inner thin max-percentage"
        >
          <p className="comment-form-comment">
            <label htmlFor="comment">Comment</label>
            <textarea
              onInput={(event) => setCommentContent(event.target.value)}
              id="comment"
              name="comment"
              cols="45"
              rows="8"
              maxLength="65525"
              required="required"
              spellCheck="false"
            ></textarea>
          </p>
          <p className="comment-form-author">
            <label htmlFor="author">
              Name <span className="required">*</span>
            </label>{' '}
            <input
              onInput={(event) => setCommentAuthorName(event.target.value)}
              id="author"
              name="author"
              type="text"
              size="30"
              maxLength="245"
              required="required"
            />
          </p>
          <p className="comment-form-email">
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>{' '}
            <input
              onInput={(event) => setCommentAuthorEmail(event.target.value)}
              id="email"
              name="email"
              type="email"
              size="30"
              maxLength="100"
              aria-describedby="email-notes"
              required="required"
            />
          </p>
          <p className="comment-form-url">
            <label htmlFor="url">Website</label>{' '}
            <input
              onInput={(event) => setCommentAuthorWebsite(event.target.value)}
              id="url"
              name="url"
              type="url"
              size="30"
              maxLength="200"
            />
          </p>
          <h4 style={{ display: showThanks ? 'block' : 'none' }}>
            Thanks for commenting!
          </h4>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Comments
