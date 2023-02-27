const { globalErrorHandler } = require('./global-error-handler.middleware');
const { validateBody } = require('./validate-body.middleware');
const {authUser} = require('./auth-user.middlewre')

module.exports = {
  globalErrorHandler,
  validateBody,
  authUser,
};
