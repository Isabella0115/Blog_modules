function createLoginLayout() {
    const $container = document.createElement('div');
    $container.setAttribute('class', 'container-root');

    const $header = document.createElement('header');
    $header.setAttribute('class', 'header');

    const $link = document.createElement('a');
    $link.setAttribute('href', '/home.html');
    $link.setAttribute('class', 'btn');
    $link.innerText = 'Home';

    const $formWrapper = document.createElement('div');
    $formWrapper.setAttribute('class', 'form-wrapper');

    const $formContainer = document.createElement('div');
    $formContainer.setAttribute('class', 'form-container');

    const $heading = document.createElement('h1');
    $heading.setAttribute('class', 'heading');
    $heading.innerText = 'Welcome Back';

    const $text = document.createElement('p');
    $text.setAttribute('class', 'text');
    $text.innerText = 'Please enter your details.';

    const $form = document.createElement('form');

    const $inputUsername = document.createElement('input');
    $inputUsername.setAttribute('type', 'text');
    $inputUsername.setAttribute('class', 'input');
    $inputUsername.setAttribute('placeholder', 'Username');

    const $inputPassword = document.createElement('input');
    $inputPassword.setAttribute('type', 'password');
    $inputPassword.setAttribute('class', 'input');
    $inputPassword.setAttribute('placeholder', 'Password');

    const $passwordInfo = document.createElement('div');
    $passwordInfo.setAttribute('class', 'password-info');

    const $checkbox = document.createElement('input');
    $checkbox.setAttribute('type', 'checkbox');
    $checkbox.setAttribute('class', 'remember_me');

    const $label = document.createElement('label');
    $label.setAttribute('for', 'remember_me');
    $label.innerText = 'Remember me';

    const $linkForgotPassword = document.createElement('a');
    $linkForgotPassword.setAttribute('href', '#');
    $linkForgotPassword.setAttribute('class', 'info-btn');
    $linkForgotPassword.innerText = 'Forgot your password?';

    $passwordInfo.appendChild($checkbox);
    $passwordInfo.appendChild($label);
    $passwordInfo.appendChild($linkForgotPassword);

    const $loginButton = document.createElement('button');
    $loginButton.setAttribute('class', 'btn');
    $loginButton.innerText = 'Login';

    const $signinButton = document.createElement('button');
    $signinButton.setAttribute('class', 'btn');
    $signinButton.innerText = 'Sign in';

    $form.appendChild($inputUsername);
    $form.appendChild($inputPassword);
    $form.appendChild($passwordInfo);
    $form.appendChild($signinButton);
    $form.appendChild($loginButton);

    $formContainer.appendChild($heading);
    $formContainer.appendChild($text);
    $formContainer.appendChild($form);

    $formWrapper.appendChild($formContainer);

    $header.appendChild($link);

    $container.appendChild($header);
    $container.appendChild($formWrapper);

    document.body.appendChild($container);

    $loginButton.addEventListener('click', (event) => {
        event.preventDefault();

        window.location.href = '/home.html';
    });

    $signinButton.addEventListener('click', (event) => {
        event.preventDefault();

        window.location.href = '/registration.html';
    });
}

createLoginLayout();
