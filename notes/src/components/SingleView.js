import React from 'react';
import styled from 'styled-components';

import Note from './Note'

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
}
`;

const SingleView = (props) => {
    const note = props.notes.find(note => note.id.toString() === props.match.params.id) 
    return ( 
        // I THINK I NEED A FILTER IN ORDER TO GET THE DATA
        // OF THE NOTE THAT IS AT A SPECIFIC ROUTE

        <StyledViewWrapper>
        <StyledNoteContainer>

        <h2>{note.title}</h2>
        {/* <h5>{note.tags}</h5> */}
        <p>{note.body}</p>
        </StyledNoteContainer>
      </StyledViewWrapper>

     );
}
 
export default SingleView;