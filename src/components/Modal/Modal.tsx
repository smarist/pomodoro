import React from 'react';
import Modal from '@material-ui/core/Modal';
import useStyles from './Modal.style';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

interface IHandleModalProps {
    open : boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const SimpleModal: React.FC<IHandleModalProps> = ({open, setOpen}) => {
  const classes = useStyles();
//   // getModalStyle is not a pure function, we roll the style only on the first render
 const [modalStyle] = React.useState(getModalStyle);

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      {/* <SimpleModal open={open} setOpen={setOpen}/> */}
    </div>
  );

  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
  );
};

export default SimpleModal;