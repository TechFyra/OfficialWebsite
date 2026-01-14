import Image from "next/image";

interface ExpertiseCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

export default function ExpertiseCard({
  title,
  description,
  image,
}: ExpertiseCardProps) {
  return (
    <div className="
      relative
      rounded-3xl
      overflow-hidden
      /* High-quality frosted glass look */
      bg-white/40 
      backdrop-blur-md
      shadow-2xl
      border border-white/20
      /* INCREASED SIZE: larger padding and min-height */
      p-12 
      min-h-[400px] 
      flex items-end /* Position text at bottom to let image shine */
      group
      transition-all duration-500 hover:scale-[1.02]
    ">

      {/* BACKGROUND IMAGE - Brightness & Visibility Fix */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          /* Changed opacity from 30 to 80 or 100 for maximum visibility */
          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
        />
        {/* Subtle overlay so text remains readable without washing out the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-lg">
        <h3 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
          {title}
        </h3>
        <p className="text-xl text-gray-800 font-medium leading-relaxed">
          {description}
        </p>
      </div>

    </div>
  );
}