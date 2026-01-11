interface ExpertiseCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ExpertiseCard({ icon, title, description }: ExpertiseCardProps) {
  return (
    <div className="flex flex-col items-center p-16 bg-white border-2 border-gray-200 rounded-3xl text-center max-w-lg mx-auto group hover:scale-105 hover:border-indigo-300 transition-all duration-500 hover:shadow-2xl">
      <div className="w-32 h-32 bg-gradient-to-r from-[--color-indigo-600] to-[--color-purple-600] rounded-3xl flex items-center justify-center mb-12 group-hover:rotate-6 transition-all duration-500 shadow-lg">
        <span className="text-5xl">{icon}</span>
      </div>
      <h3 className="text-3xl font-black text-gray-900 mb-8 group-hover:text-[--color-indigo-600] transition-all">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-all">{description}</p>
    </div>
  );
}