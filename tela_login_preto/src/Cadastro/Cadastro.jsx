import * as React from "react";
import TextField from "@mui/material/TextField"; //input
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar"; // icone de cadeado
import Box from "@mui/material/Box"; // uma espécie de div
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"; //icone
import Container from "@mui/material/Container"; //div principal
import Typography from "@mui/material/Typography";
import { useState } from "react";

function Cadastro() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSuubmit = (event) => {
    event.preventDefault();
    alert(
      "Email:" +
        user.email +
        " - " +
        "Senha:" +
        user.password +
        " - " +
        "Idade:" +
        user.age +
        " - " +
        "Nome:" +
        user.name
    );
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ margin: 1, backgroundColor: "#000000" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastro - VIO
        </Typography>
        <Box
          component="form"
          sx={{ marginTop: 1 }}
          onSubmit={handleSuubmit}
          noValidate
        >
          <TextField
            required
            fullWidth
            id="name"
            label="Nome"
            name="name"
            margin="normal"
            value={user.name}
            onChange={onChange}
          />

          <TextField
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            margin="normal"
            value={user.email}
            onChange={onChange}
          />

          <TextField
            required
            fullWidth
            id="age"
            label="Idade"
            name="age"
            margin="normal"
            type="number"
            value={user.age}
            onChange={onChange}
          />

          <TextField
            required
            fullWidth
            id="password"
            label="Senha"
            name="password"
            margin="normal"
            type="password"
            value={user.password}
            onChange={onChange}
          />

          <Button
            sx={{ mt: 3, mb: 2, backgroundColor: "#000000" }}
            fullWidth
            type="submit"
            variant="contained"
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
export default Cadastro;
