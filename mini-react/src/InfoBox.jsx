import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Info } from '@mui/icons-material';
export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1580462611434-39cde8c29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNtb2tlJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const HOT_URL = "https://images.unsplash.com/photo-1577985759186-0854dfd3f218?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SE9UJTIwV0VBVEhFUnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1508697014387-db70aad34f4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFJBSU4lMjBXRUFUSEVSfGVufDB8fDB8fHww";


    return(
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity > 80 ?  <ThunderstormIcon/> : info.temp > 15 ?  < WbSunnyIcon/>: <AcUnitIcon/>}

        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}&deg;C</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>Max Weather can be described as {info.weather} and feels like = {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>

        </div>
    );
    
}