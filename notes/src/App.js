import React, { Component } from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import axios from "axios";

import "./App.css";

import SidePane from "./components/SidePane";
import NotesView from "./components/NotesView";
import SingleView from "./components/SingleView";
import CreateNote from "./components/CreateNote";
import EditNote from "./components/EditNote";
import DeleteNote from "./components/DeleteNote";
//Styles================================
const StyledApp = styled.div`
  background-color: #e3e3e3;
  display: flex;
  flex-wrap: nowrap;
  color: #434343;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  h2 {
    font-weight: bold;
    font-size: 24px;
    margin-left: 1px;
    margin-top: 30px;
    width: 70%;
    height: 40px;
  }
`;
//=====================================
const URL = "http://localhost:9000/notes";

class App extends Component {
  state = {
    notes: [],
    newNote: {
      title: "",
      contents: ""
    },
    count: 6
  };

  componentWillMount() {
    axios.get(URL).then(response => {
      this.setState({
        notes: response.data
      });
    });
  }

  handleInput = ({ target }) => {
    this.setState(prevState => ({
      newNote: { ...prevState.newNote, [target.name]: target.value }
    }));
  };

  //addNote does this thing about this

  addNote = event => {
    const { title, contents } = this.state.newNote;
    axios
      .post(URL, {
        title,
        contents
      })
      .then(response => {
        this.setState({
          notes: response.data,
          newNote: {
            title: "",
            contents: ""
          }
        });
      });
  };

  editNote = (newNote, id) => {
    const { title, contents } = newNote;
    axios
      .put(`${URL}/${id}`, { title: title, contents: contents })
      .then(response => response.data);
  };

  deleteNote = id => {
    axios
      .delete(`${URL}/${id}`, this.state.newNote)
      .then(response => response.data);
  };

  render() {
    return (
      <StyledApp>
        <Route path="/" component={SidePane} />
        <Route
          exact
          path="/"
          render={props => <NotesView {...props} notes={this.state.notes} />}
        />
        <Route
          path="/note/:id"
          render={props => <SingleView {...props} notes={this.state.notes} />}
        />
        <Route
          path="/create"
          render={props => (
            <CreateNote
              {...props}
              newNote={this.state.newNote}
              handleInput={this.handleInput}
              addNote={this.addNote}
              notes={this.state.notes}
            />
          )}
        />
        <Route
          path="/edit/:id"
          render={props => (
            <EditNote
              {...props}
              editNote={this.editNote}
              notes={this.state.notes}
            />
          )}
        />
        <Route
          path="/note/:id/delete"
          render={props => (
            <DeleteNote
              {...props}
              deleteNote={this.deleteNote}
              notes={this.state.notes}
            />
          )}
        />
      </StyledApp>
    );
  }
}

export default App;
