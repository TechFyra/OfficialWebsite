interface ServiceDetailCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    color?: string;
  }
  
  export default function ServiceDetailCard({ icon, title, description, color = "indigo" }: ServiceDetailCardProps) {
    const colorMap = {
      indigo: "from-[--color-indigo-400] to-[--color-purple-400]",
      pink: "from-[--color-pink-400] to-[--color-purple-400]",
      blue: "from-[--color-blue-400] to-[--color-cyan-400]",
    };
  
    return (
      <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all hover:scale-105 duration-300">
        <div className={`w-20 h-20 bg-gradient-to-r ${colorMap[color as keyof typeof colorMap]} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-[--color-navy-900] mb-4">{title}</h3>
        <p className="text-[--color-gray-700] leading-relaxed">{description}</p>
      </div>
    );
  }
  