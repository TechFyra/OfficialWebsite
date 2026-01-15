import React from "react";

interface ValueCardProps {
  title: string;
  description: string;
  image: string;
}

const ValueCard: React.FC<ValueCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="relative group">
      {/* Background shadow / halo */}
      <div
        className="
          absolute -inset-4 rounded-[2rem]
          bg-purple-500/0
          blur-2xl
          transition-all duration-300
          group-hover:bg-purple-500/20
        "
      />

      {/* Actual card */}
      <div
        className="
          relative h-[360px] rounded-3xl overflow-hidden
          transition-all duration-300 ease-out
          group-hover:-translate-y-2
          group-hover:shadow-2xl
          cursor-pointer
        "
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55 transition-all duration-300 group-hover:bg-black/45" />

        {/* Centered content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-white">
          <h3 className="text-xl font-bold mb-4">
            {title}
          </h3>

          <p className="text-sm leading-relaxed text-white/90">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValueCard;