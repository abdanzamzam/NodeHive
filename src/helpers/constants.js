const onDelete = {
  PUBLISHED: 0,
  DELETED: 1,
  PERMANENT: 2
}

const HTTPStatusCode = {
  200: 'OK',
  400: 'BAD_REQUEST',
  404: 'NOT_FOUND',
  500: 'INTERNAL_SERVER_ERROR',
  401: 'UNAUTHORIZED',
  403: 'VALIDATION_ERROR'
}

module.exports = {
  onDelete,
  HTTPStatusCode
}
