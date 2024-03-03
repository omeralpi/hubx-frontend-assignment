import styles from './AdvancedFilters.module.css';
import { motion } from 'framer-motion';

const animationVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
};

export const AdvancedFilters = () => {
  return (
    <motion.div className={styles.root} initial="hidden" animate="show">
      <div className={styles.bar}>
        <motion.div variants={animationVariants}>
          <img src="/features/advanced-filters/left-bar.png" alt="Left Bar" />
        </motion.div>
      </div>
      <div className={styles.bar}>
        <motion.div variants={animationVariants}>
          <img src="/features/advanced-filters/right-bar.png" alt="Right Bar" />
        </motion.div>
      </div>
    </motion.div>
  );
};
