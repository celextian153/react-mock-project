import style from "../css/banner.module.css";

const BannerComponent = () => {
	return (
		<div id="banner-section" className={style["container"]}>
			<div className={style["content-width"]}>
				<div className={style["banner-container"]}>
					<h1>Logistic Solutions For All Industries</h1>
					<button>GET A QUOTE</button>
				</div>
			</div>
		</div>
	);
};

export default BannerComponent;
