import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ref, set } from "firebase/database";
import { auth, database } from "../config/firebase";

const defaultTheme = createTheme();

export default function SignUp() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [image, setImage] = React.useState("");
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      if (!email || !password || !firstName || !lastName) {
        toast.error("🦄 Required fields are missing!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("userCredential", userCredential);
          console.log("userCredential", userCredential.user.uid);
          toast.success("🦄 Sign up Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          let userObj = {
            firstName,
            lastName,
            email,
            image,
          };
          console.log(userObj);

          set(ref(database, "clients/" + userCredential.user.uid), userObj);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("errorMessage", errorMessage);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const signUpWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log("user=======>", user);
        console.log("user-uid======>", user.uid);

        let userObj = {
          name: user.displayName,
          email: user.email,
          imgUrl: user.photoURL,
          emailVer: user.emailVerified,
        };
        console.log(userObj);

        set(ref(database, "clients/googleUser/" + user.uid), userObj);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode", errorCode);
      });
  };

  const signUpWithGithub = () => {
    const provider = new GithubAuthProvider();

    signInWithPopup(auth, provider).then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log("user====>", user);
      console.log("userUid====>", user.uid);

      let userObj = {
        name: user.displayName,
        email: user.email,
        imgUrl: user.photoURL,
        emailVer: user.emailVerified,
      };
      console.log(userObj);

      set(ref(database, "clients/githubUser/" + user.uid), userObj);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    });
  };
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e) => setFirstName(e.target.value)}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setImage(e.target.value)}
                  required
                  fullWidth
                  name="image"
                  type="file"
                  id="image"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              onClick={signUp}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Button
              onClick={signUpWithGoogle}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2, backgroundColor: "#673ab7" }}
            >
              Google
            </Button>
            <Button
              onClick={signUpWithGithub}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2, backgroundColor: "#280f28" }}
            >
              Github
            </Button>
            <Grid container justifyContent="center">
              <Grid item sx={{ cursor: "pointer" }}>
                <Link to="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </ThemeProvider>
  );
}
