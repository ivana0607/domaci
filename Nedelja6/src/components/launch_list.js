import { getPastLaunches } from '../services/spacex_service'
import Launch from './launch';


//add filters
const LaunchList = () => {
    const div = document.createElement('div');
    div.className = 'launch-list';
    getPastLaunches().then(Response => {
        //let data=response.data;
        let { data } = Response;

        //const launch = Launch()
        data.forEach(element => {
            div.appendChild(Launch(element));
        }, error => {
            console.log(error);
        });
    })
    return div;
}
export default LaunchList