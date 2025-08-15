import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'local-government', name: 'Local Government' },
    { id: 'tourism', name: 'Tourism' },
    { id: 'community', name: 'Community' },
    { id: 'business', name: 'Business' },
    { id: 'education', name: 'Education' },
    { id: 'health', name: 'Health' },
    { id: 'sports', name: 'Sports' }
  ]

  const newsArticles = [
    {
      id: 1,
      title: "Iba Municipal Hall Announces New Infrastructure Projects",
      excerpt: "The local government of Iba has unveiled plans for several infrastructure improvements including road repairs and public facilities upgrades. The projects aim to enhance the quality of life for residents and improve accessibility throughout the municipality.",
      category: "local-government",
      categoryName: "Local Government",
      date: "2024-01-15",
      readTime: "3 min read",
      author: "Iba Municipal Office",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Tourism Boom in Zambales: Record Visitor Numbers",
      excerpt: "Zambales province, including Iba, experiences unprecedented tourism growth with new attractions and improved accessibility. Local businesses report increased revenue and job opportunities.",
      category: "tourism",
      categoryName: "Tourism",
      date: "2024-01-14",
      readTime: "4 min read",
      author: "Zambales Tourism Board",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Local Fishermen Celebrate Successful Catch Season",
      excerpt: "Iba's fishing community reports excellent yields this season, contributing to the local economy and food security. The success is attributed to improved fishing practices and favorable weather conditions.",
      category: "community",
      categoryName: "Community",
      date: "2024-01-13",
      readTime: "2 min read",
      author: "Iba Fishermen Association",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "New Business District Development in Iba",
      excerpt: "A major development project is set to transform Iba's business landscape with new commercial spaces, restaurants, and retail outlets. The project is expected to create hundreds of jobs.",
      category: "business",
      categoryName: "Business",
      date: "2024-01-12",
      readTime: "3 min read",
      author: "Iba Business Council",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Iba National High School Achieves Academic Excellence",
      excerpt: "Students and teachers at Iba National High School celebrate outstanding academic performance in recent national assessments. The school's innovative teaching methods are credited for the success.",
      category: "education",
      categoryName: "Education",
      date: "2024-01-11",
      readTime: "3 min read",
      author: "Department of Education",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "New Health Center Opens in Iba",
      excerpt: "Residents of Iba welcome the opening of a modern health center providing primary healthcare services. The facility includes consultation rooms, a pharmacy, and emergency care services.",
      category: "health",
      categoryName: "Health",
      date: "2024-01-10",
      readTime: "2 min read",
      author: "Department of Health",
      image: "/api/placeholder/400/250"
    }
  ]

  const filteredNews = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-secondary-50">
      <section className="bg-white border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
              Latest News
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Stay informed with the latest news, updates, and stories from Iba, Zambales and the surrounding region
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
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-secondary-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredNews.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-secondary-600">No news articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((article) => (
                <article key={article.id} className="card overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <Tag className="h-16 w-16 text-primary-400" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                        {article.categoryName}
                      </span>
                      <div className="flex items-center gap-1 text-secondary-500 text-sm">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-secondary-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-secondary-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-secondary-500 text-sm">
                        <Calendar className="h-3 w-3" />
                        {new Date(article.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      <span className="text-xs text-secondary-500">By {article.author}</span>
                    </div>
                    
                    <Link 
                      to={`/news/${article.id}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                    >
                      Read Full Article
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-primary-100 mb-8">
            Subscribe to our newsletter and never miss important news and updates from Iba, Zambales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-secondary-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="btn-secondary bg-white text-primary-600 hover:bg-primary-50">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News 