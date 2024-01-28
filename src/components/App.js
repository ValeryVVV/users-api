import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const Home = lazy(() => import("../pages/Home/HomePage"));
const UserDetails = lazy(() => import("../pages/UserDetails/UserDetailsPage"));
const AppBarPage = lazy(() => import("../pages/AppBar/AppBarPage"));
const NotFound = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

export const App = () => {
  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <nav>
        <AppBarPage />
      </nav>
      <Suspense fallback={<Box>Loading...</Box>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:userId/*" element={<UserDetails />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};
