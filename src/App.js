import React, { Component } from 'react';
import Container from './components/Container';

class App extends Component {
  state = {
    infoList: [
      {icon: "folder", name: "build", description: "Close #1687, Replace es3ify with Babel...", time: "2 months ago", id: 1 },
      {icon: "folder", name: "docs", description: "Mention that we we're Observable in the API.", time: "9 hours ago", id: 2 },
      {icon: "folder", name: "examples", description: "Update doc to use test with Enzyme (#1692)", time: "18 days ago", id: 3 },
      {icon: "folder", name: "logo", description: "Use Redux as favicon on GitBook docs (#1761)", time: "2 months ago", id: 4 },
      {icon: "folder", name: "src", description: "Only warn for unexpected key (#1818)", time: "22 days", id: 5 },
      {icon: "folder", name: "test", description: "Only warn for unexpected key (#1818)", time: "22 days", id: 6 },
      {icon: "file", name: ".babelrc", description: "Close #1687, Replace es3ify with Babel...", time: "2 months ago", id: 7 },
      {icon: "file", name: ".editorconfig", description: "editorconfig: do not trim trailing whitespaces in Markdown files", time: "5 months", id: 8 },
      {icon: "file", name: ".eslintignore", description: "Really ignore all node_modules and dist in eslint", time: "4 months ago", id: 9 }
    ]
  }

  render() {
    return (
      <div className="App">
      <Container infoList={this.state.infoList}/>
      </div>
    );
  }
}

export default App;
