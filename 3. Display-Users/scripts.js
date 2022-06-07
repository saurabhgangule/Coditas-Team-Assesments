const nameSectionEl = document.getElementById('name-section');
const detailsSectionEl = document.getElementById('details-section');

const get = async(URL) => {
    try {
        const response = await fetch(URL);
        const data = await response.json();

        return data;
    } catch (e) {
        console.log('SOMETHING WENT WRONG');
    }
}

const getUsers = async() => {
    try {
        const users = await get('https://jsonplaceholder.typicode.com/users');

        for (let { name, email, phone, address }
            of users) {
            const p = document.createElement('p');
            p.innerText = name;
            nameSectionEl.appendChild(p);

            p.addEventListener('click', () => {
                let data = ``;
                const h1 = document.createElement('h1');
                const emailP = document.createElement('p');
                const phoneP = document.createElement('p');
                const addressP = document.createElement('p');

                h1.innerText = `${name}`;
                emailP.innerText = `Email: ${email} |`;
                phoneP.innerText = `Phone: ${phone} |`;
                addressP.innerText = `Address: ${address.street}, ${address.suite}, ${address.city} - ${address.zipcode}`;
                data += h1.outerHTML;
                data += emailP.outerHTML;
                data += phoneP.outerHTML;
                data += addressP.outerHTML;
                detailsSectionEl.innerHTML = data;
            })
        }
    } catch (e) {
        console.log('COULD NOT GET USERS');
    }
}

getUsers();