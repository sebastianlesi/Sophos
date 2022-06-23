import {
  Paper,
  Grid,
  Button,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCurrenty } from "../../service";
import { getUserData } from "../Slide/loginSlice";

const Info = () => {
  //state
  const [exchange, setExchange] = useState({
    to: "",
    from: "",
    amount: "0",
    result: "0",
  });

  //Hooks
  const oldUser = useSelector(getUserData);

  //handle
  const handleExchange = async () => {
    const exchangeRequest = await getCurrenty(exchange);
    if (exchangeRequest.status === "200") {
      setExchange((prev) => ({ ...prev, result: exchangeRequest.data }));
    } else {
      alert("Algo fallo");
    }
  };

  //useEffect
  useEffect(() => {}, []);
  return (
    <Paper>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={3}>
          Usuario
        </Grid>
        <Grid item xs={3}>
          {oldUser.user}
        </Grid>
        <Grid item xs={3}>
          Contraseña
        </Grid>
        <Grid item xs={3}>
          {oldUser.password}
        </Grid>
      </Grid>
      <br />
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          Convertidor
        </Grid>
        <Grid item xs={2}>
          De
        </Grid>
        <Grid item xs={2}>
          <Select
            value={exchange.from}
            label="Seleccione moneda"
            onChange={() => {
              setExchange((prev) => ({ ...prev, from: "GBP" }));
            }}
          >
            <MenuItem value={"GBP"}>GBP</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={1}>
          A
        </Grid>
        <Grid item xs={2}>
          <Select
            value={exchange.to}
            label="Seleccione moneda"
            onChange={() => {
              setExchange((prev) => ({ ...prev, to: "JPY" }));
            }}
          >
            <MenuItem value={"JPY"}>JPY</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={1}>
          Cantidad
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Cantidad"
            variant="outlined"
            onChange={(e) => {
              setExchange((prev) => ({ ...prev, amount: e.target.value }));
            }}
          />
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" onClick={handleExchange}>
            Convertir
          </Button>
        </Grid>
        <Grid item xs={2}>
          Resultado
        </Grid>
        <Grid item xs={2}>
          {exchange.result}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Info;
