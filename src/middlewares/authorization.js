/* eslint-disable prefer-promise-reject-errors */
module.exports = (allowedRoles = []) => (ctx, next) =>
  !allowedRoles.includes(ctx.state.user.role)
    // illustration purposes only
    // for production-ready code, use error codes/types and a catalog (maps codes -> responses)
    ? Promise.reject({
      status: 403,
      message: 'Current user does not have permission',
      code: 'FORBIDDEN',
    })
    : next()
