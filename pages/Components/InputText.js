import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import Switch from '@mui/material/Switch';
import CreditCardIcon from '@mui/icons-material/CreditCard';

export default function InputText({onChangePeso, onChangeAltura, valuePeso, valueAltura, placeholderPeso="placeholder", placeholderAltura="placeholder", label='Etanol',label2='Gasolina', selectCalculadora, label3='Preço do combustível', placeholder3='Preço do combustível. Ex.: 4,50', onChangePreco, valuePreco, onClickSwitch, viagem}){

  
  return (
    <>
      <Box sx={{ '& > :not(style)': { mt: 6, ml:'3%', mr:6, mb:0, width: '90%' } }}>
        {selectCalculadora==='Viagem'&&<div style={{width:  '30px'}}>
          <Switch {...label} onClick={e=>onClickSwitch(e)} defaultChecked />
          {viagem&&<div style={{width: '300px', color: 'lightgray', marginTop: '15px', marginBottom: '-40px'}}>CALCULADORA DE CONSUMO DE COMBUSTÍVEL</div>}
          {!viagem&&<div style={{width: '400px', color: 'lightgray', marginTop: '15px', marginBottom: '-40px'}}>CALCULADORA DISTÂNCIA COM VALOR FIXO</div>}

        </div>}

        
        <FormControl variant="standard">
          
                                   
          <InputLabel htmlFor="input-with-icon-adornment">
            {label}
          </InputLabel>
          <Input placeholder={placeholderAltura} value={valueAltura} type='number' onChange={e=>onChangeAltura(e.currentTarget.value)}
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                {selectCalculadora==='Etanol'&&<LocalGasStationIcon />}
                {selectCalculadora==='Gasto'&&<TimeToLeaveIcon />}
                {(selectCalculadora==='Viagem'&&viagem)&&<TimeToLeaveIcon />}
                {(selectCalculadora==='Viagem'&&!viagem)&&<CreditCardIcon />}
              </InputAdornment>
            }
          />
        </FormControl>
        
      </Box>
      <Box sx={{ '& > :not(style)': { mt: 0, ml:'3%', mb:2, width: '90%'}  }}>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
        {label2}
          </InputLabel>
          <Input placeholder={placeholderPeso} type='number' value={valuePeso} onChange={e=>onChangePeso(e.currentTarget.value)}
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                {selectCalculadora==='Etanol'&&<LocalGasStationIcon />}
                {selectCalculadora!='Etanol'&&<OilBarrelIcon />}
              </InputAdornment>
            }
          />
        </FormControl>
        
      </Box>
      
      {selectCalculadora==='Viagem'&&(<><Box sx={{ '& > :not(style)': { mt: -2, ml:'3%', mb:2, width: '90%' } }}>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
        {label3}
          </InputLabel>
          <Input placeholder={placeholder3} type='number' value={valuePreco} onChange={e=>onChangePreco(e.currentTarget.value)}
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <LocalGasStationIcon />
                
              </InputAdornment>
            }
          />
        </FormControl>
        
      </Box>
      
      </>)}
    </>
  );
}