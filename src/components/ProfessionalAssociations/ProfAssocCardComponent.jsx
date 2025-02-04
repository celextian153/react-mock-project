/* eslint-disable react/prop-types */
import style from "../../css/profAssoc.module.css";

const ProfAssocCardComponent = ({ proAssoc }) => {
	return (
		<>
			<p>professional associations</p>
			<div className={style["card-container"]}>
				{proAssoc.map((assoc, index) => (
					<div className={style["assoc-card"]} key={index}>
						<div className={style["assoc-card-icon"]}>
							<img src={assoc.icon_url} alt={assoc.title} />
						</div>
						<div className={style["assoc-card-title"]}>
							<h3>{assoc.title}</h3>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default ProfAssocCardComponent;
