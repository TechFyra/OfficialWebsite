import React from "react";


// interface ServicesCardProps {
//   title: string;
//   description: string;
//   image: string;
// }


// const ServicesCard = ({ title, description, image }: ServicesCardProps) => {
//   return (
//     <div
//       className="
//         relative w-full max-w-[520px] h-[320px]
//         rounded-3xl overflow-hidden
//         transition-all duration-300
//         hover:-translate-y-2
//         hover:shadow-[0_35px_80px_rgba(168,85,247,0.45)]
//       "
//       style={{
//         backgroundImage: `url(${image})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40" />


//       {/* Content */}
//       <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
//         <h3 className="text-white text-2xl font-bold mb-4">
//           {title}
//         </h3>


//         <p className="text-white/90 text-sm leading-relaxed max-w-md">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// };


// export default ServicesCard;
interface ServicesCardProps {
  title: string;
  description: string;
  image: string;
}


export default function ServicesCard({
  title,
  description,
  image,
}: ServicesCardProps) {
  return (
    <div
      className="relative w-full max-w-[520px] h-[320px] rounded-3xl overflow-hidden
                 transition-all duration-300 hover:-translate-y-2
                 hover:shadow-[0_35px_80px_rgba(168,85,247,0.45)]"
      style={{
        backgroundImage: `url("${image}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />


      {/* Text */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
        <h3 className="text-white text-2xl font-bold mb-4">
          {title}
        </h3>
        <p className="text-white/90 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}