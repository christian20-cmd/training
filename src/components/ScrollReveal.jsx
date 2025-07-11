import PropTypes from 'prop-types';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ScrollReveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

ScrollReveal.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
};

export default ScrollReveal;
