import styled from 'styled-components'

interface Props {
  position?: number
}

export const SetupConfirmationWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  transform: ${(props: Props) =>
    props.position && `translateY(-${props.position}%)`};
  transition: all 0.5s;
`

export const SetupFormHeader = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
`
export const SetupFormContent = styled.div`
  flex: 1;
`

export const SetupFormFooter = styled.div`
  height: 200px;
  display: flex;
  justify-content: space-between;
`
export const Dot = styled.span`
  color: #9a4797;
  &:after {
    content: '•';
  }
`
