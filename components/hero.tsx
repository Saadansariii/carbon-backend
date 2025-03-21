"use client";

import { useState, useEffect, useRef } from "react";
import carbon1 from "@/app/assets/carbon1.png"; 
import carbon3 from "@/app/assets/carbon3.jpeg";
import carbon5 from "@/app/assets/carbon5.jpeg";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// Define a more sophisticated color palette
const colors = {
  primary: {
    50: "#FEF2F2",
    100: "#FEE2E2",
    200: "#FECACA",
    300: "#FCA5A5",
    400: "#F87171",
    500: "#EF4444",
    600: "#DC2626",
    700: "#B91C1C",
    800: "#991B1B",
    900: "#7F1D1D",
  },
  secondary: {
    50: "#F0F9FF",
    100: "#E0F2FE",
    200: "#BAE6FD",
    300: "#7DD3FC",
    400: "#38BDF8",
    500: "#0EA5E9",
    600: "#0284C7",
    700: "#0369A1",
    800: "#075985",
    900: "#0C4A6E",
  },
  neutral: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },
};

const products = [
  {
    id: 1,
    title: "DC Motor Carbon Brush",
    subtitle: "EG-224 High-Performance Carbon Brush",
    description:
      "The EG-224 Carbon Brush is designed for heavy-duty DC motors, providing exceptional conductivity and durability. Crafted from high-grade carbon, it ensures minimal wear and 99-hour continuous operation. Ideal for industrial applications, generators, and power tools.",
    image: carbon1,
    features: [
      "Durable material",
      "High conductivity",
      "Heavy-duty use",
      "99-hour lifespan",
    ],
    ctaText: "View Details",
    ctaSecondary: "View Specifications",
    color: colors.primary[600],
  },
  {
    id: 2,
    title: "Grinder Carbon Brush",
    subtitle: "Industrial-Grade Replacement Brushes",
    description:
      "Our Grinder Carbon Brushes are built for high-speed angle grinders and power tools, ensuring consistent power transmission and long-lasting durability. Designed with self-lubricating carbon material, these brushes reduce wear and enhance tool performance.",
    image: carbon5,
    features: [
      "Self-lubricating",
      "High power transfer",
      "Reduces sparking",
      "Fits most grinders",
    ],
    ctaText: "View Details",
    ctaSecondary: "Find Compatible Models",
    color: colors.primary[700],
  },
  {
    id: 3,
    title: "Armature Carbon Brush",
    subtitle: "Premium-Quality Conductive Brushes",
    description:
      "The Armature Carbon Brush is engineered for rotating electrical machines like generators, drills, and motors. It provides low-friction contact, minimizes energy loss, and ensures consistent electrical conduction for prolonged motor life.",
    image: carbon3,
    features: [
      "Stable contact",
      "Low resistance",
      "Wear-resistant",
      "High-speed use",
    ],
    ctaText: "View Details",
    ctaSecondary: "Check Compatibility",
    color: colors.primary[800],
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: false, amount: 0.1 });
  const controls = useAnimation();
  const imageControls = useAnimation();

  // Auto-advance slides
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  //   }, 7000);
  //   return () => clearInterval(interval);
  // }, []);

  // Animation controls
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      imageControls.start("visible");
    }
  }, [isInView, controls, imageControls]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2 + custom * 0.1,
      },
    }),
  };

  return (
    <div
      ref={heroRef}
      className="h- max-w-6xl mx-auto w-full overflow-hidden bg-white pt-20 md:pt-24"
    >
      <div className="container mx-auto px-4 py-8 md:py-12">
        <AnimatePresence mode="wait">
          <div
            key={currentSlide}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {/* Left side - Product details */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={textVariants}
              className="order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span
                  className="inline-block px-4 py-1 text-sm font-medium rounded-full mb-6"
                  style={{
                    backgroundColor: `${products[currentSlide].color}15`,
                    color: products[currentSlide].color,
                  }}
                >
                  {products[currentSlide].subtitle}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl lg:text-4xl font-bold mb-6 leading-tight text-neutral-900"
              >
                {products[currentSlide].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-md text-neutral-600 mb-8 max-w-xl"
              >
                {products[currentSlide].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8"
              >
                <h3 className="text-sm font-semibold text-neutral-500 mb-4">
                  KEY FEATURES
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {products[currentSlide].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={featureVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex items-center gap-2"
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{
                          backgroundColor: products[currentSlide].color,
                        }}
                      ></div>
                      <span className="text-neutral-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  className="p-2 lg:px-6 lg:py-3 text-white lg:font-medium rounded-md flex items-center gap-2 hover:shadow-lg transition-all duration-300"
                  style={{ backgroundColor: products[currentSlide].color }}
                >
                  {products[currentSlide].ctaText}
                  <ArrowRight size={16} />
                </button>
                <button className="p-2 lg:px-6 lg:py-3 bg-white text-neutral-800 font-medium rounded-md border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-colors duration-300">
                  {products[currentSlide].ctaSecondary}
                </button>
              </motion.div>

              {/* Slide indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex space-x-3 mt-12"
              >
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className="group"
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <div className="relative h-1 w-10 bg-neutral-200 rounded-full overflow-hidden">
                      <div
                        className={`absolute inset-0 transition-all duration-300 rounded-full ${
                          currentSlide === index
                            ? "w-full"
                            : "w-0 group-hover:w-1/3"
                        }`}
                        style={{
                          backgroundColor: products[currentSlide].color,
                        }}
                      ></div>
                    </div>
                  </button>
                ))}
              </motion.div>
            </motion.div>

            {/* Right side - Product image */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={imageVariants}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div
                  className="absolute inset-0 opacity-10 z-0"
                  style={{ backgroundColor: products[currentSlide].color }}
                ></div>
                <motion.div
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="relative z-10"
                >
                  <img
                    src={
                      typeof products[currentSlide].image === "string"
                        ? products[currentSlide].image
                        : products[currentSlide].image.src
                    }
                    alt={products[currentSlide].title}
                    className="w-full h-auto object-cover rounded-2xl"
                  />

                  {/* <img
                    src={products[currentSlide].image || "/placeholder.svg"}
                    alt={products[currentSlide].title}
                    className="w-full h-auto object-cover rounded-2xl"
                  /> */}
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full z-0"
                  style={{
                    backgroundColor: `${products[currentSlide].color}20`,
                  }}
                ></motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute -top-4 -left-4 w-20 h-20 rounded-full z-0"
                  style={{
                    backgroundColor: `${products[currentSlide].color}15`,
                  }}
                ></motion.div>
              </div>

              {/* Navigation arrows */}
              <div className="absolute -bottom-4 right-4 flex space-x-3 z-20">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-full bg-white shadow-md text-neutral-700 hover:text-neutral-900 transition-colors duration-300"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-full text-white shadow-md transition-colors duration-300"
                  style={{ backgroundColor: products[currentSlide].color }}
                  aria-label="Next slide"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}
