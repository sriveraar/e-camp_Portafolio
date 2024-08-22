document.querySelectorAll('.img_proyecto').forEach(function(img) {
    img.addEventListener('mouseover', function() {
        this.classList.add('scale2');
    });
    img.addEventListener('mouseout', function() {
        this.classList.remove('scale2');
    });
});
