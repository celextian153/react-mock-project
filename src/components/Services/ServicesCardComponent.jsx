import style from "../../css/services.module.css";
const ServicesCardComponent = ({ ourServices }) => {
	return (
		<>
			<div className={style["card-container"]}>
				{ourServices.map((service, index) => (
					<div key={index} className={style["service-card"]}>
						<img src={service.img_url} alt={service.title} />
						<div className={style["card-text-container"]}>
							<h3>{service.title}</h3>
							<p>{service.text}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default ServicesCardComponent;
