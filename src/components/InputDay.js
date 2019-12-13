import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function InputDay({ changeDate }) {
  
  // * * * * STORES INPUT DATE
  let input = '';
  const handleChange = (event) => {
    input = event.target.value;
    setButtonStatus(input.length === 10);
  }

  // const buttonEnabled = input.length > 0;

  const [buttonStatus, setButtonStatus] = useState(false);

  return (
    <>
      <h2>Go to a Different Day</h2>
      <form>
        <TextField id="standard-basic" label="Date YYYY-MM-DD" onChange={handleChange} /><br /><br />
        <Button variant="contained" color="primary" onClick={event => changeDate(event, input)} disabled={!buttonStatus}>
          Change Date
        </Button>
      </form>
    </>
  );
}