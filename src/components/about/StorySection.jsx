import { motion, useReducedMotion } from 'framer-motion'
import storyImage from '../../assets/about-workshop.jpg'
import LotusOutline from '../common/decor/LotusOutline'
import styles from './StorySection.module.css'

export default function StorySection() {
  const reduceMotion = useReducedMotion()
  const ease = [0.22, 1, 0.36, 1]

  const imageVariants = {
    hidden: { opacity: 0, x: reduceMotion ? 0 : -60 },
    visible: { opacity: 1, x: 0, transition: { duration: reduceMotion ? 0.01 : 0.8, ease } },
  }

  const textContainerVariants = {
    hidden: { opacity: 0, x: reduceMotion ? 0 : 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: reduceMotion ? 0.01 : 0.8,
        ease,
        staggerChildren: reduceMotion ? 0 : 0.15,
        delayChildren: reduceMotion ? 0 : 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0.01 : 0.6, ease } },
  }

  return (
    <section className={`section ${styles.section}`}>
      <LotusOutline className={styles.lotus} size={300} rotate={14} floatDuration={32} />
      <div className={`container ${styles.storyGrid}`}>
        <motion.img
          src={storyImage}
          alt="A1 Anddal & Co — premium pooja essentials"
          className={styles.storyImage}
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        />
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span className="eyebrow" variants={itemVariants}>
            Our Story
          </motion.span>
          <motion.h2 className={styles.storyHeading} variants={itemVariants}>
            Crafting Divine Fragrance, One Stick at a Time
          </motion.h2>
          <motion.p variants={itemVariants}>
            A1 Anddal & Co. is dedicated to bringing purity, tradition, and divine fragrance into every home. We manufacture premium incense and pooja products that create a peaceful and spiritually uplifting atmosphere for daily prayers, meditation, temples, and home wellness.
          </motion.p>
          <motion.p variants={itemVariants}>
           Crafted using carefully selected natural ingredients and traditional methods, our products are known for their rich aroma, long-lasting fragrance, and superior quality. Every product reflects our commitment to preserving Indian traditions while delivering an authentic aromatic experience.

Our product range includes premium sambrani cups, dhuna dhoops, incense cones, loban sticks, sambrani powder, camphor, and aromatic products designed to fill every space with positive energy. Every fragrance is thoughtfully created to inspire devotion, serenity, and inner peace.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
