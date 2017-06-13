import React from 'react';
import addons from '@storybook/addons';

const styles = {
  markupPanel: {
    margin: 10,
    fontFamily: 'monospace',
    whiteSpace: 'pre',
    fontSize: 14,
    color: '#444',
    width: '100%',
    overflow: 'auto',
  }
};

class StaticMarkup extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      markup: ''
    };

    this.onShowStaticMarkup = this.onShowStaticMarkup.bind(this);
  }

  onShowStaticMarkup(markup) {
    this.setState({markup});
  }

  componentDidMount() {
    const { channel, api } = this.props;
    channel.on('evgenykochetkov/static-markup/show-markup', this.onShowStaticMarkup);

    // Clear the current state on every story change.
    this.stopListeningOnStory = api.onStory(() => {
      this.onShowStaticMarkup('');
    });
  }

  render() {
    const { markup } = this.state;

    return (
      <div style={styles.markupPanel}>
        { markup }
      </div>
    );
  }

  // This is some cleanup tasks when the StaticMarkup panel is unmounting.
  componentWillUnmount() {
    if(this.stopListeningOnStory) {
      this.stopListeningOnStory();
    }

    this.unmounted = true;
    const { channel, api } = this.props;
    channel.removeListener('evgenykochetkov/static-markup/show-markup', this.onShowStaticMarkup);
  }
}

// Register the addon with a unique name.
addons.register('evgenykochetkov/static-markup', (api) => {
  // Also need to set a unique name to the panel.
  addons.addPanel('evgenykochetkov/static-markup/panel', {
    title: 'Static Markup',
    render: () => (
      <StaticMarkup channel={addons.getChannel()} api={api}/>
    ),
  })
})
