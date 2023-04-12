function alert(msg,color) {
    const container = document.querySelector('#msg');
    const form = document.querySelector('#msg-e');

    const div = document.createElement('div');
    div.className = `alert alert-${color}`;
    div.appendChild(document.createTextNode(msg));

    container.insertBefore(div, form);
    setTimeout(() => {
        document.querySelector('.alert').remove()
    }, 2000);
}

document.querySelector('.sign-in_btn').addEventListener('click', (e) => {
    e.preventDefault();
    
    const email= document.querySelector('#email_field').value;
    const pass = document.querySelector('#password_field').value;
    const passc = document.querySelector('#password_fieldc').value;
    if (email === '' || pass === '' || passc === '') {
        alert('Please Fill All The Fields','danger');
    } 
});