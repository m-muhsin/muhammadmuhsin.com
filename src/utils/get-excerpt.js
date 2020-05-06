import stripHTML from './strip-html'

export default function getExcerpt(excerpt, content, stripTags = false) {
  // maximum number of characters to extract
  const maxLength = 240

  // getting the excerpt to a variable
  let excerptText = excerpt

  // if excerpt does not exist
  if (!excerptText) {
    // getting the first 240 characters off content
    excerptText = content.substr(0, maxLength)

    // so that a word is not chopped off halfway
    excerptText = content
      .substr(0, Math.min(excerptText.length, excerptText.lastIndexOf(' ')))
      .concat('...')
  }

  return stripTags ? stripHTML(excerptText) : excerptText
}
