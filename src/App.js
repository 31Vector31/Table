import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React, {useState} from 'react'



function App() {

    const [width,set_width] = useState(Array(5).fill(<th><input type="text" size="1"/></th>));

    return (
        <div className="App">

            <form name="test">

                <input id="Width" type="text" size="10"/>
                <input type="text" size="10"/>


                <input type="submit" onClick={
                    () => {
                        /*alert(document.getElementById('Width').value+".");*/
                        set_width(Array(document.getElementById('Width').value).fill(<th><input type="text" size="1"/>
                        </th>));


                    }
                } value="Го"/>

            </form>


            {/*<form>
  <TextField ref="Width" label="Width" defaultValue={5} />
  <TextField id="Height" label="Height" defaultValue={5} />
  
  <Button variant="contained" onClick={() => {
      alert()

  }} >Go</Button>

</form>*/}


            <table>
                <tr>
                    {width.map(w => (
                        <th>{w}</th>
                    ))}
                </tr>

                <tr>
                    {width.map(w => (
                        <th>{w}</th>
                    ))}
                </tr>

            </table>

        </div>
    );
}


export default App;
