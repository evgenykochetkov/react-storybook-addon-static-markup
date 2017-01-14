import React from 'react'
import addons from '@kadira/storybook-addons';

import ReactDOMServer from 'react-dom/server'

export class ShowStaticMarkup extends React.Component {
  render() {
    const { children } = this.props;

    const markup = ReactDOMServer.renderToStaticMarkup(children)

    const channel = addons.getChannel();
    channel.emit('evgenykochetkov/static-markup/show-markup', markup);

    return children;
  }
}

export default {
  addWithStaticMarkup (storyName, story) {
    this.add(storyName, () => (
      <ShowStaticMarkup>
        { story() }
      </ShowStaticMarkup>
    ))
  }
}
