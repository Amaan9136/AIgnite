const sessionOptions = {
  password: process.env.SESSION_SECRET || 'super-secret-password-change-in-production',
  cookieName: 'aignite-admin-session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

export { sessionOptions };
