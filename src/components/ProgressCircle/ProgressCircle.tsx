import React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useAppSelector } from "../../redux/hooks/useTypeSelector";
import useStyles from "./ProgressCircle.style";

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  const { appColor, appFont } = useAppSelector((state) => state?.settings);
  const classes = useStyles();

  return (
    <Box className={classes.circleBox}>
      <CircularProgress
        variant="determinate"
        size={280}
        thickness={2}
        {...props}
        style={{
          color: appColor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
        }}
      />
      <Box
        style={{
          marginTop: "-10px",
          marginLeft: "10px",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          style={{
            fontSize: "36px",
            color: "#FFF",
            fontFamily: appFont,
          }}
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function ProgressCirlce() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 2
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}
