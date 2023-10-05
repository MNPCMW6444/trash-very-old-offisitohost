import WhiteForm from "./WhiteForm.tsx";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const stepConfigurations = [
    {
      question: "Contact Information",
      fields: [
        {
          name: "firstName",
          label: "First Name",
          type: "text",
          required: true,
        },
        { name: "lastName", label: "Last Name", type: "text" },
        { name: "email", label: "Email Address", type: "text", required: true },
        {
          name: "phoneNumber",
          label: "Phone Number",
          type: "number",
          required: true,
        },
      ],
    },
    {
      question: "Property Details",
      fields: [
        { name: "city", label: "City", type: "text" },
        { name: "street", label: "street", type: "text" },
        { name: "number", label: "Number", type: "number" },
        { name: "floor", label: "Starting Floor", type: "number" },
        { name: "description", label: "Short Description", type: "text" },
        { name: "floorQ", label: "Floor Quantity", type: "number" },
        { name: "officeQ", label: "Floor Quantity", type: "number" },
        { name: "chairQ", label: "Floor Quantity", type: "number" },
      ],
    },
  ];

  const theme = createTheme({
    palette: {
      primary: {
        main: "#009688", // Teal for primary actions
      },
      secondary: {
        main: "#FF6B6B", // Coral for contrast and secondary actions
      },
    },
    typography: {
      fontFamily: "'Poppins', sans-serif",
    },
    shape: {
      borderRadius: 12, // Rounded corners
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            padding: "8px 20px",
            fontSize: "1rem",
            transition: "all 0.3s",
            boxShadow: "2px 2px 12px rgba(0, 0, 0, 0.1)", // subtle shadow
            "&:hover": {
              transform: "translateY(-2px)", // slight lift on hover
              boxShadow: "2px 4px 14px rgba(0, 0, 0, 0.2)",
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 12,
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <WhiteForm fieldSteps={stepConfigurations} endpoint="/myApiEndpoint" />
    </ThemeProvider>
  );
}

export default App;
