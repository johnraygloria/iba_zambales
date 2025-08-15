import { MapPin, Clock, Phone, Globe, Camera, Star } from 'lucide-react'

const Tourism = () => {
  const attractions = [
    {
      id: 1,
      name: "Iba Beach Front",
      description: "Pristine white sand beaches with crystal clear waters, perfect for swimming, sunbathing, and water sports. Enjoy stunning sunset views and fresh seafood from local restaurants.",
      category: "Beach",
      location: "Iba Beach Front, Iba, Zambales",
      bestTime: "November to May",
      contact: "+63 XXX XXX XXXX",
      rating: 4.8,
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      name: "Mount Tapulao",
      description: "The highest peak in Zambales offering challenging hiking trails and breathtaking panoramic views of the province. Perfect for adventure seekers and nature enthusiasts.",
      category: "Mountain",
      location: "Palauig, Zambales",
      bestTime: "October to April",
      contact: "+63 XXX XXX XXXX",
      rating: 4.6,
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      name: "Potipot Island",
      description: "A small, picturesque island known for its white sandbar and turquoise waters. Ideal for day trips, snorkeling, and beach camping.",
      category: "Island",
      location: "Candelaria, Zambales",
      bestTime: "November to May",
      contact: "+63 XXX XXX XXXX",
      rating: 4.7,
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      name: "Iba Heritage District",
      description: "Explore the rich history of Iba through preserved colonial architecture, historical landmarks, and cultural sites that tell the story of Zambales.",
      category: "Cultural",
      location: "Iba Town Center, Iba, Zambales",
      bestTime: "Year-round",
      contact: "+63 XXX XXX XXXX",
      rating: 4.5,
      image: "/api/placeholder/400/300"
    }
  ]

  const travelTips = [
    {
      title: "Best Time to Visit",
      content: "The dry season from November to May offers the best weather for beach activities and outdoor adventures. Avoid the rainy season (June to October) for water-based activities."
    },
    {
      title: "Getting Around",
      content: "Tricycles and jeepneys are the main modes of transportation within Iba. For longer distances, buses and vans connect Iba to other parts of Zambales and Metro Manila."
    },
    {
      title: "Local Cuisine",
      content: "Don't miss the fresh seafood, especially the famous Zambales mangoes, and local delicacies like longganisa and puto. Try the local restaurants for authentic Filipino flavors."
    },
    {
      title: "Accommodation",
      content: "Iba offers various accommodation options from budget-friendly guesthouses to comfortable hotels. Book in advance during peak season (December to May)."
    }
  ]

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Iba & Zambales
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Explore pristine beaches, majestic mountains, rich culture, and warm hospitality in the heart of Central Luzon
          </p>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Must-Visit Attractions
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              From pristine beaches to majestic mountains, discover the natural beauty and cultural heritage of our region
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {attractions.map((attraction) => (
              <div key={attraction.id} className="card overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="h-64 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <Camera className="h-16 w-16 text-primary-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                      {attraction.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-accent-500 fill-current" />
                      <span className="text-sm font-medium text-secondary-700">{attraction.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {attraction.name}
                  </h3>
                  
                  <p className="text-secondary-600 mb-4 line-clamp-3">
                    {attraction.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-secondary-600 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{attraction.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-secondary-600 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>Best time: {attraction.bestTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-secondary-600 text-sm">
                      <Phone className="h-4 w-4" />
                      <span>{attraction.contact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Travel Tips & Information
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Everything you need to know to plan your perfect trip to Iba and Zambales
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {travelTips.map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {tip.title}
                </h3>
                <p className="text-secondary-600">
                  {tip.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Culture */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Rich Cultural Heritage
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                Iba and Zambales are home to diverse cultural traditions, from the indigenous Aeta communities to Spanish colonial influences. Experience traditional festivals, local crafts, and authentic Filipino hospitality.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                  <span className="text-secondary-700">Traditional festivals and celebrations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                  <span className="text-secondary-700">Local handicrafts and souvenirs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                  <span className="text-secondary-700">Authentic Filipino cuisine</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                  <span className="text-secondary-700">Historical landmarks and museums</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent-100 to-accent-200 h-80 rounded-lg flex items-center justify-center">
              <Globe className="h-24 w-24 text-accent-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Plan Your Visit</h2>
          <p className="text-xl text-primary-100 mb-8">
            Ready to explore the beauty of Iba and Zambales? Get in touch with us for personalized travel recommendations and local insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+63XXXXXXXXX" className="btn-secondary bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-3">
              Call Us
            </a>
            <a href="mailto:info@ibazambales.com" className="btn-secondary bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-3">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tourism 