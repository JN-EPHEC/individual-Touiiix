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
                ${user.Prenom} ${user.Nom} <button class="btn btn-danger btn-delete" data-id="${user.id}">X</button>
            </li>
        `;
    });
}

userList.addEventListener('click', async (event) => {
    if (event.target.classList.contains('btn-delete')) {
        const id = event.target.getAttribute('data-id');

        if(!confirm("T'es sur ???")) return;
        try {
            await fetch(`/api/users/${id}`, { method: 'DELETE' });
            chargerUser();
        } catch (error) {
            console.error("Probleme", error);
        }
    }
})


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