import styled from 'styled-components'

interface Props {
  position?: number
}

export const SetupExposuresWrapper = styled.div`
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
  padding: 0px 40px;
  @media (max-width: 768px) {
    padding: 0px;
  }
`

export const SetupFormFooter = styled.div`
  height: 200px;
  display: flex;
  justify-content: space-between;
`

export const InputExposures = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 20px;
  margin-right: 5px;
  border: 2px solid #9a4797;
  :checked {
    background: #9a4797;
  }
`
export const InputWrapper = styled.div`
  display: flex;
  margin: 10px 0px;
`
