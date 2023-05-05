const {fileURLToPath} = require('url';
const { dirname } = require('path';

const __filename = fileURLToPath(const.meta.url);
const __dirname = dirname(__filename);

export default __dirname;