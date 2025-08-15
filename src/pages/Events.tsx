import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, MapPin, Clock, Users, ArrowRight, Filter, Search } from 'lucide-react'

const Events = () => {
  const [selectedMonth, setSelectedMonth] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const months = [
    { id: 'all', name: 'All Months' },
    { id: 'january', name: 'January' },
    { id: 'february', name: 'February' },
    { id: 'march', name: 'March' },
    { id: 'april', name: 'April' },
    { id: 'may', name: 'May' },
    { id: 'june', name: 'June' }
  ]

  const events = [
    {
      id: 1,
      title: "Iba Town Fiesta 2024",
      date: "2024-02-15",
      endDate: "2024-02-20",
      time: "9:00 AM - 10:00 PM",
      location: "Iba Town Plaza",
      description: "Annual celebration featuring cultural performances, food festivals, and community activities. Join us for a week of fun, music, and local cuisine.",
      category: "Cultural",
      organizer: "Iba Municipal Government",
      contact: "+63 XXX XXX XXXX",
      image: "/api/placeholder/400/250",
      month: "february"
    },
    {
      id: 2,
      title: "Zambales Tourism Summit",
      date: "2024-03-10",
      endDate: "2024-03-10",
      time: "8:00 AM - 5:00 PM",
      location: "Iba Convention Center",
      description: "Regional tourism conference showcasing local attractions and development plans. Network with tourism professionals and discover new opportunities.",
      category: "Business",
      organizer: "Zambales Tourism Board",
      contact: "+63 XXX XXX XXXX",
      image: "/api/placeholder/400/250",
      month: "march"
    },
    {
      id: 3,
      title: "Iba Beach Cleanup Drive",
      date: "2024-01-27",
      endDate: "2024-01-27",
      time: "6:00 AM - 10:00 AM",
      location: "Iba Beach Front",
      description: "Community initiative to clean and preserve our beautiful beaches. Volunteers welcome! Bring your own gloves and water bottles.",
      category: "Community",
      organizer: "Iba Environmental Group",
      contact: "+63 XXX XXX XXXX",
      image: "/api/placeholder/400/250",
      month: "january"
    },
    {
      id: 4,
      title: "Local Farmers Market",
      date: "2024-01-20",
      endDate: "2024-01-20",
      time: "6:00 AM - 2:00 PM",
      location: "Iba Public Market",
      description: "Weekly farmers market featuring fresh local produce, handmade crafts, and traditional Filipino delicacies. Support local farmers and artisans.",
      category: "Community",
      organizer: "Iba Farmers Association",
      contact: "+63 XXX XXX XXXX",
      image: "/api/placeholder/400/250",
      month: "january"
    },
    {
      id: 5,
      title: "Youth Leadership Workshop",
      date: "2024-02-03",
      endDate: "2024-02-03",
      time: "9:00 AM - 4:00 PM",
      location: "Iba Youth Center",
      description: "Empowering young leaders through workshops on communication, leadership skills, and community development. Open to ages 16-25.",
      category: "Education",
      organizer: "Iba Youth Development Office",
      contact: "+63 XXX XXX XXXX",
      image: "/api/placeholder/400/250",
      month: "february"
    },
    {
      id: 6,
      title: "Traditional Dance Festival",
      date: "2024-03-25",
      endDate: "2024-03-25",
      time: "6:00 PM - 9:00 PM",
      location: "Iba Cultural Center",
      description: "Celebrate our rich cultural heritage through traditional Filipino dances performed by local dance groups and schools.",
      category: "Cultural",
      organizer: "Iba Cultural Affairs Office",
      contact: "+63 XXX XXX XXXX",
      image: "/api/placeholder/400/250",
      month: "march"
    }
  ]

  const filteredEvents = events.filter(event => {
    const matchesMonth = selectedMonth === 'all' || event.month === selectedMonth
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesMonth && matchesSearch
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Page Header */}
      <section className="bg-white border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
              Upcoming Events
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Discover exciting events, festivals, and activities happening in Iba, Zambales and the surrounding region
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Month Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-secondary-600" />
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {months.map((month) => (
                  <option key={month.id} value={month.id}>
                    {month.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-secondary-600">No events found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredEvents.map((event) => (
                <div key={event.id} className="card overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="h-48 bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center">
                    <Calendar className="h-16 w-16 text-accent-600" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium text-accent-600 bg-accent-50 px-2 py-1 rounded-full">
                        {event.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-secondary-900 mb-3">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-secondary-600 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-secondary-600 text-sm">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-secondary-600 text-sm">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-secondary-600 text-sm">
                        <Users className="h-4 w-4" />
                        <span>Organized by {event.organizer}</span>
                      </div>
                    </div>
                    
                    <p className="text-secondary-600 mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-secondary-500">
                        Contact: {event.contact}
                      </span>
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
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Have an Event to Share?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Submit your community events, festivals, or activities to be featured on our platform
          </p>
          <Link to="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-3">
            Submit Event
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Events 