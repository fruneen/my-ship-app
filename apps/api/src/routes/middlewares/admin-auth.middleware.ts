import { AppKoaContext, Next } from 'types';

import adminAuth from './middlewares/admin-auth.middleware';

import config from 'config';

const adminAuth = (ctx: AppKoaContext, next: Next) => {
  const adminKey = ctx.header['x-admin-key'];

  if (config.ADMIN_KEY && config.ADMIN_KEY === adminKey) {
    return next();
  }

  ctx.status = 401;

  return null;
};

export default adminAuth;
