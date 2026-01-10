interface ValueCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
  }
  
  export default function ValueCard({ icon, title, description }: ValueCardProps) {
    return (
      <div className="bg-gradient-to-br from-[--color-navy-900] to-[--color-navy-800] rounded-3xl p-10 border border-[--color-indigo-400]/20 hover:border-[--color-indigo-400]/50 transition-all hover:scale-105 duration-300 shadow-xl">
        <div className="w-20 h-20 bg-gradient-to-r from-[--color-blue-400] to-[--color-purple-400] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-[--color-gray-400] leading-relaxed">{description}</p>
      </div>
    );
  }
  