import React from 'react';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function CircularProgressWithLabel(props: CircularProgressProps & { value: number }) {
  return (
    <Box style={{ 
        border: '2px solid red',
         height: '100%',
         display: 'flex',
         width: '100%',
         justifyContent: 'center',
         alignItems: 'center',
         }}>
      <CircularProgress
       variant="determinate"
       size={300}
       thickness={8}
        {...props}
         style={{ 
            border: '2px solid white',
             color: "red",
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
             position: 'absolute',
             }}/>
      <Box
        style={{ marginTop: '-10px', marginLeft: '10px' }}
      >
        <Typography
         variant="caption"
          component="div"
          style={{ fontSize: '36px', color: '#FFF' }}>
            {`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function ProgressCirlce() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 2));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
};
