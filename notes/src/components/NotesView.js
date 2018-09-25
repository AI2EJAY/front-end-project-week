import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios"

import Note from "./Note";

const StyledNoteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  h2 {
    padding-top: 25px;
  }
`;
URL = "http://localhost:9000/notes";

class NotesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes : []
    };
  }

  componentWillUpdate() {
    axios.get(URL).then(response => {
      this.setState({
        notes: response.data
      });
      console.log(this.state.notes);
    });
  }

  
  componentDidMount() {
    axios.get(URL).then(response => {
      this.setState({
        notes: response.data,
      });
      console.log(this.state.notes);
    });
  }

  render() {
    return (
      <StyledViewWrapper>
        <h2>Your Notes:</h2>
        <StyledNoteContainer>
          {this.state.notes.map(note => (
            <Note
              id={note.id}
              title={note.title}
              body={note.contents}
              tags={note.tags}
            />
          ))}
        </StyledNoteContainer>
      </StyledViewWrapper>
    );
  }
}

export default NotesView;
