    // components/IntroStory.js
    import React, { useState, useEffect } from "react";
    import { motion } from "framer-motion";
    import { useNavigate } from "react-router-dom";

    const IntroStory = () => {
    const navigate = useNavigate();
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
        setShowContent(true);
        }, 3000); 

        return () => clearTimeout(timer);
    }, []);

    const handleEndIntro = () => {
        navigate("/"); 
    };

    return (
        <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: showContent ? 0 : 1 }}
        transition={{ duration: 1.5 }}
        onAnimationComplete={showContent ? handleEndIntro : null}
        className="flex items-center justify-center h-screen bg-black"
        >
        {!showContent && (
            <div className="text-center text-white">
            <motion.h1
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 60, damping: 20 }}
                className="text-4xl font-bold"
            >
                Welcome to Our E-Commerce Experience
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 2 }}
                className="mt-4 text-lg"
            >
                Discover the finest products curated just for you.
            </motion.p>
            </div>
        )}
        </motion.div>
    );
    };

    export default IntroStory;
