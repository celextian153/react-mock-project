import style from "../../css/whyBanner.module.css";
import WhyBannerCardComponent from "./WhyBannerCardComponent";
const WhyBannerComponent = () => {
	const whyInfo = [
		{
			icon_url: "/src/assets/images/growth.png",
			title: "Continuous Improvement",
			text: "Brook Warehousing Systems is committed to quality service through our company-wide participation the Continuous Improvement Process.",
		},
		{
			icon_url: "/src/assets/images/process.png",
			title: "Standard Operating Procedures",
			text: "Standard Operating Procedures (SOP’s) are customized documents designed to record the receiving, storage and distribution requirements of each of our customers",
		},
		{
			icon_url: "/src/assets/images/process.png",
			title: "Root Cause And Corrective Action",
			text: "Brook Warehousing uses Customer Feedback Reports (CFR) as one method of evaluating accuracy of performance. CFRs can be filed by customers or by our employees.",
		},
	];
	return (
		<>
			<div id="whyBanner-section" className={style["container"]}>
				<div className={style["whyBanner-container"]}>
					<img
						src="/src/assets/images/young-man-working-warehouse-with-boxes.png"
						alt="Young-man-working-wharehouse"
						className={style["whyBanner-bg"]}
					/>
					<WhyBannerCardComponent whyInfo={whyInfo} />
				</div>
			</div>
		</>
	);
};

export default WhyBannerComponent;
