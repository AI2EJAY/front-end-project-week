import React from "react";
import styled from "styled-components";

const NoteContainer = styled.div`
  width: 170px;
  height: 200px;
  /* border: 1px solid #5EB3BB; */
  border-left: 3px solid #5eb3bb;
  border-bottom: 2px solid #5eb3bb;
  overflow: hidden;
  display: flex;
  align-content: flex-end;
  flex-direction: column;
  margin: 12px 10px;
  padding: 10px;
  box-sizing: border-box;
  background-color: white;
  h3 {
    border-bottom: 1px solid lightgrey;
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 10px;
  }
  p {
    line-height: 2;
    overflow: hidden;
    font-size: 14px;
  }
`;

const Note = props => {
  return (
    <NoteContainer>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </NoteContainer>
  );
};

export default Note;
