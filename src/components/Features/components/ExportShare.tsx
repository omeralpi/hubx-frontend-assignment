import { motion } from 'framer-motion';
import styles from './ExportShare.module.css';

const animations = [
  {
    src: '/features/export-share/arrow.svg',
    alt: 'Arrow',
    initial: { left: '50%', y: '100%' },
    animate: {
      left: 0,
      y: '-50%',
      x: '-175%',
      transition: { duration: 0.5, delay: 0.5 },
    },
  },
  {
    src: '/features/export-share/pdf.svg',
    alt: 'PDF',
    initial: { left: '50%', y: '100%' },
    animate: {
      left: 0,
      y: '-15%',
      x: '-20%',
      rotate: -25,
      transition: { duration: 0.5, delay: 0.75 },
    },
  },
  {
    src: '/features/export-share/jpg.svg',
    alt: 'JPG',
    initial: { left: '50%', x: '-50%', y: '100%' },
    animate: { y: '-35%', transition: { duration: 0.5, delay: 1 } },
  },
  {
    src: '/features/export-share/txt.svg',
    alt: 'TXT',
    initial: { right: '50%', y: '100%' },
    animate: {
      right: 0,
      y: '-15%',
      x: '20%',
      rotate: 25,
      transition: { duration: 0.5, delay: 1.25 },
    },
  },
];

export const ExportShare = () => {
  return (
    <div className={styles.root}>
      {animations.map(({ src, alt, initial, animate }, index) => (
        <motion.div initial={initial} animate={animate} key={index}>
          <img src={src} alt={alt} />
        </motion.div>
      ))}
    </div>
  );
};
