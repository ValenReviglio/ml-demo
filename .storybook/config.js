const { configure } = require('@storybook/react');

// automatically import all files ending in *.stories.js
const req = require.context('../packages', true, /^((?!node_modules).)*\.story\.js$/);

// require('./commons.scss');

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
