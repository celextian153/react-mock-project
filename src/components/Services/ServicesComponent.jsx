import style from "../../css/services.module.css";
import ServicesCardComponent from "./ServicesCardComponent";
const ServicesComponent = () => {
	const ourServices = [
		{
			img_url: "#",
			title: "Chemical Warehousing",
			text: "12345asdasd",
		},
		{
			img_url: "#",
			title: "General Merchandise Warehousing",
			text: "12345asdasd",
		},
		{
			img_url: "#",
			title: "Contract Warehousing",
			text: "12345asdasd",
		},
	];
	return (
		<>
			<div id="services-section" className={style["container"]}>
				<ServicesCardComponent ourServices={ourServices} />
			</div>
		</>
	);
};

export default ServicesComponent;
