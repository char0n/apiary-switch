import React, { PropTypes } from 'react';

import './Editor.css';
import editor from './editor.png';


class Editor extends React.Component {
  getChildContext() {
    return {
      params: this.props.params,
    };
  }

  componentWillMount() {
    this.props.onApiProjectView(this.props.params.apiProjectName);
  }

  componentWillReceiveProps(nextProps) {
    const hasProjectChanged = this.props.params.apiProjectName !== nextProps.params.apiProjectName;

    if (hasProjectChanged) {
      this.props.onApiProjectView(nextProps.params.apiProjectName);
    }
  }

  render() {
    return (
      <main className="editor">
        <header className="editor__header">
          <h1>{this.props.params.apiProjectName}</h1>
        </header>
        <img src={editor} className="editor__screen" alt="Editor" />
      </main>
    );
  }
}

Editor.propTypes = {
  params: PropTypes.shape().isRequired,
  onApiProjectView: PropTypes.func.isRequired,
};

Editor.childContextTypes = {
  params: PropTypes.shape().isRequired,
};

export default Editor;
