import { createElement, render } from './utils.js';

function addSubmitListener() {
    const postForm = document.getElementById('postForm');
    postForm.addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const story = document.getElementById('story').value;
    const imageLink = document.getElementById('imageLink').value;

    if (!isValidImageUrl(imageLink)) {
        alert('Please enter a valid image URL ending with .jpg, .jpeg, .png, or .gif');
        return;
    }

    const post = createPost(title, story, imageLink);
    savePost(post);
    goToHomePage();
}

function createPost(title, story, imageLink) {
    return {
        title: title,
        story: story,
        imageLink: imageLink
    };
}

function savePost(post) {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
}

function goToHomePage() {
    window.location.href = '/home.html';
}

function isValidImageUrl(url) {
    return url.match(/\.(jpeg|jpg|gif|png)$/) !== null;
}

function deleteAllPosts() {
    localStorage.removeItem('posts');
}

function initializePage() {
    const container = createElement('div', { class: 'container-root' }, [
        createElement('header', { class: 'header' }, [
            createElement('a', { class: 'btn', href: "/home.html" }, 'Home')
        ]),
        createElement('div', { id: "createPost" }, [
            createElement('h1', { class: "heading" }, 'Create Post'),
            createElement('div', { class: "form-wrapper" }, [
                createElement('form', { id: "postForm" }, [
                    createElement('label', { for: "title" }, "Title"),
                    createElement('input', { type: "text", id: "title", name: "title", class: "input" }),
                    createElement('label', { for: "story" }, "Story"),
                    createElement('textarea', { id: "story", name: "story", class: "input" }),
                    createElement('label', { for: "imageLink" }, "Image Link"),
                    createElement('input', { type: "url", id: "imageLink", name: "imageLink", class: "input", placeholder: "e.g. https://example.com/image.jpg" }),
                    createElement('button', { type: "submit", class: "btn" }, 'Create')
                ])
            ])
        ])
    ]);

    render(container, document.querySelector('body'));
    addSubmitListener();
}

initializePage();

