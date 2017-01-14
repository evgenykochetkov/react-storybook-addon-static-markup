import { configure, setAddon } from '@kadira/storybook'

import staticMarkup from '../src/'

setAddon(staticMarkup) // to use addWithStaticMarkup method

const req = require.context('../example', true, /.story.js$/)

configure(() => {
  req.keys().forEach((filename) => req(filename))
}, module)
