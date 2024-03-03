import styles from './BatchScanning.module.css';
import { type Variants, motion } from 'framer-motion';

const config = {
  initialScale: 1,
  finalScale: 0.75,
  scaleIncrement: 0.125,
  transitionIncrement: 0.25,
  translateYFactor: 9,
  rotateXAngle: 50,
  initialDelay: 0.75,
  initialDuration: 0.5,
};

const makeAnimationVariants = (index: number): Variants => ({
  hidden: {
    y: '100%',
    scale: config.initialScale * (1 + config.scaleIncrement * index),
    bottom: 0,
    position: 'absolute',
    transformStyle: 'preserve-3d',
    rotateX: config.rotateXAngle,
    left: 0,
  },
  show: {
    y: `${index * config.translateYFactor}%`,
    scale: config.finalScale * (1 + config.scaleIncrement * index),
    rotateX: 0,
    transition: {
      type: 'spring',
      delay: config.initialDelay + config.transitionIncrement * index,
      duration: config.initialDuration + config.transitionIncrement * index,
    },
  },
});

export const BatchScanning = () => {
  return (
    <motion.div className={styles.root} initial="hidden" animate="show">
      {[1, 2, 3].map((index) => (
        <div className={styles.file} key={index}>
          <motion.div variants={makeAnimationVariants(index)}>
            <img src="/features/batch-scanning/file.png" alt="File" />
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};
