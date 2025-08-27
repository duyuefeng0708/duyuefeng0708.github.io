import { ArrowRight, MapPin, GraduationCap, Brain, Shield, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Dr. Yuefeng Du
              </h1>
              <p className="text-xl text-blue-600 font-medium">
                Researcher & Lecturer
              </p>
              <div className="flex items-center text-gray-600 space-x-2">
                <MapPin size={16} />
                <span>Department of Computer Science, City University of Hong Kong</span>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              I am currently a researcher and lecturer in the Department of Computer Science at City University of Hong Kong. 
              I was a Ph.D student in the{' '}
              <a 
                href="https://cyber.cs.cityu.edu.hk/en/home/index.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Prof. WANG Cong's research group
              </a>{' '}
              and I received my Ph.D degree in June 2022.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex items-center space-x-2">
                <span>View Publications</span>
                <ArrowRight size={16} />
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <span>Teaching Experience</span>
                <BookOpen size={16} />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-lg">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-xl">
                YD
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Section */}
      <section className="py-16 bg-white rounded-2xl shadow-sm mb-16">
        <div className="px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research Focus</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Brain className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI & Blockchain</h3>
                <p className="text-gray-700">
                  Exploring the intersection of Artificial Intelligence and Blockchain technology, 
                  developing robust blockchain systems for AI agents.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Shield className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Blockchain Security</h3>
                <p className="text-gray-700">
                  Applying AI to solve challenges in blockchain security and efficiency, 
                  enhancing the robustness of decentralized systems.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <GraduationCap className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI in Education</h3>
                <p className="text-gray-700">
                  Developing intelligent systems to support personalized learning paths 
                  and novel teaching methodologies.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <ArrowRight className="text-orange-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Future Technology</h3>
                <p className="text-gray-700">
                  Believing the synergy between AI and blockchain will be pivotal in shaping 
                  our future technological landscape.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              My research explores the intersection of <em>Artificial Intelligence</em> and <em>Blockchain technology</em>, 
              with a focus on developing robust blockchain systems for AI agents and applying AI to solve challenges 
              in blockchain security and efficiency. I believe the synergy between these fields will be pivotal 
              in shaping our future technological landscape in the coming decade.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Philosophy</h2>
          <blockquote className="text-xl md:text-2xl font-medium mb-4 italic">
            "Pessimism of the Intellect, Optimism of the Will"
          </blockquote>
          <p className="text-blue-100 text-lg">
            — Antonio Gramsci
          </p>
          <p className="text-blue-100 mt-6 max-w-3xl mx-auto">
            This motto always reminds me to overcome hidden biases and keep the courage to attempt difficult things.
          </p>
        </div>
      </section>
    </div>
  )
}

export default HomePage

