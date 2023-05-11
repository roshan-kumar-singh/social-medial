import Modal from "../../../../components/Modal/Modal";
import classes from "../Terms and condition/Terms&Condition.module.css";

const Privacy = (props) => (
	<div onClick={props.onClose} className={classes.outerDiv}>
		<Modal onClose={props.onClose}>
			<div className={classes.overlay}>
				<h2>Privacy policy</h2>
				<article>
					Lorem ipsum dolor sit amet consectetur. Eget lectus elementum id enim. Convallis in ornare sed sagittis sed.
					Egestas facilisis consectetur sem fusce tincidunt fermentum ut risus. Nunc cursus nibh convallis pulvinar
					dignissim. Amet pharetra nibh phasellus tempus nulla. Faucibus non amet pretium eu scelerisque imperdiet. Enim
					pharetra velit nisi eget. Lacus in id lacus at est semper elit. Ultricies velit ullamcorper libero vehicula
					phasellus sit. Fermentum habitasse iaculis risus vitae natoque. In posuere malesuada elementum nunc aliquam
					tristique vitae. Arcu pulvinar eu tempor vestibulum. Diam arcu sed morbi egestas ultrices venenatis. Porta
					iaculis in egestas quam proin. Aliquam velit nisl sit erat in sed at ultricies. Eu enim vel consectetur diam
					iaculis eget varius magna amet. Mauris tortor sed pharetra nibh leo tristique egestas. Scelerisque massa
					consectetur augue viverra ut lorem urna. Cras phasellus egestas tortor sodales vulputate. Non donec vitae
					ipsum est nulla convallis nibh nam. Lorem quis elit tempor vel neque. Quisque bibendum mattis adipiscing elit
					nulla. Sed magna nisi suspendisse diam nulla sagittis. Congue egestas sit dui tempus gravida volutpat justo.
					Orci lectus sit sem commodo sagittis purus et dui dolor. Arcu urna placerat et etiam suspendisse vel. Nulla
					quam vitae eu lectus suspendisse sed tortor sollicitudin. In luctus sed rhoncus euismod a nisl quam. Urna
					magna vitae sed vel eros. Ut mi ac at pretium scelerisque non pulvinar ac ut. Nunc arcu pretium quis facilisi.
				</article>
			</div>
		</Modal>
	</div>
);

export default Privacy;
