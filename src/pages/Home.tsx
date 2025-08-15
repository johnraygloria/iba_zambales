import { Link } from 'react-router-dom'
import { Calendar, MapPin, Clock, ArrowRight, Newspaper, Users, Camera } from 'lucide-react'

const Home = () => {
  const featuredNews = [
    {
      id: 1,
      title: "Iba Municipal Hall Announces New Infrastructure Projects",
      excerpt: "The local government of Iba has unveiled plans for several infrastructure improvements including road repairs and public facilities upgrades.",
      category: "Local Government",
      date: "2024-01-15",
      readTime: "3 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Tourism Boom in Zambales: Record Visitor Numbers",
      excerpt: "Zambales province, including Iba, experiences unprecedented tourism growth with new attractions and improved accessibility.",
      category: "Tourism",
      date: "2024-01-14",
      readTime: "4 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Local Fishermen Celebrate Successful Catch Season",
      excerpt: "Iba's fishing community reports excellent yields this season, contributing to the local economy and food security.",
      category: "Community",
      date: "2024-01-13",
      readTime: "2 min read",
      image: "/api/placeholder/400/250"
    }
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Iba Town Fiesta 2024",
      date: "February 15-20, 2024",
      location: "Iba Town Plaza",
      description: "Annual celebration featuring cultural performances, food festivals, and community activities."
    },
    {
      id: 2,
      title: "Zambales Tourism Summit",
      date: "March 10, 2024",
      location: "Iba Convention Center",
      description: "Regional tourism conference showcasing local attractions and development plans."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to Iba, Zambales
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Discover the latest news, events, and stories from the heart of Zambales province. 
            Stay connected with your community and explore the beauty of our region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/news" className="btn-primary text-lg px-8 py-3">
              Read Latest News
            </Link>
            <Link to="/tourism" className="btn-secondary text-lg px-8 py-3">
              Explore Tourism
            </Link>
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Featured News
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Stay informed with the latest happenings in Iba and the Zambales region
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredNews.map((news) => (
              <article key={news.id} className="card overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <Camera className="h-16 w-16 text-primary-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                      {news.category}
                    </span>
                    <div className="flex items-center gap-1 text-secondary-500 text-sm">
                      <Clock className="h-3 w-3" />
                      {news.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-secondary-600 mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>
                  <Link 
                    to={`/news/${news.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/news" className="btn-primary text-lg px-8 py-3">
              View All News
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Mark your calendar for exciting events happening in Iba and Zambales
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Calendar className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-secondary-600 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-secondary-600 mb-3">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <p className="text-secondary-600 mb-4">
                      {event.description}
                    </p>
                    <Link 
                      to={`/events/${event.id}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/events" className="btn-primary text-lg px-8 py-3">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Local Highlights Section */}
      <section className="py-16 bg-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Discover Iba & Zambales
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Explore the rich culture, beautiful landscapes, and vibrant community of our region
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <Newspaper className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-secondary-900 mb-2">Local News</h3>
                <p className="text-secondary-600">
                  Stay updated with community happenings, government updates, and local stories
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-secondary-900 mb-2">Community</h3>
                <p className="text-secondary-600">
                  Connect with fellow residents and participate in local events and activities
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                <Camera className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-secondary-900 mb-2">Tourism</h3>
                <p className="text-secondary-600">
                  Explore beautiful beaches, mountains, and cultural sites in Zambales
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 