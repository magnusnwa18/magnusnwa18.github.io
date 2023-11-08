document.addEventListener("DOMContentLoaded", function () {
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent scrolling of background content
    }

    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Restore scrolling of background content
    }

    // Open Education Modal
    document.querySelector(".open-modal[data-target='educationModal']").addEventListener("click", () => {
        openModal("educationModal");
    });

    // Close Education Modal
    document.getElementById("closeEducationModal").addEventListener("click", () => {
        closeModal("educationModal");
    });

    // Open Certification Modal
    document.querySelector(".open-modal[data-target='certificationModal']").addEventListener("click", () => {
        openModal("certificationModal");
    });

    // Close Certification Modal
    document.getElementById("closeCertificationModal").addEventListener("click", () => {
        closeModal("certificationModal");
    });

    // Open Formula 1 Modal
    document.querySelector(".open-modal[data-target='Formula1Modal']").addEventListener("click", () => {
        openModal("Formula1Modal");
    });

    // Close Formula 1 Modal
    document.getElementById("closeFormula1Modal").addEventListener("click", () => {
        closeModal("Formual1Modal");
    });

    // Close the modal when clicking outside of it
    window.addEventListener("click", (event) => {
        if (event.target.classList.contains("modal")) {
            closeModal("educationModal"); // Adjust the modal ID accordingly
            closeModal("certificationModal"); // Adjust the modal ID accordingly
            closeModal("Formula1Modal"); // Adjust the modal ID accordingly
        }
    });
});
