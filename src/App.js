import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



function App() {
  return (
    <div className="App">

      <form name="test">

        <input type="text" size="10"/>
        <input type="text" size="10"/>


        <input type="submit" value="Го"/>

      </form>

       <form>
  <TextField id="Width" label="Width" defaultValue={5}/>
  <TextField id="Height" label="Height" defaultValue={5}/>
  
  <Button variant="contained">Go</Button>

</form>



<table>
   
   <tr>
    <th><input type="text" size="1"/></th>
    <th><input type="text" size="1"/></th>
    <th><input type="text" size="1"/></th>
    <th><input type="text" size="1"/></th>
   </tr>
   
    <tr>
        <th><input type="text" size="1"/></th>
        <th><input type="text" size="1"/></th>
        <th><input type="text" size="1"/></th>
        <th><input type="text" size="1"/></th>
   </tr>
   
  </table>

    </div>
  );
}

export default App;
