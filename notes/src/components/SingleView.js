import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const StyledNoteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-right: 30px;
  h2 {
    padding-top: 25px;
  }
  p {
    margin: 5px;
    max-width: 660px;
    line-height: 1.5;
  }
`;

const NoteOptions = styled.div`
  color: black;
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  margin-right: 80px;
  font-weight: bold;
  .edit {
    margin-right: 20px;
  }
`;

const URL = "http://localhost:9000/notes";

class SingleView extends Component {
  constructor(props) {
    super(props);
    this.state = { note: [] };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(`${URL}/${id}`)
    axios.get(`${URL}/${id}`).then(response => {
      this.setState({
        note: response.data
      });
    });
  }

  render() {
    return (
        <StyledViewWrapper>
          <NoteOptions>
            <Link className="edit noDecoration" to={`/edit/${this.state.note.id}`}>
              Edit
            </Link>
            <Link className="delete noDecoration" to={`/note/${this.state.note.id}/delete`}>
              Delete
            </Link>
          </NoteOptions>

          <StyledNoteContainer>
            <h2>{this.state.note.title}</h2>
            {/* <h5>{note.tags}</h5> */}
            <p>{this.state.note.contents}</p>
          </StyledNoteContainer>
        </StyledViewWrapper>
     
    );
  }
}

export default SingleView;
