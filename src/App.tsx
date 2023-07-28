import React, { useState, ChangeEvent } from 'react';
import './App.css';
import TextField from '@mui/material/TextField/TextField';
import Button from '@mui/material/Button/Button';
import List from '@mui/material/List/List';
import Stack from '@mui/material/Stack';
import ListItemButton from '@mui/material/ListItemButton';
import Container from '@mui/material/Container';
import ListItemText from '@mui/material/ListItemText';

export const App = () => {
  const [value, setValue] = useState(""); 
  const [text, setText] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }

  const handleClick = () => {
    setText([...text, value]);
    setValue("");
  }
  const handleItemClick = (item: string) => {
    alert(item);
  }

  return (
    <div className ="App">
      <Container component="main" maxWidth="xs">
    <Stack spacing={2}>
      <TextField 
      fullWidth
      value={value} onChange={handleChange} />
      <Button 
      type="submit" 
      fullWidth
      size="large"
      variant = "contained"
      sx={{my:3}}
      onClick={handleClick}>追加</Button>
      
       <List>
          {text.map((item, index) => (
            <ListItemButton key={index} onClick={() => handleItemClick(item)}>
              <ListItemText>{item}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Stack>
      </Container>
    </div>
  );
};