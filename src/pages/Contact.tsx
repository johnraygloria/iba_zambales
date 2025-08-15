import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Iba Municipal Hall, Iba, Zambales, Philippines",
      link: "https://maps.google.com/?q=Iba,Zambales,Philippines"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+63 XXX XXX XXXX",
      link: "tel:+63XXXXXXXXX"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@ibazambales.com",
      link: "mailto:info@ibazambales.com"
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Monday - Friday: 8:00 AM - 5:00 PM",
      link: null
    }
  ]

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Page Header */}
      <section className="bg-white border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Get in touch with us for questions, feedback, or to share your local news and events
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-secondary-900 mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a 
                    href={info.link}
                    className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-secondary-600">{info.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-secondary-200">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="h-6 w-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-secondary-900">Send us a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="news">News Submission</option>
                    <option value="event">Event Submission</option>
                    <option value="feedback">Feedback</option>
                    <option value="tourism">Tourism Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-field"
                    placeholder="Type your message here..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 py-3"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 h-64 rounded-lg flex items-center justify-center">
                <MapPin className="h-16 w-16 text-primary-400" />
                <span className="ml-4 text-primary-600 font-medium">Interactive Map Coming Soon</span>
              </div>
              
              {/* Additional Information */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
                <h3 className="text-xl font-bold text-secondary-900 mb-4">Visit Our Office</h3>
                <p className="text-secondary-600 mb-4">
                  Our office is located at the Iba Municipal Hall, easily accessible from the main highway. 
                  We welcome visitors during office hours and are happy to assist you in person.
                </p>
                <div className="space-y-2 text-sm text-secondary-600">
                  <p><strong>Parking:</strong> Free parking available in front of the municipal hall</p>
                  <p><strong>Accessibility:</strong> Wheelchair accessible entrance and facilities</p>
                  <p><strong>Languages:</strong> English, Filipino, and local dialects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-secondary-600">
              Find answers to common questions about our platform and services
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="border border-secondary-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-secondary-900 mb-2">
                How can I submit news or events?
              </h3>
              <p className="text-secondary-600">
                You can submit news articles or events through our contact form above, or email us directly at info@ibazambales.com. Please include relevant details and contact information.
              </p>
            </div>
            
            <div className="border border-secondary-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-secondary-900 mb-2">
                How often is the news updated?
              </h3>
              <p className="text-secondary-600">
                We update our news section regularly, typically several times per week. Breaking news and important updates are posted as soon as possible.
              </p>
            </div>
            
            <div className="border border-secondary-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-secondary-900 mb-2">
                Can I advertise on your platform?
              </h3>
              <p className="text-secondary-600">
                Yes, we offer advertising opportunities for local businesses. Please contact us for more information about our advertising packages and rates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 