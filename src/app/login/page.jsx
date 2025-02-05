"use client";
import React, {useEffect} from "react";
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

// function
import {login, loginFacebook} from "@/functions/auth";

// ใช้เพื่อเปลี่ยนเส้นทางหน้าเว็บ
// import {useNavigate} from "react-router-dom";
import {useRouter} from "next/navigation";

// ใช้redux ใช้ในการเก็บข้อมูลไปยัง store
import {useDispatch} from "react-redux";

// ส่งไปยัง store user
import {acclogin} from "../../../store/userSlice";

// login with line frontend-framework
import liff from "@line/liff";
import {BsLine} from "react-icons/bs";

// login with facebook
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import {FaFacebook} from "react-icons/fa";

// notify
import {toast} from "react-toastify";

const page = () => {
  //   const navi = useNavigate();
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    liff.init({liffId: "2006326354-Vkx2x4ad"});
  }, []);

  const handleLoginLiff = () => {
    try {
      liff.login();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // ไม่ให้หน้าเว็บ refresh หลังจากกด submit
    const data = new FormData(event.currentTarget); // ดึงข้อมูลจาก form ทั้งหมด

    const user_data = {
      email: data.get("email"),
      password: data.get("password"),
    };

    login(user_data)
      .then((res) => {
        console.log(res);
        console.log("token is :", res.data.token);
        toast.success("User " + res.data.payload.user.name + " Login Success");
        // นำข้อมูลจาก backend มาเก็บใน store
        dispatch(
          acclogin({
            name: res.data.payload.user.name,
            role: res.data.payload.user.role,
            token: res.data.token,
          })
        );
        // frontend เก็บข้อมูลไว้ที่หน้าบ้านด้วย
        localStorage.setItem("token", res.data.token);
        roleRedirects(res.data.payload.user.role);
      })
      .catch((err) => {
        console.log(err);
        // toast.error(err.response.data);
      });
  };

  const roleRedirects = (role) => {
    if (role === "admin") {
      //   navi("/admin/index");
      router.push("/admin/index");
      // router.push("/admin/manageaccount");
    } else {
      //   navi("/user/index");
      router.push("/user/index");
    }
  };

  const responseFacebook = async (response) => {
    console.log(response);
    await loginFacebook(response)
      .then((res) => {
        // console.log(res);
        // นำข้อมูลจาก backend มาเก็บใน  redux store
        dispatch(
          loginRedux({
            name: res.data.payload.user.name,
            role: res.data.payload.user.role,
            token: res.data.token,
          })
        );
        // frontend เก็บข้อมูลไว้ที่หน้าบ้านด้วย
        localStorage.setItem("token", res.data.token);
        roleRedirects(res.data.payload.user.role);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Grid className="my-12" container component="main" sx={{height: "100vh"}}>
        <CssBaseline />
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
          <Box className="my-8 mx-4 flex flex-col items-center">
            <Avatar className="m-1 bg-blue-500">
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box
              className="my-1"
              component="form"
              noValidate
              onSubmit={handleSubmit}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              <Button
                className="my-2"
                type="submit"
                fullWidth
                variant="contained"
              >
                Login
              </Button>

              <Button
                className="my-2"
                type="submit"
                fullWidth
                variant="contained"
                color="success"
                onClick={handleLoginLiff}
                startIcon={<BsLine />}
              >
                Login With LINE
              </Button>

              <FacebookLogin
                appId="519465757604316"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                render={(renderProps) => (
                  <Button
                    className="my-2"
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={renderProps.onClick}
                    startIcon={<FaFacebook />}
                  >
                    LOGIN WITH FACEBOOK
                  </Button>
                )}
              />

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <div className=" invisible">This is Login Page</div>
    </div>
  );
};

export default page;
