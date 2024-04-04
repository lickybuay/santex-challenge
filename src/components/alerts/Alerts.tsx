import React, { useContext, useEffect, useState } from 'react'
import { Snackbar } from '@mui/material';
import { AlertContext } from '../../store/context';

export default function Alerts() {

    const alert = useContext(AlertContext);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if(alert.alert){
            setShowAlert(true);
        }
    }, [alert])
  
  return (
    <Snackbar
        open={showAlert}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={6000}
        onClose={()=>{ setShowAlert(false) }}
        message={alert.alert}
      />
  )
}
