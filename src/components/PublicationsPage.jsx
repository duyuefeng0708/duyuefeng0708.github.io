import { FileText, ExternalLink, Star, Calendar, Users, Award } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

function PublicationsPage() {
  const publications = [
    // 2025 Publications
    {
      year: 2025,
      papers: [
        {
          title: "DCrowd: Decentralized Mobile Crowdsensing via Proof of Task Assignment Blockchain",
          authors: ["Hao Zeng", "Helei Cui", "Xiaoli Zhang", "Bo Zhang", "Yuefeng Du", "Bin Guo", "Zhiwen Yu"],
          venue: "IEEE Transactions on Dependable and Secure Computing (TDSC)",
          status: "accepted",
          selected: true,
          type: "journal"
        },
        {
          title: "ECMO: An Efficient and Confidential Outsourcing Protocol for Medical Data",
          authors: ["Xiangyi Meng", "Yuefeng Du", "Cong Wang"],
          venue: "IEEE Open Journal of the Computer Society (OJCS)",
          volume: "6",
          pages: "37--48",
          selected: true,
          type: "journal"
        },
        {
          title: "When Differential Privacy Meets Query Control: A Hybrid Framework for Practical Range Query Leakage Quantification and Mitigation",
          authors: ["Xinyan Li", "Yuefeng Du", "Cong Wang"],
          venue: "IEEE Transactions on Services Computing (TSC)",
          volume: "18",
          number: "2",
          pages: "1137--1151",
          selected: true,
          type: "journal"
        },
        {
          title: "SmartUpdater: Enabling Transparent, Automated, and Secure Maintenance of Stateful Smart Contracts",
          authors: ["Xiaoli Zhang", "Yiqiao Song", "Yuefeng Du", "Chengjun Cai", "Hongbing Cheng", "Ke Xu", "Qi Li"],
          venue: "IEEE Transactions on Software Engineering (TSE)",
          volume: "51",
          number: "4",
          pages: "1266--1283",
          selected: true,
          type: "journal"
        },
        {
          title: "Non-intrusive and Unconstrained Keystroke Inference in VR Platforms via Infrared Side Channel",
          authors: ["Tao Ni", "Yuefeng Du", "Qingchuan Zhao", "Cong Wang"],
          venue: "Network and Distributed System Security Symposium (NDSS)",
          selected: true,
          type: "conference"
        },
        {
          title: "SoK: Stablecoin Designs, Risks, and the Stablecoin LEGO",
          authors: ["Shengchen Ling", "Yuefeng Du", "Yajin Zhou", "Lei Wu", "Cong Wang", "Xiaohua Jia", "Houmin Yan"],
          venue: "Computing Research Repository in arXiv (CoRR)",
          volume: "abs/2506.17622",
          selected: true,
          type: "preprint"
        }
      ]
    },
    // 2024 Publications
    {
      year: 2024,
      papers: [
        {
          title: "Proof of Unlearning: Definitions and Instantiation",
          authors: ["Jia-Si Weng", "Shenglong Yao", "Yuefeng Du", "Junjie Huang", "Jian Weng", "Cong Wang"],
          venue: "IEEE Transactions on Information Forensics and Security (TIFS)",
          volume: "19",
          pages: "3309--3323",
          selected: true,
          type: "journal"
        },
        {
          title: "DWare: Cost-Efficient Decentralized Storage With Adaptive Middleware",
          authors: ["Yuefeng Du", "Anxin Zhou", "Cong Wang"],
          venue: "IEEE Transactions on Information Forensics and Security (TIFS)",
          volume: "19",
          pages: "8529--8543",
          selected: true,
          type: "journal"
        },
        {
          title: "PIR-TEE: Powering Privacy and Performance for Lightweight Blockchain Clients",
          authors: ["Xiangyi Meng", "Yuefeng Du", "Cong Wang"],
          venue: "IEEE International Conference on Mobile Ad-hoc and Smart Systems (MSN)",
          pages: "415--422",
          type: "conference"
        }
      ]
    },
    // 2023 Publications
    {
      year: 2023,
      papers: [
        {
          title: "Towards Practical Auditing of Dynamic Data in Decentralized Storage",
          authors: ["Huayi Duan", "Yuefeng Du", "Leqian Zheng", "Cong Wang", "Man Ho Au", "Qian Wang"],
          venue: "IEEE Transactions on Dependable and Secure Computing (TDSC)",
          volume: "20",
          number: "1",
          pages: "708--723",
          selected: true,
          type: "journal"
        },
        {
          title: "PEBA: Enhancing User Privacy and Coverage of Safe Browsing Services",
          authors: ["Yuefeng Du", "Huayi Duan", "Lei Xu", "Helei Cui", "Cong Wang", "Qian Wang"],
          venue: "IEEE Transactions on Dependable and Secure Computing (TDSC)",
          volume: "20",
          number: "5",
          pages: "4343--4358",
          selected: true,
          type: "journal"
        },
        {
          title: "RangeQC: A Query Control Framework for Range Query Leakage Quantification and Mitigation",
          authors: ["Xinyan Li", "Yuefeng Du", "Cong Wang"],
          venue: "IEEE International Conference on Distributed Computing Systems (ICDCS)",
          pages: "749--759",
          selected: true,
          type: "conference"
        }
      ]
    },
    // 2022 Publications
    {
      year: 2022,
      papers: [
        {
          title: "Enhancing Cryptocurrency Blocklisting: A Secure, Trustless, and Effective Realization",
          authors: ["Yuefeng Du", "Anxin Zhou", "Cong Wang"],
          venue: "IEEE International Conference on Distributed Computing Systems (ICDCS)",
          selected: true,
          type: "conference"
        }
      ]
    },
    // 2021 Publications
    {
      year: 2021,
      papers: [
        {
          title: "Enabling Secure and Efficient Decentralized Storage Auditing with Blockchain",
          authors: ["Yuefeng Du", "Huayi Duan", "Anxin Zhou", "Cong Wang", "Man Ho Au", "Qian Wang"],
          venue: "IEEE Transactions on Dependable and Secure Computing (TDSC)",
          selected: true,
          type: "journal"
        },
        {
          title: "WebEnclave: Protect Web Secrets from browser extensions with Software Enclave",
          authors: ["Xinyu Wang", "Yuefeng Du", "Cong Wang", "Qian Wang", "Liming Fang"],
          venue: "IEEE Transactions on Dependable and Secure Computing (TDSC)",
          type: "journal"
        }
      ]
    },
    // 2020 Publications
    {
      year: 2020,
      papers: [
        {
          title: "Towards Privacy-assured and Lightweight On-chain Auditing of Decentralized Storage",
          authors: ["Yuefeng Du", "Huayi Duan", "Anxin Zhou", "Cong Wang", "Man Ho Au", "Qian Wang"],
          venue: "IEEE International Conference on Distributed Computing Systems (ICDCS)",
          pages: "201--211",
          selected: true,
          type: "conference"
        }
      ]
    }
  ]

  const getTypeIcon = (type) => {
    switch (type) {
      case 'journal':
        return <FileText size={16} className="text-blue-600" />
      case 'conference':
        return <Users size={16} className="text-green-600" />
      case 'preprint':
        return <Calendar size={16} className="text-orange-600" />
      default:
        return <FileText size={16} className="text-gray-600" />
    }
  }

  const getTypeBadge = (type) => {
    const badges = {
      journal: "bg-blue-100 text-blue-800 border-blue-200",
      conference: "bg-green-100 text-green-800 border-green-200",
      preprint: "bg-orange-100 text-orange-800 border-orange-200"
    }
    return badges[type] || "bg-gray-100 text-gray-800 border-gray-200"
  }

  const highlightAuthor = (authors, targetAuthor = "Yuefeng Du") => {
    return authors.map((author, index) => (
      <span key={index}>
        {author === targetAuthor ? (
          <strong className="text-blue-600">{author}</strong>
        ) : (
          author
        )}
        {index < authors.length - 1 && ", "}
      </span>
    ))
  }

  const totalPapers = publications.reduce((sum, year) => sum + year.papers.length, 0)
  const selectedPapers = publications.reduce((sum, year) => 
    sum + year.papers.filter(paper => paper.selected).length, 0
  )

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Publications</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          Research contributions in AI, blockchain technology, cybersecurity, and privacy-enhancing technologies.
        </p>
        
        {/* Statistics */}
        <div className="flex justify-center space-x-8 text-center">
          <div className="bg-white rounded-lg shadow border border-gray-200 px-6 py-4">
            <div className="text-2xl font-bold text-blue-600">{totalPapers}</div>
            <div className="text-sm text-gray-600">Total Papers</div>
          </div>
          <div className="bg-white rounded-lg shadow border border-gray-200 px-6 py-4">
            <div className="text-2xl font-bold text-green-600">{selectedPapers}</div>
            <div className="text-sm text-gray-600">Selected Papers</div>
          </div>
          <div className="bg-white rounded-lg shadow border border-gray-200 px-6 py-4">
            <div className="text-2xl font-bold text-purple-600">{publications.length}</div>
            <div className="text-sm text-gray-600">Years Active</div>
          </div>
        </div>
      </div>

      {/* Publications by Year */}
      <div className="space-y-12">
        {publications.map((yearGroup) => (
          <section key={yearGroup.year}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Calendar className="mr-3 text-blue-600" size={32} />
              {yearGroup.year}
              <span className="ml-3 text-lg font-normal text-gray-500">
                ({yearGroup.papers.length} paper{yearGroup.papers.length !== 1 ? 's' : ''})
              </span>
            </h2>
            
            <div className="space-y-6">
              {yearGroup.papers.map((paper, index) => (
                <div key={index} className="bg-white rounded-lg shadow border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {getTypeIcon(paper.type)}
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeBadge(paper.type)}`}>
                        {paper.type.charAt(0).toUpperCase() + paper.type.slice(1)}
                      </span>
                      {paper.selected && (
                        <div className="flex items-center space-x-1">
                          <Star size={16} className="text-yellow-500 fill-current" />
                          <span className="text-xs font-medium text-yellow-700">Selected</span>
                        </div>
                      )}
                      {paper.status && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                          {paper.status}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {paper.title}
                  </h3>

                  <div className="text-gray-700 mb-3">
                    {highlightAuthor(paper.authors)}
                  </div>

                  <div className="text-gray-600 mb-4">
                    <span className="font-medium">{paper.venue}</span>
                    {paper.volume && (
                      <span>, Vol. {paper.volume}</span>
                    )}
                    {paper.number && (
                      <span>, No. {paper.number}</span>
                    )}
                    {paper.pages && (
                      <span>, pp. {paper.pages}</span>
                    )}
                  </div>

                  <div className="flex items-center space-x-4">
                    <Button variant="outline" size="sm" className="flex items-center space-x-1">
                      <FileText size={14} />
                      <span>PDF</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                      <ExternalLink size={14} />
                      <span>DOI</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Research Areas */}
      <section className="mt-16 bg-white rounded-xl shadow-lg border border-gray-200 p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Research Areas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">Blockchain Security</div>
            <div className="text-sm text-gray-600">Decentralized storage, auditing, cryptocurrency</div>
          </div>
          
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-2">Privacy Technologies</div>
            <div className="text-sm text-gray-600">Differential privacy, safe browsing, data protection</div>
          </div>
          
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-2">AI Applications</div>
            <div className="text-sm text-gray-600">Machine unlearning, intelligent systems</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PublicationsPage

