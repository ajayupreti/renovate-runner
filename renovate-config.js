module.exports = {
  platform: 'bitbucket',
  endpoint: 'https://api.bitbucket.org/',
  username: process.env.BITBUCKET_USERNAME,
  password: process.env.BITBUCKET_APP_PASSWORD,
  repositories: ['your-workspace/your-repo'],
  logLevel: 'info',
  onboarding: false,
  requireConfig: false
};
