import { 
  Container,
  BoxSemaforo,
  Circle 
} from './AppStyle';

function App() {
  return (
    <Container>
      <BoxSemaforo>
        <Circle active={true} color='#75C46B' />
        <Circle active={false} color='#FECA54' />
        <Circle active={false} color='#E74C3C' />
      </BoxSemaforo>
    </Container>
  );
}

export default App;
