//Se importan los modulos y bibliotecas necesarios para el componente, incluyendo React, react-hook-form para el manejo de formularios, 
//@mui/material para los componentes de interfaz de usuario, yup para la validacion de formularios y axios para realizar solicitudes HTTP
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, MenuItem, Typography, Box } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

//Se define un esquema de validacion utilizando la biblioteca yup. Este esquema define las reglas de validacion para cada campo del formulario
const schema = yup.object().shape({
  amount: yup.number().required("El monto es obligatorio").positive("Debe ser un número positivo"),
  reference: yup.string().required("La referencia es obligatoria").min(6, "Debe tener al menos 6 caracteres").max(12, "Máximo 12 caracteres"),
  bank: yup.string().required("El banco es obligatorio"),
  mobileNumber: yup.string().required("El número de pago móvil es obligatorio").matches(/^\d+$/, "Debe ser un número válido"),
  paymentProof: yup.mixed().required("La captura del pago es obligatoria"),
});

//Se define el componente funcional PaymentForm. Se utiliza el hook useState para mantener el estado de la vista previa de la prueba de pago
const PaymentForm = () => {
  const [preview, setPreview] = useState(null);
  const { handleSubmit, control, setValue, watch } = useForm({
    resolver: yupResolver(schema),
  });

  //Se define la funcion onSubmit que se ejecuta cuando se envia el formulario. Esta funcion crea un objeto FormData con los datos del formulario y los 
  //envia a traves de una solicitud POST a la ruta /api/payments del servidor
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("amount", data.amount);
    formData.append("reference", data.reference);
    formData.append("bank", data.bank);
    formData.append("mobileNumber", data.mobileNumber);
    formData.append("paymentProof", data.paymentProof[0]);

    try {
      const response = await axios.post("http://localhost:5000/api/payments", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Pago enviado con éxito");
      window.location.reload(); // Refrescar la pagina
    } catch (error) {
      console.error(error);
      alert("Error al enviar el pago");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setValue("paymentProof", e.target.files);
    setPreview(URL.createObjectURL(file));
  };

  //Se retorna el JSX que representa el formulario de pago. El formulario se envuelve 
  //en un contenedor Box de @mui/material y se muestra un titulo centrado
  return (
<Box className="payment-form" sx={{ maxWidth: 500, margin: "auto", padding: 2 }}>
      <Typography variant="h4" gutterBottom align="center">
        Formulario de Pago
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="amount"
          control={control}
          render={({ field, fieldState }) => (
            <TextField {...field} label="Monto" fullWidth margin="normal" error={!!fieldState.error} helperText={fieldState.error?.message} />
          )}
        />
        <Controller
          name="reference"
          control={control}
          render={({ field, fieldState }) => (
            <TextField {...field} label="Referencia" fullWidth margin="normal" error={!!fieldState.error} helperText={fieldState.error?.message} />
          )}
        />
        <Controller
          name="bank"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              select
              label="Banco"
              fullWidth
              margin="normal"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            >
              <MenuItem value="BANESCO BANCO UNIVERSAL S.A.C.A.">BANESCO BANCO UNIVERSAL S.A.C.A.</MenuItem>
              <MenuItem value="100% BANCO, BANCO UNIVERSAL C.A.">100% BANCO, BANCO UNIVERSAL C.A.</MenuItem>
              <MenuItem value="BANCAMIGA, BANCO MICROFINANCIERO C.A.">BANCAMIGA, BANCO MICROFINANCIERO C.A.</MenuItem>
              <MenuItem value="BANCARIBE C.A. BANCO UNIVERSAL">BANCARIBE C.A. BANCO UNIVERSAL</MenuItem>
              <MenuItem value="BANCO ACTIVO">BANCO ACTIVO</MenuItem>
              <MenuItem value="BANCO CARONI C.A. BANCO UNIVERSAL">BANCO CARONI C.A. BANCO UNIVERSAL</MenuItem>
              <MenuItem value="BANCO DE LA FANB">BANCO DE LA FANB</MenuItem>
              <MenuItem value="BANCO DE VENEZUELA">BANCO DE VENEZUELA</MenuItem>
              <MenuItem value="BANCO DEL TESORO">BANCO DEL TESORO</MenuItem>
              <MenuItem value="BANCO DIGITAL DE LOS TRABAJADORES">BANCO DIGITAL DE LOS TRABAJADORES</MenuItem>
              <MenuItem value="BANCO EXTERIOR C.A. BANCO UNIVERSAL">BANCO EXTERIOR C.A. BANCO UNIVERSAL</MenuItem>
              <MenuItem value="BANCO MERCANTIL">BANCO MERCANTIL</MenuItem>
              <MenuItem value="BANCO NACIONAL DE CREDITO">BANCO NACIONAL DE CREDITO</MenuItem>
              <MenuItem value="BANCO PLAZA, BANCO UNIVERSAL">BANCO PLAZA, BANCO UNIVERSAL</MenuItem>
              <MenuItem value="BANCO PROVINCIAL">BANCO PROVINCIAL</MenuItem>
              <MenuItem value="BANCO SOFITASA">BANCO SOFITASA</MenuItem>
              <MenuItem value="BANCRECER, S.A. BANCO MICROFINANCIERO">BANCRECER, S.A. BANCO MICROFINANCIERO</MenuItem>
              <MenuItem value="BANPLUS BANCO UNIVERSAL, C.A.">BANPLUS BANCO UNIVERSAL, C.A.</MenuItem>
              <MenuItem value="BFC BANCO FONDO COMUN">BFC BANCO FONDO COMUN</MenuItem>
              <MenuItem value="DEL SUR BANCO UNIVERSAL C.A.">DEL SUR BANCO UNIVERSAL C.A.</MenuItem>
              <MenuItem value="MI BANCO BANCO MICROFINANCIERO">MI BANCO BANCO MICROFINANCIERO</MenuItem>
              <MenuItem value="VENEZOLANO DE CREDITO">VENEZOLANO DE CREDITO</MenuItem>
            </TextField>
          )}
        />
        <Controller
          name="mobileNumber"
          control={control}
          render={({ field, fieldState }) => (
            <TextField {...field} label="Número de Pago Móvil" fullWidth margin="normal" error={!!fieldState.error} helperText={fieldState.error?.message} />
          )}
        />
 <label htmlFor="file-upload" style={{ display: 'block', margin: '20px 0', textAlign: 'center'}}>
          <Button variant="contained" component="span" sx={{ backgroundColor: '#696969', color: '#fff', '&:hover': { backgroundColor: '#505050' } }}>
            Elegir archivo
          </Button>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }} // Ocultar el input original
          />
        </label>        
        

        {preview && <img src={preview} alt="Vista previa" style={{ maxWidth: "100%", marginBottom: 20 }} />}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Enviar Pago
        </Button>
      </form>
    </Box>
  );
};

export default PaymentForm;