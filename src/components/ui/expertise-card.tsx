interface ExpertiseCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ExpertiseCard({ icon, title, description }: ExpertiseCardProps) {
  return (
    <div className="flex flex-col items-center p-16 bg-[--color-white-10] backdrop-blur-xl border border-[--color-white-20] rounded-3xl text-center max-w-lg mx-auto group hover:scale-105 transition-all duration-500 hover:shadow-2xl">
      <div className="w-32 h-32 bg-gradient-to-r from-[--color-indigo-400] to-[--color-purple-400] rounded-3xl flex items-center justify-center mb-12 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
        <span className="text-5xl">{icon}</span>
      </div>
      <h3 className="text-3xl font-black text-white mb-8 group-hover:text-[--color-indigo-400] transition-all">{title}</h3>
      <p className="text-[--color-gray-200] leading-relaxed text-lg group-hover:text-white transition-all">{description}</p>
    </div>
  );
}