import { MapPin, Users, Globe, Heart, Award, Shield } from 'lucide-react'

const About = () => {
  const stats = [
    { label: "Population", value: "50,000+", icon: Users },
    { label: "Area", value: "153.38 km²", icon: MapPin },
    { label: "Founded", value: "1611", icon: Globe },
    { label: "Province", value: "Zambales", icon: Heart }
  ]

  const values = [
    {
      title: "Community First",
      description: "We prioritize the needs and interests of our local community, ensuring that every piece of content serves the people of Iba and Zambales.",
      icon: Heart
    },
    {
      title: "Authentic Information",
      description: "We are committed to providing accurate, reliable, and up-to-date information about local events, news, and developments.",
      icon: Shield
    },
    {
      title: "Cultural Preservation",
      description: "We celebrate and promote the rich cultural heritage of Iba and Zambales, helping to preserve traditions for future generations.",
      icon: Award
    }
  ]

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Iba Zambales
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Discover the rich history, vibrant culture, and promising future of our beloved municipality
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-secondary-900 mb-2">{stat.value}</div>
                <div className="text-secondary-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Iba */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                The Heart of Zambales
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                Iba is the capital municipality of Zambales province, located in the Central Luzon region of the Philippines. Founded in 1611, our town has a rich history that spans over four centuries, from Spanish colonial times to the present day.
              </p>
              <p className="text-lg text-secondary-600 mb-6">
                Nestled between the South China Sea and the Zambales Mountains, Iba offers a unique blend of coastal beauty and mountain landscapes. Our community is known for its warm hospitality, rich cultural heritage, and commitment to sustainable development.
              </p>
              <p className="text-lg text-secondary-600">
                Today, Iba continues to grow as a center for education, commerce, and tourism while preserving the traditions and values that make our community special.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 h-80 rounded-lg flex items-center justify-center">
              <MapPin className="h-24 w-24 text-primary-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              To be the premier digital platform connecting the people of Iba and Zambales with local news, events, and information that matters to our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our History
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              From Spanish colonial times to modern development, explore the key milestones in Iba's rich history
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
                1611
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">Foundation</h3>
                <p className="text-secondary-600">Iba was established as a Spanish mission settlement, marking the beginning of our town's recorded history.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
                1901
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">American Period</h3>
                <p className="text-secondary-600">Iba became the capital of Zambales province during the American colonial period.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
                1946
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">Independence</h3>
                <p className="text-secondary-600">Philippines gained independence, and Iba continued to serve as the provincial capital.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
                2024
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">Modern Era</h3>
                <p className="text-secondary-600">Iba continues to grow as a center for education, commerce, and tourism while preserving its rich heritage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl text-primary-100 mb-8">
            Stay connected with the latest news, events, and stories from Iba and Zambales. Be part of our growing digital community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#newsletter" className="btn-secondary bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-3">
              Subscribe to Newsletter
            </a>
            <a href="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-3">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 