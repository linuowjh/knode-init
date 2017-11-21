module.exports = app => {
    return async function(ctx, next) {
      ctx.body = 'Hello world';
    }
};