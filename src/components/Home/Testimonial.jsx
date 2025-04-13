const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechSolutions",
    content:
      "This team delivered our project 2 weeks early with flawless quality. Absolute professionals!",
    avatar: "/testimonials/profile2.avif",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    content:
      "Our website traffic increased by 200% after their redesign. Stunning work!",
    avatar: "/testimonials/profile.avif",
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Founder, GreenStart",
    content: "Responsive, creative, and budget-friendly. Will hire them again!",
    avatar: "/testimonials/profile3.avif",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full px-6 py-8">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-2">
          Trusted by Innovators
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Hear from those who've worked with us
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-100"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
