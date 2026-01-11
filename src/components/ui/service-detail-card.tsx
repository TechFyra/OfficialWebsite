interface ServiceDetailCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
}

export default function ServiceDetailCard({ icon, title, description, color = "indigo" }: ServiceDetailCardProps) {
  const colorMap = {
    indigo: "from-[--color-indigo-600] to-[--color-purple-600]",
    pink: "from-[--color-pink-600] to-[--color-purple-600]",
    blue: "from-[--color-blue-400] to-[--color-indigo-600]",
  };

  return (
    <div className="bg-white border-2 border-gray-200 rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:border-indigo-300 transition-all hover:scale-105 duration-300">
      <div className={`w-20 h-20 bg-gradient-to-r ${colorMap[color as keyof typeof colorMap]} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
