import style from "../../css/whyBanner.module.css";
const WhyBannerCardComponent = ({ whyInfo }) => {
	return (
		<>
			<div className={style["card-container"]}>
				<h2>why choose us</h2>
				{whyInfo.map((info, index) => (
					<div className={style["why-card"]} key={index}>
						<div className={style["why-card-icon"]}>
							<img src={info.icon_url} alt={info.title} />
						</div>
						<div className={style["why-card-info"]}>
							<h3>{info.title}</h3>
							<p>{info.text}</p>
						</div>
					</div>
				))}
				<button>know more</button>
			</div>
		</>
	);
};

export default WhyBannerCardComponent;
