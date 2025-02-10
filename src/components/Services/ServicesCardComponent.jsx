import Slider from "react-slick";
import style from "../../css/services.module.css";
import { useRef } from "react";
const ServicesCardComponent = ({ ourServices }) => {
	let sliderRef = useRef(null);

	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
		],
	};
	const next = () => {
		sliderRef.slickNext();
	};
	const previous = () => {
		sliderRef.slickPrev();
	};

	return (
		<>
			<div className={style["service-head"]}>
				<h2>our services</h2>
				<div className={style["services-nav"]}>
					<button className={style["btn-prev"]} onClick={previous}></button>
					<button className={style["btn-next"]} onClick={next}></button>
				</div>
			</div>
			<div className={style["card-container"]}>
				<Slider
					ref={(slider) => {
						sliderRef = slider;
					}}
					{...settings}>
					{ourServices.map((service, index) => (
						<div key={index} className={style["service-card"]}>
							<img src={service.img_url} alt={service.title} />
							<div className={style["card-text-container"]}>
								<h3>{service.title}</h3>
								<p>{service.text}</p>

								<a href="#">LEARN MORE</a>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</>
	);
};

export default ServicesCardComponent;
