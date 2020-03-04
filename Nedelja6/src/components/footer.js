import { getInfo } from "../services/spacex_service";

const Footer = () => {
    const div = document.createElement("footer");
    getInfo().then(info => {
        info = info.data;

        let { founder,
            founded,
            headquarters: {
                address,
                city,
                state
            },
        } = info;

        const companyFounder = document.createElement("h3");
        companyFounder.innerHTML = founder;

        const about = document.createElement("p");
        about.innerHTML = founded;

        const headquart = document.createElement("span");
        headquart.innerHTML = address, city, name;


        div.append(companyFounder, about, address, city, state);

    });
    return div;
}
export default Footer;