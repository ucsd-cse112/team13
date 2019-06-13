import { configure } from '@storybook/html';
import 'core-js';

// automatically import all files ending in *.stories.js
require('../stories/welcome');
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
