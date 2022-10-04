import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ABbutton, ABInput, AbInputQuant, ABOptionGroup, ABTag, ButtonDanger, ButtonSuccess, Card } from '../.';

import 'react-app-polyfill/ie11';

const App = () => {
  const [valueInput, setValueInput] = React.useState<string>('')
  return (
    <div>
      <br /><br />

      <br /><br />
      <p>success - solid - small</p>
      <ButtonSuccess label='custom text' size='small' variant='solid' />
      <br /><br />
      <p>success - solid - medium</p>
      <ButtonSuccess label='custom text' size='medium' variant='solid' />
      <br /><br />
      <p>success - solid - large</p>
      <ButtonSuccess label='custom text' size='large' variant='solid' />
      <br /><br />
      
      <br /><br />
      <p>success - outlined - small</p>
      <ButtonSuccess label='custom text' size='small' variant='outlined' />
      <br /><br />
      <p>success - outlined - medium</p>
      <ButtonSuccess label='custom text' size='medium' variant='outlined' />
      <br /><br />
      <p>success - outlined - large</p>
      <ButtonSuccess label='custom text' size='large' variant='outlined' />
      <br /><br />

      
      <br /><br />
      <p>danger - solid - small</p>
      <ButtonDanger label='custom text' size='small' variant='solid' />
      <br /><br />
      <p>danger - solid - medium</p>
      <ButtonDanger label='custom text' size='medium' variant='solid' />
      <br /><br />
      <p>danger - solid - large</p>
      <ButtonDanger label='custom text' size='large' variant='solid' />
      <br /><br />

      
      <br /><br />
      <p>danger - outlined - small</p>
      <ButtonDanger label='custom text' size='small' variant='outlined' />
      <br /><br />
      <p>danger - outlined - medium</p>
      <ButtonDanger label='custom text' size='medium' variant='outlined' />
      <br /><br />
      <p>danger - outlined - large</p>
      <ButtonDanger label='custom text' size='large' variant='outlined' />
      <br /><br />
      
      <br />
      <p>ABbutton primary small</p>
        <ABbutton color='Primary' text='custom text' size='small' />
        <br /><br />
        <p>ABbutton secundário small</p>
        <ABbutton color='Secondary' text='custom text' size='small' />
        <br /><br />
        <p>ABbutton secundário large</p>
        <ABbutton color='Secondary' text='custom text' size='large' />
        <br /><br />
        <p>ABbutton primary large</p>
        <ABbutton color='Primary' text='custom text' size='large' />
        <br /><br /><br />
      <Card>This is Card Component</Card>
      <br /><br />
        <ABTag texto='TagAção' /><br /><br />
        <ABTag texto='TagRomance' /><br /><br />
        <ABTag texto='TagFicção' />
      <br /><br />
      <AbInputQuant onChange={() => {}} />
      <br /><br/><br />
      <ABInput value={valueInput} label="Uma label interessante" onChange={(value) => {setValueInput(value)}}/>
      <br /><br />

      <ABOptionGroup
        options={[
          {
            body: 'custom body',
            footer: 'custom description/footer',
            id: 1,
            title: 'custom title'
          },
          {
            body: 'custom body',
            footer: 'custom description/footer',
            id: 2,
            title: ' Imcustom title'
          },
          {
            body: 'custom body',
            footer: 'custom description/footer',
            id: 3,
            title: 'E-book + Imcustom title'
          }
        ]}
        valueDefault={{
          body: 'custom body',
          footer: 'custom description/footer',
          id: 1,
          title: 'custom title'
        }}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
