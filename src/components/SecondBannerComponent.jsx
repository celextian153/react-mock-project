import style from "../css/secondBanner.module.css";
const SecondBannerComponent = () => {
	return (
		<>
			<div className={style["container"]}>
				<div className={style["content-width"]}>
					<div className={style["text-container"]}>
						<h2>Quality Services and Great Amout of Capabilities</h2>
						<button>get a quote</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default SecondBannerComponent;
