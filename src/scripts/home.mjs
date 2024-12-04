import { UI } from './UI.mjs';  
import { bloggers } from './bloggers.mjs';  

function createHomeLayout() {
    const container = UI.createElement('div', { class: 'container-root' }, [
        UI.createElement('header', { class: 'header' }, [
            UI.createElement('div', { class: 'buttons' }, [
                UI.createElement('a', { href: 'index.html', class: 'btn' }, 'Log In'),
                UI.createElement('a', { href: 'registration.html', class: 'btn' }, 'Sign Up'),
            ]),
            UI.createElement('div', { class: 'content' }, [
                UI.createElement('h1', { class: 'heading' }, 'Welcome to Your Workspace'),
                UI.createElement('p', { class: 'text' }, 'Explore your postcards and connect with bloggers.'),
            ]),
        ]),

        UI.createElement('main', { class: 'main-section' }, [
            UI.createElement('nav', { class: 'sidebar' }, [
                UI.createElement('h2', { class: '_title' }, 'Bloggers'),
                ...bloggers.map(blogger =>
                    UI.createElement('div', { class: 'blogger' }, [
                        UI.createElement('img', { 
                            src: blogger.avatar, 
                            alt: `${blogger.firstName} ${blogger.lastName}`, 
                            class: 'avatar' 
                        }),
                        UI.createElement('h3', { class: 'name' }, `${blogger.firstName} ${blogger.lastName}`)
                    ])
                ),
            ]),

    
            UI.createElement('div', { class: 'sections' }, [
                UI.createElement('section', { class: 'box' }, [
                    UI.createElement('a', { href: 'newPostForm.html', class: 'btn' }, 'Create Post'),
                    UI.createElement('h2', { class: '_title' }, 'Posts'),
                    UI.createElement('div', { id: 'postsContainer' })  
                ]),
                UI.createElement('footer', { class: 'footer' }, 'footer content here'),
            ]),
        ]),
    ]);

 
    UI.render(container, document.querySelector('body'));

    displayPosts();  
}

createHomeLayout();


export function displayPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = ''; 

    posts.forEach((post, index) => {
        const postElement = UI.createElement('div', { class: 'post' }, [
            UI.createElement('h2', {}, post.title),
            UI.createElement('p', {}, post.story.substring(0, 100) + '...'),
            UI.createElement('img', {
                src: post.imageLink,
                alt: post.title,
                class: 'post-image small'
            }),
            UI.createElement('button', {
                class: 'btn delete-btn',
                onclick: () => deletePost(index)
            }, 'Delete Post')
        ]);

        postsContainer.appendChild(postElement);
    });
}

export function deletePost(index) {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.splice(index, 1);  
    localStorage.setItem('posts', JSON.stringify(posts));  
    displayPosts();  
}
