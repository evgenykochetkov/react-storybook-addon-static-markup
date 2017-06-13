[![npm version](https://badge.fury.io/js/react-storybook-addon-static-markup.svg)](https://badge.fury.io/js/react-storybook-addon-static-markup)

# Static Markup addon for [React Storybook](https://github.com/storybooks/react-storybook)

Displays a panel with an "html version" of a story, as suggested in [this](https://github.com/storybooks/react-storybook/issues/617) thread.

### [Live demo](https://evgenykochetkov.github.io/react-storybook-addon-static-markup/)

## Installation

Install the package:

```sh
npm i -D react-storybook-addon-static-markup
```

Then set the addon in your `.storybook/config.js`:

```js
import { configure, setAddon } from '@storybook/react'

import staticMarkup from 'react-storybook-addon-static-markup'

setAddon(staticMarkup)

configure(() => {
  // ...
}, module)
```

...and register it in your `.storybook/addons.js`:
```js
import 'react-storybook-addon-static-markup/register';
```


## Usage

```js
import React from 'react';
import { storiesOf } from '@storybook/react';

import { ShowStaticMarkup } from '../src'

storiesOf('Usage examples', module)
  .add(
    'with HOC',
    () => (
      <ShowStaticMarkup>
        <button className="foo bar baz">
          hello!
        </button>
      </ShowStaticMarkup>
    )
  )
  .addWithStaticMarkup(
    'with a "shortcut" method',
    () => (
      <div className="foo">
        hello
        <button className="btn primary">
          world!
        </button>
      </div>
    )
  )
```
