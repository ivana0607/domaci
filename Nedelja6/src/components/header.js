import { getInfo } from "../services/spacex_service";


const Header = () => {
    const div = document.createElement("header");
    getInfo().then(info => {
        info = info.data;

        let { name, summary } = info;

        const companyName = document.createElement("h1");
        companyName.innerHTML = name;

        const aboutCompany = document.createElement("h3");
        aboutCompany.innerHTML = summary;

        div.append(companyName, aboutCompany);

    });
    return div;
}
export default Header;