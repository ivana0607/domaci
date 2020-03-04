let date = new Date;

const selector = document.createElement('select');
selector.setAttribute('id', 'selektorid');
const opt = document.createElement('option');
opt.value = 1;
opt.innerHTML = `Choose year:`
selector.appendChild(opt);
const chooseYear = () => {
    for (let i = 2006; i <= date.getFullYear(); i++) {
        const option = document.createElement('option');
        option.value = `${i}`
        option.innerHTML = `${i}`
        selector.appendChild(option);
    }
    return selector;
};

export default chooseYear;