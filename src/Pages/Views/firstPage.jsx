import { Grid, Button, TextField, Paper } from "@mui/material";
import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./styles.css";
import { setPassword, setUser } from "../Slide/loginSlice";

const FirstPage = () => {
  //hooks
  const schema = yup.object().shape({
    password: yup.string().required("*Este campo es obligatorio"),
    user: yup.string().required("*Este campo es obligatorio"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //handles
  const handleLogin = (data) => {
    dispatch(setUser({user: data.user}));
    dispatch(setPassword({password: data.password}));
    navigate("info");
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="indexContainer"
    >
      <Grid
        container
        direction={"column"}
        md={5}
        justifyContent="center"
        alignItems="center"
        className="containerLogin"
      >
        <form onSubmit={handleSubmit(handleLogin)}>
          <Grid item className="spacing">
            <Form.Group className="mb-5">
              <InputGroup
                bsPrefix={errors.user ? "input-group-container__error" : ""}
              >
                <Form.Control
                  {...register("user")}
                  bsPrefix="custom-input"
                  placeholder="Usuario"
                />
              </InputGroup>
              <div className="custom-input__error">{errors.user?.message}</div>
            </Form.Group>
          </Grid>
          <Grid item className="spacing">
            <Form.Group className="mb-5">
              <InputGroup
                bsPrefix={errors.password ? "input-group-container__error" : ""}
              >
                <Form.Control
                  {...register("password")}
                  bsPrefix="custom-input"
                  placeholder="Contraseña"
                />
              </InputGroup>
              <div className="custom-input__error">
                {errors.password?.message}
              </div>
            </Form.Group>
          </Grid>
          <Grid item xs className="spacing">
            <Button variant="contained" type="submit">
              Ingresar
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default FirstPage;
