interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-3xl p-10 hover:border-indigo-300 transition-all hover:scale-105 duration-300 shadow-lg hover:shadow-2xl">
      <div className="w-20 h-20 bg-gradient-to-r from-[--color-indigo-600] to-[--color-purple-600] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}