export default function setupGalleriesInteractivity() {
    const galleries = document.querySelectorAll<HTMLElement>('[data-project-gallery]');

    galleries.forEach((gallery) => {
        const dialog = gallery.querySelector<HTMLDialogElement>('[data-gallery-preview-dialog]');
        const previewImage = gallery.querySelector<HTMLImageElement>('[data-gallery-preview-image]');
        const closeButton = gallery.querySelector<HTMLButtonElement>('[data-gallery-preview-close]');
        const triggers = gallery.querySelectorAll<HTMLButtonElement>('[data-gallery-preview-trigger]');

        if (!dialog || !previewImage || !closeButton) {
            return;
        }

        const closePreview = () => {
            dialog.close();
            previewImage.removeAttribute('src');
            previewImage.alt = '';
        };

        triggers.forEach((trigger) => {
            trigger.addEventListener('click', () => {
                const src = trigger.dataset.galleryPreviewSrc;
                const alt = trigger.dataset.galleryPreviewAlt ?? '';

                if (!src) {
                    return;
                }

                previewImage.src = src;
                previewImage.alt = alt;

                dialog.showModal();
                closeButton.focus();
            });
        });

        closeButton.addEventListener('click', closePreview);

        dialog.addEventListener('click', (event) => {
            if (event.target === dialog) {
                closePreview();
            }
        });

        dialog.addEventListener('close', () => {
            previewImage.removeAttribute('src');
            previewImage.alt = '';
        });
    });
}