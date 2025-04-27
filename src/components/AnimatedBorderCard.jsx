import { motion } from "framer-motion";

const AnimatedBorderCard = ({
  children,
  borderWidth = "4px",
  borderRadius = "16px",
  colors = ["#f97316", "#eab308", "#84cc16"],
  duration = 6,
  className = "",
  contentClassName = "",
}) => {
  const gradientVariants = {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  const gradientColors = colors.join(", ");

  return (
    <div className={`relative p-[2px] rounded-[${borderRadius}] ${className}`}>
      {/* Animated background border */}
      <motion.div
        className="absolute inset-0 rounded-[inherit] z-0"
        style={{
          background: `linear-gradient(90deg, ${gradientColors})`,
          backgroundSize: "300% 300%",
          borderRadius: borderRadius,
        }}
        variants={gradientVariants}
        animate="animate"
      />

      {/* Inner white content */}
      <div
        className={`relative bg-white z-10 h-full w-full ${contentClassName}`}
        style={{
          borderRadius: `calc(${borderRadius} - ${borderWidth})`,
          padding: "20px", // you can adjust
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AnimatedBorderCard;
