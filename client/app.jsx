import React from 'react';
import Home from './pages/home';
import AddStudents from './pages/add-a-student';
import parseRoute from './lib/parse-route';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ route: parseRoute(window.location.hash) });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home />;
    }
    if (route.path === 'addstudent') {
      return <AddStudents />;
    }
  }

  render() {
    return (
      <>
        <Home />
        { this.renderPage()}
      </>
    );
  }
}
