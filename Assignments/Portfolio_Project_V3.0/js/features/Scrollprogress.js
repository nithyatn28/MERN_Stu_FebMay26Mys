function updateScrollProgress() {
    const progressBar = document.getElementById('myBar');
    
    
    const winScroll = window.scrollY || document.documentElement.scrollTop;
    

    const height = document.documentElement.scrollHeight - window.innerHeight;
    
    // Calculate the percentage (0 to 100)
    if (height > 0) {
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    }
}

window.addEventListener('scroll', updateScrollProgress);