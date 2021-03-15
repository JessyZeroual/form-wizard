import styled from 'styled-components'

interface Props {
  position?: number
}

export const SetupSurfaceWrapper = styled.div`
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
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
  @media (max-width: 768px) {
    padding: 0px;
  }
`
export const SetupFormFooter = styled.div`
  height: 200px;
  display: flex;
  justify-content: space-between;
`

export const InputSurface = styled.input`
  width: 90%;
  height: 20px;
  margin: 20px;
  -webkit-appearance: none;
  background: white;
  outline: none;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 1);
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #9a4797;
    cursor: pointer;
    border: 4px solid black;
    box-shadow: -807px 0 0 800px #9a4797;
  }
`
