import style from "../../css/profAssoc.module.css";
import ProfAssocCardComponent from "./ProfAssocCardComponent";

const ProfessionalAssociationsComponent = () => {
	const profAssoc = [
		{
			icon_url: "/src/assets/images/logo1.png",
			title: "logoIpsum",
		},
		{
			icon_url: "/src/assets/images/logo2.png",
			title: "logoIpsum",
		},
		{
			icon_url: "/src/assets/images/logo3.png",
			title: "logoIpsum",
		},
		{
			icon_url: "/src/assets/images/logo4.png",
			title: "logoIpsum",
		},
		{
			icon_url: "/src/assets/images/logo5.png",
			title: "logoIpsum",
		},
	];
	return (
		<div id="profAssoc-section" className={style["container"]}>
			<ProfAssocCardComponent proAssoc={profAssoc} />
		</div>
	);
};

export default ProfessionalAssociationsComponent;
