import * as React from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { toast } from "react-toastify";

const defaultTheme = createTheme();

export default function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const Uid = userCredential.user.uid;
        localStorage.setItem("uid", Uid);
        const dbRef = ref(getDatabase());
        get(child(dbRef, `clients/${Uid}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val());
              localStorage.setItem("userData", JSON.stringify(snapshot.val()));

              toast.success("Login successfully", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              navigate("/dashboard");
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log("user=======>", user);
      console.log("user-uid======>", user.uid);

      localStorage.setItem("uid", user.uid);

      const dbRef = ref(getDatabase());
      get(child(dbRef, `clients/googleUser/${user.uid}`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          localStorage.setItem("userData", JSON.stringify(snapshot.val()));

          toast.success("Login successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/dashboard");
        } else {
          console.log("No data available");
        }
      });
    });
  };

  const loginWithGithub = () => {
    const provider = new GithubAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log("user====>", user);
        console.log("userUid====>", user.uid);

        localStorage.setItem("uid", user.uid);

        const dbRef = ref(getDatabase());
        get(child(dbRef, `clients/githubUser/${user.uid}`)).then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            localStorage.setItem("userData", JSON.stringify(snapshot.val()));
          }
          toast.success("Login successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/dashboard");
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode", errorCode);
      });
  };
  const resetEmail = () => {};
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
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
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button
              onClick={loginWithGoogle}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2, backgroundColor: "#673ab7" }}
            >
              Google
            </Button>
            <Button
              onClick={loginWithGithub}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2, backgroundColor: "#280f28" }}
            >
              Github
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="#" onClick={resetEmail} variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item sx={{ cursor: "pointer" }}>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
