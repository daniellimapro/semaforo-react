import { useState } from 'react';

import { 
  Container,
  BoxSemaforo,
  Circle 
} from './AppStyle';

function App() {
  const [semaforo, setSemaforo] = useState(localStorage.getItem('semaforo') || 'siga');

  const handleClick = (handle) => {
    localStorage.setItem('semaforo', handle);
    setSemaforo(handle);
  }

  return (
    <Container>
      <BoxSemaforo>
        <Circle onClick={() => handleClick('siga')} active={semaforo === 'siga' ? true : false} color='#75C46B' />
        <Circle onClick={() => handleClick('aguarde')} active={semaforo === 'aguarde' ? true : false} color='#FECA54' />
        <Circle onClick={() => handleClick('pare')} active={semaforo === 'pare' ? true : false} color='#E74C3C' />
      </BoxSemaforo>
    </Container>
  );
}

export default App;
