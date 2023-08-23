import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from 'react';

export default function AlertDialog({explicacao='Explicação', descricao, open=false, handleClickOpen, handleClose}) {
 


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} >
        {explicacao}
      </Button>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Como usar a calculadora"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {descricao}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}