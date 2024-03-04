import { ExpandIcon } from '../icons/ExpandIcon';
import { CloseIcon } from '../icons/CloseIcon';

import styles from './SignStamp.module.css';

import { motion } from 'framer-motion';

const animationVariants = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
};

export const SignStamp = () => {
  return (
    <motion.div className={styles.root} initial="hidden" animate="show">
      <div className={styles.signature}>
        <motion.div variants={animationVariants}>
          <Popover>
            <img src="/features/sign-stamp/signature.png" alt="Signature" />
          </Popover>
        </motion.div>
      </div>
      <div className={styles.completed}>
        <motion.div variants={animationVariants}>
          <Popover>
            <img src="/features/sign-stamp/completed.png" alt="Completed" />
          </Popover>
        </motion.div>
      </div>
    </motion.div>
  );
};

interface IPopoverProps {
  children: React.ReactNode;
}

const Popover = ({ children }: IPopoverProps) => (
  <div className={styles.popover}>
    <div>
      <button className={styles.btn}>
        <CloseIcon />
      </button>
      <button className={styles.btn}>
        <ExpandIcon />
      </button>
    </div>
    {children}
  </div>
);
