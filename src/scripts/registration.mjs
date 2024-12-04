import { createElement, render } from './utils.js';
import { Storage, ValidationError } from './storage.js';

function createRegistrationLayout() {
    const container = createElement('div', { class: 'container-root' }, [
        createElement('header', { class: 'header' }, [
            createElement('a', { href: 'home.html', class: 'btn' }, 'Home'),
            createElement('a', { href: 'index.html', class: 'btn' }, 'Log In'),
        ]),
        createElement('div', { class: 'form-wrapper' }, [
            createElement('div', { class: 'form-container' }, [
                createElement('h1', { class: 'heading' }, 'Registration Form'),
                createElement('p', { class: 'text' }, 'Fill out the form carefully for registration'),
                createElement('form', {}, [
                    createElement('div', { class: 'input-box' }, [
                        createElement('input', { class: 'input', type: 'text', placeholder: 'First Name' }),
                        createElement('input', { class: 'input', type: 'text', placeholder: 'Last Name' }),
                        createElement('div', { class: 'gender-selection' }, [
                            createElement('input', { type: 'radio', class: 'gender', name: 'gender' }),
                            createElement('label', { for: 'gender' }, 'Male'),
                            createElement('input', { type: 'radio', class: 'gender', name: 'gender' }),
                            createElement('label', { for: 'gender' }, 'Female'),
                        ]),
                        createElement('input', { class: 'input', type: 'email', placeholder: 'Email' }),
                        createElement('input', { class: 'input', type: 'password', placeholder: 'Password' }),
                    ]),
                    createElement('select', { class: 'country select-box' }, [
                        createElement('option', { value: 'armenia' }, 'Armenia'),
                        createElement('option', { value: 'usa' }, 'USA'),
                        createElement('option', { value: 'russia' }, 'Russia'),
                        createElement('option', { value: 'georgia' }, 'Georgia'),
                        createElement('option', { value: 'france' }, 'France'),
                    ]),
                    createElement('div', { class: 'submit-info' }, [
                        createElement('input', { id: 'send_email', class: 'send_email', type: 'checkbox' }),
                        createElement('label', { for: 'send_email' }, 'Send me Email'),
                        createElement('button', { class: 'btn' }, 'Submit'),
                    ]),
                    createElement('div', { class: 'social-buttons' }, [
                        createElement('button', { class: 'social-button' }, [
                            createElement('img', { src: 'src/images/Facebook_Logo.png', alt: 'Facebook Logo', class: 'social-logo' }),
                        ]),
                        createElement('button', { class: 'social-button' }, [
                            createElement('img', { src: 'src/images/Google.png', alt: 'Google Logo', class: 'social-logo' }),
                        ]),
                        createElement('button', { class: 'social-button' }, [
                            createElement('img', { src: 'src/images/inkedin.webp', alt: 'LinkedIn Logo', class: 'social-logo' }),
                        ]),
                    ]),
                ]),
            ]),
        ]),
    ]);

    render(container, document.body);
}

createRegistrationLayout();
