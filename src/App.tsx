import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { dark } from "./themes";
import "./index.scss";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <CssBaseline />
      <Box className="App">
        <RouterProvider router={router} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
