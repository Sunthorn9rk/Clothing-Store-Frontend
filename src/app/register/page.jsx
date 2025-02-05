"use client";
import React, {useState} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import {createTheme, ThemeProvider} from "@mui/material/styles";

import axios from "axios";
// function
import {register} from "@/functions/auth";

// notify
import {toast} from "react-toastify";

// Main Function
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    let tempErrors = {};

    formData.email = data.get("email");
    // ตรวจสอบรูปแบบอีเมล
    if (!validateEmail(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    formData.password = data.get("password");
    formData.confirmPassword = data.get("confirmPassword");
    // ตรวจสอบให้รหัสผ่านและการยืนยันรหัสผ่านตรงกัน
    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
    }

    // ถ้าไม่มีข้อผิดพลาดให้ทำการ register
    if (Object.keys(tempErrors).length === 0) {
      const product_data = {
        name: data.get("name"),
        email: data.get("email"),
        password: data.get("password"),
      };

      register(product_data)
        .then((res) => {
          console.log(res);
          toast.success(res.data);
        })
        .catch((err) => {
          // console.log(err.response.data);
          if ((err.status = 400)) {
            toast.error(err.response.data);
          } else {
            console.log(err);
          }
        });
    } else {
      setErrors(tempErrors);
    }
  };

  return (
    <div className="w-full">
      <Grid
        className="w-full my-12"
        container
        component="main"
        sx={{height: "100vh"}}
      >
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            // backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundImage: "url(/assets/wallpaper.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          className=" shadow-none"
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{m: 1, bgcolor: "secondary.main"}}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{mt: 1}}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoFocus
                // value={formData.name}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                // value={formData.email}
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                // value={formData.password}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                // value={formData.confirmPassword}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
              />

              <Button
                className="my-3 py-3"
                type="submit"
                fullWidth
                variant="contained"
              >
                Register
              </Button>
              <Grid container>
                <Grid className="flex justify-end" item xs>
                  <Link href="#" variant="body2">
                    Already have an account?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <div className="w-fulls invisible ">This is Register page</div>
    </div>
  );
};

export default Register;
