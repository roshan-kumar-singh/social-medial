import classes from "./Modal.module.css";

const Backdrop = (props) => {
	return <div className={classes.backdrop}>{props.children}</div>;
};

const ModalOverlay = (props) => {
	return <div className={classes.modal}>{props.children}</div>;
};

// const portalElement = document.getElementById("overlays");

// const Modal = (props) => {
// 	return (
// 		<>
// 			{ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
// 			{ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
// 		</>
// 	);
// };
const Modal = (props) => {
	return (
		<Backdrop onClose={props.onClose}>
			<ModalOverlay>{props.children}</ModalOverlay>
		</Backdrop>
	);
};

export default Modal;
