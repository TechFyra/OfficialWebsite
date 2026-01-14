import Link from "next/link";

type PageCTAProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  href: string;
};

export default function PageCTA({
  title,
  subtitle,
  buttonText,
  href,
}: PageCTAProps) {
  return (
    <section className="w-full bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-28 mt-32">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
          {title}
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          {subtitle}
        </p>

        <Link
          href={href}
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-12 py-5 text-white text-lg font-semibold shadow-lg hover:scale-105 transition-all"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
