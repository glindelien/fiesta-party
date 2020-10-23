import React from 'react';
import levels from '../levels.js';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


function ChooseLevel({ chooseLevel }) {
  const classes = useStyles();
  return (
    <div className="select">
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Choose a Level</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=''
          onChange={chooseLevel}
        >
          {levels.map((level, index) => {
          return (
            <MenuItem key={index + 1} value={index + 1}>{index + 1}</MenuItem>
          );
        })}
        </Select>
      </FormControl>
    </div>
  );
}

export default ChooseLevel;
