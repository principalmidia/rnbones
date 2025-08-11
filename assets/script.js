const images = [
  { id: '1bb6kApyklh3090B7xl4l0e1tIFqAXf91', alt: 'IMG_6488' },
  { id: '1WVlzsOwwLXgOeBZIa0KY47S4FV7r8elN', alt: 'IMG_6637' },
  { id: '1-Onb_B00OfdG4CppV9sOZh_Eb_tp3O7K', alt: 'IMG_7978' },
  { id: '1AgsUXKRW8D4f5hsmFQLjfK9P5VDkmOYP', alt: 'PHOTO-2025-07-23-18-42-12 2' },
  { id: '1CSKitMb1Bo45XWt4dpLVfhimCzlHG7Yu', alt: 'PHOTO-2025-07-23-18-42-12 5' },
  { id: '1v71tl14iAurJBdLFyj5i_jk3G9Fi_X9g', alt: 'PHOTO-2025-07-23-18-42-12 10' },
  { id: '11qSZiLgTlL5PLJZNd8YDc4h0mQkeDUjs', alt: 'PHOTO-2025-07-23-18-42-12 12' },
  { id: '1-P8bsFg1A2ILI_WGFhvyJX-Sq3Vu194-', alt: 'PHOTO-2025-07-23-18-42-12 15' },
  { id: '1FHtn0Fm7yguvwtDJcLjzisqK5yWJhMk-', alt: 'PHOTO-2025-07-23-18-42-12 23' },
  { id: '1ujFDpEWnHixF6A4l7uYtYML4E_klFi7Z', alt: 'PHOTO-2025-07-23-18-42-12 30' },
  { id: '1Ly-WqHM8gcD8vpmaCNG_Vg3aAM-n2dDT', alt: 'PHOTO-2025-07-23-18-42-12 36' },
  { id: '1OAEPPiWlaNqjQx0EFmQ6qxILMWIn0mc6', alt: 'PHOTO-2025-07-23-18-42-12 40' },
  { id: '1-O9-d4usuuC7Wxn3KZoWjEEmCj4EyAJ9', alt: 'PHOTO-2025-07-23-18-42-12 41' },
  { id: '10WcNKafTCI6eXZL2_uxJnDRP0dNcoKPT', alt: 'PHOTO-2025-07-23-18-42-13 4' },
  { id: '1VTeg6GKkP4FPeAlCbIMusOjVPmiTS3Hj', alt: 'PHOTO-2025-07-23-18-42-13 14' },
  { id: '1dKrlKp9MzeoYNkvzMvcZavkF2GYipvjI', alt: 'PHOTO-2025-07-23-18-42-13 17' }
];

function buildGallery() {
  const gallery = document.getElementById('gallery');
  images.forEach((img) => {
    const el = document.createElement('img');
    el.src = `https://drive.google.com/uc?export=view&id=${img.id}`;
    el.alt = img.alt;
    el.loading = 'lazy';
    gallery.appendChild(el);
  });
}

function handleScroll() {
  document.querySelectorAll('.fade').forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  buildGallery();
  handleScroll();
});

window.addEventListener('scroll', handleScroll);
