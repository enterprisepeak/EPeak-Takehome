import joi from 'joi';
import users from '../../../database/users.js';

const searchFieldRoute = {
  method: 'GET',
  path: '/search/{fieldName}',
  handler(request, reply) {
    const { fieldName } = request.params;
    const { like, limit } = request.query;
    return users.search.field(fieldName, like, limit);
  },
  options: {
    validate: {
      params: {
        fieldName: joi.string().allow('first', 'last')
      },
      query: {
        like: joi.string().required(),
        limit: joi.number().optional().default(10)
      }
    }
  }
}

export default searchFieldRoute;