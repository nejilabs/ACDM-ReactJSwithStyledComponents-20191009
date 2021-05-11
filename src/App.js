// START: IMPORTS
import React from 'react'
import styled from 'styled-components'

// Start: Import Components
import UserSummary from './components/UserSummary'
// End: Import Components
// END: IMPORTS


// Start: Styled Components
const StyledDiv = styled.div`
  width:90%;
  max-width:40rem;
  margin: 2rem auto;
  border:1px solid #ccc;
  padding:1rem;
  
`
// End: Styled Components


// Start: Template
const App = () => {
  return (
    <StyledDiv>
      <UserSummary />
    </StyledDiv>
  )
}
// End: Template


export default App
