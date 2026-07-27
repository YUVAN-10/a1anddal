import { getPlaceholderImage } from '../../utils/placeholderImage'

export const categories = [
  {
    id: 'cat-sambrani-cups',
    name: 'Sambrani Cups',
    slug: 'sambrani-cups',
    description: 'Aalayaa, A1 Pal and Singapore cup sambrani in sandal, black and dasangam',
    image: getPlaceholderImage({ width: 500, height: 500, tone: 'heading' }),
    order: 1,
  },
  {
    id: 'cat-incense',
    name: 'Incense Sticks (Agarbathi)',
    slug: 'incense-sticks-agarbathi',
    description: 'Loban candy sticks, sambrani and chandan agarbathi',
    image: getPlaceholderImage({ width: 500, height: 500, tone: 'primary' }),
    order: 2,
  },
  {
    id: 'cat-dhoop',
    name: 'Dhoop Cones',
    slug: 'dhoop-cones',
    description: 'Vasudhaa chandan cones for daily aarti',
    image: getPlaceholderImage({ width: 500, height: 500, tone: 'accent' }),
    order: 3,
  },
  {
    id: 'cat-dhuna',
    name: 'Dhuna Dhoops',
    slug: 'dhuna-dhoops',
    description: 'Jyothi dhuna dhoops for daily pooja and rituals',
    image: getPlaceholderImage({ width: 500, height: 500, tone: 'border' }),
    order: 4,
  },
  {
    id: 'cat-powder-resin',
    name: 'Sambrani Powder & Resin',
    slug: 'sambrani-powder-resin',
    description: 'Kanthrishti sambrani powder and Sathuragiri katti sambrani',
    image: getPlaceholderImage({ width: 500, height: 500, tone: 'section' }),
    order: 5,
  },
  {
    id: 'cat-camphor',
    name: 'Camphor',
    slug: 'camphor',
    description: 'Pacha karpooram — pure natural camphor',
    image: getPlaceholderImage({ width: 500, height: 500, tone: 'primary' }),
    order: 6,
  },
]

export const fragranceNotes = ['Loban', 'Sandal', 'Dasangam', 'Chandan', 'Sambrani', 'Camphor']
