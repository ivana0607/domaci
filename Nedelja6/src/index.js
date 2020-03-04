import LaunchList from "./components/launch_list";
import Header from "./components/header";
import Footer from "./components/footer";
import chooseYear from "./components/filter";


const app = document.getElementById('app');

//const header=header() //f-ija koju pozivam i puni header
const header = Header();
const filters = chooseYear();
const launch_list = LaunchList();
const footer = Footer();
app.append(header, filters, launch_list, footer);//ako hocemo da appendujemo vise stvari


const selector = document.querySelector('#selektorid');

selector.addEventListener('change', () => {
    //const divLaunch = document.getElementsByClassName("launch");
    const dateDiv = document.querySelectorAll('#datum');

    dateDiv.forEach(element => {
        element.parentElement.parentElement.style.display = 'none';
        if (selector.value == 1) {
            element.parentElement.parentElement.style.display = 'inline-block';

        } else if (selector.value == element.innerHTML) {
            element.parentElement.parentElement.style.display = 'inline-block';

        }
    })
})







