function openFilm(url) {
    window.open(url, '_blank');
}

// Verhindere, dass der Button-Click das Card-Click auslöst
document.querySelectorAll('.watch-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

function showHomepage() {
    document.querySelectorAll('.current-page').forEach(el => el.classList.add('hidden'));
    document.getElementById('homepage').classList.remove('hidden');
}
