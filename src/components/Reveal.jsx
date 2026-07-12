import { motion } from 'framer-motion';

export default function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-100px' }} // Triggers when 100px into view
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.22, 1, 0.36, 1] // Premium easing curve
      }}
    >
      {children}
    </motion.div>
  );
}