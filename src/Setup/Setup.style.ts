import styled from 'styled-components'

export const SetupContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
export const SetupTopBar = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0px 40px;
`
export const SetupForm = styled.form`
  width: 60%;
  padding: 0px 40px;
  flex: 1;
  margin: auto;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 90%;
  }
`
