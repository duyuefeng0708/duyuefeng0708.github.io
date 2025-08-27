import { Star, Users, Calendar, Award, BookOpen, Code, Shield, Globe } from 'lucide-react'

function TeachingPage() {
  const currentCourses = [
    {
      code: "CS 6290",
      title: "Privacy-enhancing Technologies",
      level: "Postgraduate",
      role: "Course Leader",
      period: "Semester B, 2022-2025",
      students: "50-60 graduate students",
      programs: ["MSCS", "MSEC", "MSMIT", "MSDS", "PGCINSE"],
      description: "Advanced concepts and latest progress on emerging information security and privacy techniques, including distributed consensus, cryptocurrency, decentralized ledger technologies, and decentralized finance",
      innovation: "Spearheaded course evolution by integrating Decentralized Finance (DeFi) and novel blockchain technologies",
      assessment: "60% coursework (reading assignments + group projects), 40% examination",
      feedback: [
        { semester: "Sem B, 2024-2025", rating: "4.46/5.0", median: "4.5" },
        { semester: "Sem B, 2023-2024", rating: "4.07/5.0", median: "5.0" },
        { semester: "Sem B, 2022-2023", rating: "4.32/5.0", median: "4.0" }
      ],
      icon: Shield,
      color: "blue"
    },
    {
      code: "CS 2310",
      title: "Computer Programming",
      level: "Undergraduate",
      role: "Course Leader",
      period: "Semester A, 2023-2025",
      students: "~50 undergraduate students",
      programs: ["82% CS majors", "18% BENG1/DDEG programs"],
      description: "Essential programming skills for object-oriented programming, laying foundation for other CS courses",
      innovation: "Redesigned curriculum with C++ focus, updated learning objectives for industry alignment",
      assessment: "50% coursework (labs, assignments, quiz), 50% final examination",
      feedback: [
        { semester: "Sem A, 2024-2025", rating: "4.00/5.0", median: "4.0" },
        { semester: "Sem A, 2023-2024", rating: "4.14/5.0", median: "4.0" }
      ],
      icon: Code,
      color: "green"
    },
    {
      code: "GE 1361",
      title: "Digital Literacy: New Technologies, Society & You",
      level: "Undergraduate",
      role: "Course Co-Instructor",
      period: "Semester B, 2024-2025",
      students: "Multiple sections",
      programs: ["General Education"],
      description: "Team-based learning on emerging technologies, covering social media platforms and personal security",
      innovation: "Designed new syllabus covering ethical and legal issues of social media, misinformation, cybersecurity practices",
      assessment: "Team-based projects and assessments",
      feedback: [],
      icon: Globe,
      color: "purple"
    }
  ]

  const pastCourses = [
    {
      code: "CS 2311",
      title: "Computer Programming",
      role: "Course Co-Instructor",
      period: "Semester A, 2022-2024",
      students: "~100 undergraduate students",
      description: "Restructured C++ curriculum emphasizing contemporary programming paradigms",
      feedback: [
        { semester: "Sem A, 2023-2024", rating: "3.81/5.0", median: "4.0" },
        { semester: "Sem A, 2022-2023", rating: "3.57/5.0", median: "4.0" }
      ]
    }
  ]

  const taExperience = [
    { semester: "Sem B, 2021-2022", course: "CS4293 Topics in Cybersecurity" },
    { semester: "Sem A, 2021-2022", course: "CS4394 Information Security and Management" },
    { semester: "Sem B, 2020-2021", course: "CS4293 Topics in Cybersecurity" },
    { semester: "Sem A, 2020-2021", course: "GE2338 Internet Applications and Security" },
    { semester: "Sem B, 2019-2020", course: "CS4293 Topics in Cybersecurity" },
    { semester: "Sem A, 2019-2020", course: "CS2311 Computer Programming" },
    { semester: "Sem B, 2018-2019", course: "CS4293 Topics in Cybersecurity" },
    { semester: "Sem A, 2018-2019", course: "CS1102 Introduction to Computer Studies" }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-800",
      green: "bg-green-50 border-green-200 text-green-800",
      purple: "bg-purple-50 border-purple-200 text-purple-800"
    }
    return colors[color] || colors.blue
  }

  const getIconBg = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600"
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Teaching Experience</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Passionate about education and committed to fostering the next generation of computer scientists 
          through innovative teaching methodologies and comprehensive curriculum design.
        </p>
      </div>

      {/* Current Courses */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
          <BookOpen className="mr-3 text-blue-600" size={32} />
          Current Courses (2022-Present)
        </h2>
        
        <div className="space-y-8">
          {currentCourses.map((course, index) => {
            const Icon = course.icon
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${getIconBg(course.color)}`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{course.code}: {course.title}</h3>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getColorClasses(course.color)}`}>
                            {course.level}
                          </span>
                          <span className="text-gray-600 font-medium">{course.role}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {course.period}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Course Details</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div className="flex items-center">
                          <Users size={16} className="mr-2 text-gray-400" />
                          <span>{course.students}</span>
                        </div>
                        <div>
                          <span className="font-medium">Programs: </span>
                          {course.programs.join(", ")}
                        </div>
                        <div>
                          <span className="font-medium">Assessment: </span>
                          {course.assessment}
                        </div>
                      </div>
                    </div>

                    {course.feedback.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Student Feedback</h4>
                        <div className="space-y-2">
                          {course.feedback.map((fb, fbIndex) => (
                            <div key={fbIndex} className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">{fb.semester}</span>
                              <div className="flex items-center space-x-2">
                                <Star size={16} className="text-yellow-500 fill-current" />
                                <span className="font-medium text-gray-900">{fb.rating}</span>
                                <span className="text-gray-500">(median {fb.median})</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-gray-900">Course Focus: </span>
                      <span className="text-gray-700">{course.description}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Innovation: </span>
                      <span className="text-gray-700">{course.innovation}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Past Courses */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Past Courses</h2>
        
        <div className="space-y-6">
          {pastCourses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{course.code}: {course.title}</h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-gray-600 font-medium">{course.role}</span>
                    <span className="text-gray-500">{course.period}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-center">
                      <Users size={16} className="mr-2 text-gray-400" />
                      <span>{course.students}</span>
                    </div>
                    <p>{course.description}</p>
                  </div>
                </div>

                {course.feedback.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Student Feedback</h4>
                    <div className="space-y-2">
                      {course.feedback.map((fb, fbIndex) => (
                        <div key={fbIndex} className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">{fb.semester}</span>
                          <div className="flex items-center space-x-2">
                            <Star size={16} className="text-yellow-500 fill-current" />
                            <span className="font-medium text-gray-900">{fb.rating}</span>
                            <span className="text-gray-500">(median {fb.median})</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teaching Assistant Experience */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Teaching Assistant Experience</h2>
        
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <p className="text-gray-700 mb-6">
            Teaching assistant duties at <em>City University of Hong Kong</em> during Ph.D studies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {taExperience.map((ta, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="font-medium text-gray-900 text-sm mb-1">{ta.semester}</div>
                <div className="text-gray-700 text-sm">{ta.course}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TeachingPage

