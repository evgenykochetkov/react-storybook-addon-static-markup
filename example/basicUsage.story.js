import React from 'react';
import { storiesOf } from '@kadira/storybook';

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
