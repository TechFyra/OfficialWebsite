interface ServicesCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServicesCard({ icon, title, description }: ServicesCardProps) {
  return (
    <div className="flex flex-col items-center p-12 bg-[--color-white-10] backdrop-blur-xl border border-[--color-white-20] rounded-3xl text-center max-w-sm mx-auto hover:scale-105 transition-all hover:shadow-2xl">
      <div className="w-24 h-24 bg-gradient-to-r from-[--color-purple-400] to-[--color-pink-400] rounded-2xl flex items-center justify-center mb-8 shadow-2xl">
        <span className="text-4xl">{icon}</span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
      <p className="text-[--color-gray-200] leading-relaxed">{description}</p>
    </div>
  );
}