const customCursor = document.createElement('img');
        customCursor.src = './assets/cursor/cursor_white.svg';
        customCursor.classList.add('custom-cursor');
        document.body.appendChild(customCursor);

        document.addEventListener('mousemove', (e) => {
            customCursor.style.left = e.pageX - customCursor.width / 3 + 'px';
            customCursor.style.top = e.pageY - customCursor.height / 4.5 + 'px';
        });

        document.addEventListener('scroll', (e) => {
            // Update the cursor position
            customCursor.style.left = e.pageX - customCursor.width / 3 + 'px';
            customCursor.style.top = e.pageY - customCursor.height / 4.5 + 'px';
        });