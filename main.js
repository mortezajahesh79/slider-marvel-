document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            const current = document.querySelector('.box.active');
            if (current) {
                current.classList.remove('active');
            }
            box.classList.add('active');
        });
    });
});
