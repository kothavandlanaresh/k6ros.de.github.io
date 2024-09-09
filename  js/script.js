document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('column-form');
    const contentDiv = document.getElementById('column-content');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        
        // Create a new column
        const columnHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
        `;
        
        // Add to the content div
        contentDiv.innerHTML = columnHTML;
        
        // Clear the form
        form.reset();
    });
});
