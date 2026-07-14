async function getUsers() {
    try {
        const response = await fetch('https://serve.faux-api.com/703f41bf5b6917f51b5d08e1/apiforhello');
        const data = await response.json();
        const users = data.result;
        
        
        const items = document.querySelectorAll('.item');
        items[1].textContent = users[0].name + ' !';
        items[2].textContent = users[1].name + ' !';
        
        
    } catch (error) {
        console.error('Error:', error);
    }
}

getUsers();