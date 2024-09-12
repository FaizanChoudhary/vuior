import { Card, CardContent, Typography } from "@mui/material";

const InfoCard = ({ title, description }) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardContent>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default InfoCard;
