import { getPlaceholderImage } from '../../utils/placeholderImage'
import sambraniCupsImg from '../../assets/products/sambrani-dhoop-cups-1.jpg'
import incenseImg from '../../assets/products/sri-chakraa-chandan-agarbathi-1.jpg'
import dhoopConeImg from '../../assets/products/dhoop-cones-1.jpg'
import dhunaImg from '../../assets/products/jyothi-dhuna-dhoops-1.jpg'
import powderResinImg from '../../assets/products/kanthrishti-sambrani-powder-1.jpg'

export const categories = [
  {
    id: 'cat-sambrani-cups',
    name: 'Sambrani Cups',
    slug: 'sambrani-cups',
    description: 'Aalayaa, A1 Pal and Singapore cup sambrani in sandal, black and dasangam',
    image: sambraniCupsImg,
    order: 1,
  },
  {
    id: 'cat-incense',
    name: 'Incense Sticks (Agarbathi)',
    slug: 'incense-sticks-agarbathi',
    description: 'Loban candy sticks, sambrani and chandan agarbathi',
    image: incenseImg,
    order: 2,
  },
  {
    id: 'cat-dhoop',
    name: 'Dhoop Cones',
    slug: 'dhoop-cones',
    description: 'Vasudhaa chandan cones for daily aarti',
    image: dhoopConeImg,
    order: 3,
  },
  {
    id: 'cat-dhuna',
    name: 'Dhuna Dhoops',
    slug: 'dhuna-dhoops',
    description: 'Jyothi dhuna dhoops for daily pooja and rituals',
    image: dhunaImg,
    order: 4,
  },
  {
    id: 'cat-powder-resin',
    name: 'Sambrani Powder & Resin',
    slug: 'sambrani-powder-resin',
    description: 'Kanthrishti sambrani powder and Sathuragiri katti sambrani',
    image: powderResinImg,
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
