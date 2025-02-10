import "./App.css";
import BannerComponent from "./components/BannerComponent";
import MultipleItems from "./components/MultipleItems";
import ProfessionalAssociationsComponent from "./components/ProfessionalAssociations/ProfessionalAssociationsComponent";
import ServicesComponent from "./components/Services/ServicesComponent";
import WhyBannerComponent from "./components/WhyChooseUsBanner/WhyBannerComponent";

function App() {
	return (
		<>
			<BannerComponent />
			<ProfessionalAssociationsComponent />
			<WhyBannerComponent />
			<ServicesComponent />
		</>
	);
}

export default App;
