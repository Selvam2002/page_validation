// Signup validation and handling
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            // Save user data to local storage
            localStorage.setItem('username', username);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

            alert('Signup successful! Redirecting to login page...');
            window.location.href = 'login.html';
        });
    }

    // Login validation and handling
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            const storedEmail = localStorage.getItem('email');
            const storedPassword = localStorage.getItem('password');

            if (email === storedEmail && password === storedPassword) {
                alert('Login successful! Redirecting to to-do list...');
                window.location.href = 'todo.html';
            } else {
                alert('Invalid email or password!');
            }
        });
    }

    // To-Do List handling
    const todoForm = document.getElementById('todoForm');
    if (todoForm) {
        todoForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const newTodo = document.getElementById('newTodo').value;
            const todoList = document.getElementById('todoList');

            const li = document.createElement('li');
            li.textContent = newTodo;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                todoList.removeChild(li);
            });

            li.appendChild(deleteButton);
            todoList.appendChild(li);

            document.getElementById('newTodo').value = '';
        });
    }
});
