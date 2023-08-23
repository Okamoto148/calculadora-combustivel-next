import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import {useState} from 'react';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import styles from './DialogNovo.module.css';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;



  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function DialogNovo({open, titulo="titulo", handleClose, fechar="fechar", content="content", content2="content2",content3="content3", content4="", content5="", peso, resultado, resultado2, pesoIdeal, selectCalculadora, altura, viagem, resultado3}) {



  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {titulo}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography display="flex">
          <Typography flexGrow="1">
            <Typography gutterBottom>
               {content}
            </Typography>
            <Typography gutterBottom>
  {content2}
            </Typography>
            <Typography gutterBottom>
              {content3}
            </Typography>
            <Typography gutterBottom>
              {content4}
            </Typography>
            <Typography gutterBottom>
              {content5}
            </Typography>
          </Typography>
            <img className={styles.img} src="./img/posto.jpg" alt="Limão" width="30%" height="50%"/>
          </Typography>
        
          



            
          <Typography display="flex" justifyContent="center" textAlign="center" >
          <div style={{border: "1px solid lightgray", flexGrow: '1'}}> <div style={{backgroundColor: '#64FE2E', color: 'white', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><div>{selectCalculadora!=='Viagem'&&<>Resultado</>} {(selectCalculadora==='Viagem'&&viagem)&&<>Quantidade combustível</>}{(selectCalculadora==='Viagem'&&!viagem)&&<>Valor Gasto</>}</div></div><div style={{height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <div>{resultado}</div></div></div>
  {selectCalculadora==='Etanol'&&<div style={{border: "1px solid lightgray", width: '50%'}}><div style={{backgroundColor: '#64FE2E', color: 'white', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{selectCalculadora!=='Viagem'&&<>Melhor Opção</>} {(selectCalculadora==='Viagem'&&!viagem)&&<>Distância Total</>}{(selectCalculadora==='Viagem'&&viagem)&&<>Gasto Total</>}</div><div style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{resultado2}</div></div>}

{selectCalculadora==='Viagem'&&<div style={{border: "1px solid lightgray", width: '33%'}}><div style={{backgroundColor: '#64FE2E', color: 'white', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{selectCalculadora!=='Viagem'&&<>Melhor Opção</>} {(selectCalculadora==='Viagem'&&!viagem)&&<>Distância Total</>}{(selectCalculadora==='Viagem'&&viagem)&&<>Gasto Total</>}</div><div style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{resultado2}</div></div>}
            

    {selectCalculadora==='Viagem'&&<div style={{border: "1px solid lightgray", width: '33%'}}><div style={{backgroundColor: '#64FE2E', color: 'white', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{(selectCalculadora==='Viagem'&&!viagem)&&<>Custo/km</>}{(selectCalculadora==='Viagem'&&viagem)&&<>Custo/km</>}</div><div style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{resultado3}</div></div>}
          </Typography>

          {selectCalculadora==='Gasto'&&<><p style={{fontSize: '20px', marginTop: '30px'}}>Carro mais econômico - Renault Kwid 1.0</p><Typography display="flex" justifyContent="center" textAlign="center"  >
          <div style={{border: "1px solid lightgray", flexGrow: "1"}}> <div style={{backgroundColor: 'black', color: 'white', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><div>Gasolina</div></div>
            
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div style={{borderBottom: '1px solid lightgray'}}>
            <div style={{height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <div style={{flexGrow: '1'}}>Estrada</div><div style={{flexGrow: '1'}}>Cidade</div></div></div>
              </div>
              <div>
            <div style={{height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <div style={{flexGrow: '1'}}>15,7 km/l</div><div style={{flexGrow: '1'}}>15,3 km/l</div></div></div>
              </div>
            
            
  <div style={{border: "1px solid lightgray", flexGrow: "1"}}> <div style={{backgroundColor: 'black', color: 'white', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><div>Etanol</div></div>
            
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div style={{borderBottom: '1px solid lightgray'}}>
            <div style={{height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <div style={{flexGrow: '1'}}>Estrada</div><div style={{flexGrow: '1'}}>Cidade</div></div></div>
              </div>
              <div>
            <div style={{height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <div style={{flexGrow: '1'}}>11,0 km/l</div><div style={{flexGrow: '1'}}>10,8 km/l</div></div></div>
              </div>
          </Typography></>}

             
          
        </DialogContent>
        
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            {fechar}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}