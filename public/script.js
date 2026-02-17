let userList = document.getElementById('userList')
console.log(userList)
let userForm = document.getElementById('userForm')

async function chargerUser() {
    const response = await fetch('/api/users');
    const users = await response.json();

    userList.innerHTML="";
    users.forEach(user => {
        userList.innerHTML += `
            <li class="list-group-item">
                ${user.Prenom} ${user.Nom}
            </li>
        `;
    });
}

userForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const inputPrenom = document.getElementById('prenom');
    const inputNom = document.getElementById('nom');

    const valeurPrenom = inputPrenom.value;
    const valeurNom = inputNom.value;

    const donneesEnvoyer = {
        Prenom : valeurPrenom,
        Nom : valeurNom,
    };

    const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(donneesEnvoyer)
    });
    if(response.ok){
        inputPrenom.value = "";
        inputNom.value = "";
        await chargerUser();
    }
})

chargerUser();