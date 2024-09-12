import Button from "@mui/material/Button";

const CustomButton = ({ text, onClick }) => (
  <Button variant="contained" color="primary" onClick={onClick}>
    {text}
  </Button>
);

export default CustomButton;
