const renovate = require('renovate');

(async () => {
  try {
    process.env.RENOVATE_CONFIG_FILE = './renovate-config.js';
    await renovate();
    console.log('✅ Renovate completed successfully');
  } catch (err) {
    console.error('❌ Renovate failed:', err);
    process.exit(1);
  }
})();
