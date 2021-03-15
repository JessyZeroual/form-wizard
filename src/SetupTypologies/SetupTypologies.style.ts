import styled from 'styled-components'

interface Props {
  position?: number
  current?: boolean
}

export const SetupTypologiesWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  transform: ${(props: Props) =>
    props.position && `translateY(-${props.position}%)`};
  transition: transform 0.5s;
`

export const SetupFormHeader = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
`
export const SetupFormContent = styled.div`
  flex: 1;
  padding: 0px 60px;
`

export const SetupFormFooter = styled.div`
  height: 200px;
  display: flex;
  justify-content: space-between;
`

export const TypologyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  overflow: auto;
  max-height: calc(100vh - 280px);
  @media (max-width: 1360px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const TypologyItem = styled.div`
  aspect-ratio: 1 / 1;
  cursor: pointer;
  margin-bottom: 20px;
  margin-left: 20px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #9a4797;
  background-color: ${(props: Props) => (props.current ? `#9a4797` : `white`)};
`
