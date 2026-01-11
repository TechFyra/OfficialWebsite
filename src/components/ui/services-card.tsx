interface ServicesCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServicesCard({ icon, title, description }: ServicesCardProps) {
  return (
    <div className="flex flex-col items-center p-12 bg-white border-2 border-gray-200 rounded-3xl text-center max-w-sm mx-auto hover:scale-105 hover:border-indigo-300 hover:shadow-2xl transition-all">
      <div className="w-24 h-24 bg-gradient-to-r from-[--color-indigo-600] to-[--color-purple-600] rounded-2xl flex items-center justify-center mb-8 shadow-lg">
        <span className="text-4xl">{icon}</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
