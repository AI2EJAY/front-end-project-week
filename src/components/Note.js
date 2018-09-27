import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NoteContainer = styled.div`
  width: 170px;
  height: 200px;
  /* border: 1px solid #5EB3BB; */
  border-left: 3px solid #5eb3bb;
  border-bottom: 2px solid #5eb3bb;
  display: flex;
  flex-direction: column;
  margin: 12px 10px;
  padding: 10px;
  box-sizing: border-box;
  background-color: white;
  border-right: 2px solid grey;
  border-top: 2px solid grey;

  :hover {
    outline: 2.5px solid #d1d0d1;
  }
  h3 {
    border-bottom: 1px solid lightgrey;
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }
  p {
    text-align: center;
    margin-top: 5px;
    line-height: 16.6px;
    max-height: 130px;
    font-size: 14px;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 8; /* number of lines to show */
  }
`;

const Note = props => {
  return (
    <Link className="noDecoration" to={`/note/${props.id}`}>
      <NoteContainer>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
      </NoteContainer>
    </Link>
  );
};

export default Note;
