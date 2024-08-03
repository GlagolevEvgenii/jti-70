const embedEngine = {
    init() {
        embedEngine.binds();
    },
    binds() {
        const checkboxes = document.querySelectorAll('.check-holder input[type="radio"]');
        const submitButton = document.getElementById('submitButton');

        function toggleButton() {
            const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
            submitButton.disabled = !isChecked;
        }

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', toggleButton);
        });

        // Initial check in case some checkboxes are pre-checked
        toggleButton();
    },
};
document.addEventListener("DOMContentLoaded", embedEngine.init);
