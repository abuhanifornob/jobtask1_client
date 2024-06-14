import { Link } from "react-router-dom";
import bannerImage from "../../assets/Images/tskBanner.jpg";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div className="bg-blue-600 text-white py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0 md:w-1/2">
          <motion.h1
            className="text-4xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-rose-800 font-extrabold">Welcome</span>
            <span className="text"> to</span> <br />
            TaskMaster
          </motion.h1>
          <motion.p
            className="text-lg lg:text-xl mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Enhance and improve your task management with our collaborative
            platform.
          </motion.p>
          <motion.button
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-emerald-700 hover:text-white transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.5 }}
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Link to={"/todoDashboard"}>Let’s Explore</Link>
          </motion.button>
        </div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.95 }}
        >
          <img
            src={bannerImage}
            alt="Banner"
            className="w-full h-auto rounded-lg shadow-lg hover:scale-110 transition duration-300 "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
