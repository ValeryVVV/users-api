import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AppBarPage from "../pages/AppBar/AppBarPage";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const Home = lazy(() => import("../pages/Home/HomePage"));
const UserDetails = lazy(() => import("../pages/UserDetails/UserDetailsPage"));

export const App = () => {
  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <nav>
        <AppBarPage />
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:movieId/*" element={<UserDetails />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};
