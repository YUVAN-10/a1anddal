import { getPlaceholderImage } from '../../utils/placeholderImage'
import poojaEssentials from '../../assets/pooja-essentials-banner.png'

export const banners = [
  {
    id: 'banner-hero-0',
    image: poojaEssentials,
    imageOnly: true,
    ctaLink: '/products',
    order: 0,
    active: true,
  },
  {
    id: 'banner-hero-1',
    image: poojaEssentials,
    title: 'Festive Fragrance Collection',
    subtitle: 'Curated incense, dhoop and dhuna gift sets for every celebration, up to 30% off',
    ctaLabel: 'Shop the Collection',
    ctaLink: '/products?category=cat-collections',
    order: 1,
    active: true,
  },
   {
    id: 'banner-hero-2',
    image: poojaEssentials,
    title: 'Experience Divine Fragrance Every Day',
    subtitle:
      'Discover premium incense sticks and authentic dhuna crafted for pooja, meditation and peaceful living.',
    ctaLabel: 'Explore Products',
    ctaLink: '/products',
    order: 2,
    active: true,
  },
]
