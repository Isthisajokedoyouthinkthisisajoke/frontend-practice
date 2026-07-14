const url = 'https://serve.faux-api.com/703f41bf5b6917f51b5d08e1/apiforhello';

const request = new XMLHttpRequest();

request.open('GET', url);
request.send();

request.onload = function() {
    if(request.status === 200) {
        const data = JSON.parse(request.responseText);
        
        
        for(let user of data.result) {
            console.log('User name:', user.name);
            console.log('Username:', user.username);
            console.log('Email:', user.email);
            console.log('---');
        }
        
        const items = document.querySelectorAll('.item');
        const users = data.result;
        
        if (items.length >= 3 && users.length >= 2) {
            items[1].textContent = users[0].name + ' !';
            items[2].textContent = users[1].name + ' !';
            console.log('✅ List updated!');
        }
 
    } else {
        console.log(' Not Found...');
    }
}
