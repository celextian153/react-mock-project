import style from "../../css/services.module.css";
import ServicesCardComponent from "./ServicesCardComponent";

const ServicesComponent = () => {
	const ourServices = [
		{
			img_url: "/src/assets/images/metal-wine-storage-tanks-winery.png",
			title: "Chemical Warehousing",
			text: "Brook specializes in storage and handling of packaged chemicals, including Red Label...",
		},
		{
			img_url: "/src/assets/images/close-up-warehouse-view.png",
			title: "General Merchandise Warehousing",
			text: "Brook can warehouse products for many types of industries including Consumer...",
		},
		{
			img_url:
				"/src/assets/images/3d-illustration-interior-modern-warehouse-storage-full-boxes.png",
			title: "Contract Warehousing",
			text: "Brook’s unique approach to setting up a contract warehouse gives the customer the flexibility...",
		},
		{
			img_url: "/src/assets/images/close-up-warehouse-view.png",
			title: "Contract Warehousing",
			text: "Brook’s unique approach to setting up a contract warehouse gives the customer the flexibility...",
		},
	];
	return (
		<>
			<div id="services-section" className={style["container"]}>
				<div className={style["content-width"]}>
					<ServicesCardComponent ourServices={ourServices} />
				</div>
			</div>
		</>
	);
};

export default ServicesComponent;
