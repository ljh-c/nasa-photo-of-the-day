import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function InputDay({ changeDate }) {
  // * * * * STORES INPUT DATE
  let input = '';
  const handleChange = (event) => {
    input = event.target.value;
  }

  return (
    <>
      <h2>Go to a Different Day</h2>
      <form>
        <TextField id="standard-basic" label="Date YYYY-MM-DD" onChange={handleChange} />
        <Button variant="contained" color="primary" onClick={event => changeDate(event, input)}>
          Change Date
        </Button>
      </form>
    </>
  );
}