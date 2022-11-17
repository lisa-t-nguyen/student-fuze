import React from 'react';
import Home from './pages/home';
import AddStudents from './pages/add-a-student';
import Demographics from './pages/demographics';
import Attendance from './pages/attendance';
import Grades from './pages/grades';
import Notes from './pages/notes';
import Referrals from './pages/referrals';
import Supports from './pages/supports';
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
    if (route.path === 'demographics') {
      return <Demographics/>;
    }
    if (route.path === 'attendance') {
      return <Attendance />;
    }
    if (route.path === 'grades') {
      return <Grades />;
    }
    if (route.path === 'notes') {
      return <Notes/>;
    }
    if (route.path === 'referrals') {
      return <Referrals />;
    }
    if (route.path === 'supports') {
      return <Supports />;
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
