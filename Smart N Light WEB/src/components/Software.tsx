import React, { useState } from 'react';
import { 
 
  ClipboardList as AttendanceIcon,
  CalendarDays as ClubEventIcon,
  Star as ReviewPortalIcon,
  Award as RankPredictorIcon,
  FileText as ExamPortalIcon,
  Ticket as GeneralEventIcon,
  HeartPulse as HospitalIcon,
  FileSignature as InvoiceIcon,
  BookOpen as LearnLabIcon,
  QrCode as QrScannerIcon,
  UserCheck as QrAttendanceIcon,
  FileText as ResumeBuilderIcon,
  Shield as WomenCompanionIcon,
  Code as HackathonIcon,
  Bookmark as ExpensesBookIcon,
  Star,
  X
} from 'lucide-react';

type SoftwareType = {
  id: number;
  name: string;
  icon: React.ElementType;
  tagline: string;
  description: string;
  features: string[];
  
  status: string;
  rating: number;
  users: string;
};

const Software = () => {
  const [selectedSoftware, setSelectedSoftware] = useState<SoftwareType | null>(null);

  const software: SoftwareType[] = [
    
    {
      id: 2,
      name: 'Attendance Management',
      icon: AttendanceIcon,
      tagline: 'Digital Attendance Tracking System',
      description: 'Comprehensive solution for online sessions, meetings, and schools to track attendance, manage student remarks, and export data in multiple formats.',
      features: [
        'Real-time Attendance Tracking',
        'Student Remarks System',
        'Presenter Options',
        'PDF/Excel Export',
        'Responsive Interface',
        'Daily Reports'
      ],
      
      status: 'Live',
      rating: 4.7,
      users: '300+'
    },
    {
      id: 3,
      name: 'Club Event Form',
      icon: ClubEventIcon,
      tagline: 'College Club Event Management',
      description: 'Specialized form system for college clubs to manage events, track participants, and handle data more efficiently than standard form solutions.',
      features: [
        'Custom Event Registration',
        'Attendance Management',
        'Bulk Data Export',
        'Automated Notifications',
        'Participant Analytics',
        'One-time Solution Setup'
      ],
      
      status: 'Live',
      rating: 4.6,
      users: '150+'
    },
    {
      id: 4,
      name: 'Customer Review Portal',
      icon: ReviewPortalIcon,
      tagline: 'Restaurant Feedback System',
      description: 'Complete solution for restaurants to collect customer feedback and manage communication through automated email systems.',
      features: [
        'Customer Feedback Collection',
        'Admin Dashboard',
        'Bulk Email Forwarding',
        'Review Analytics',
        'Document Attachment',
        'Registered User Management'
      ],
     
      status: 'Live',
      rating: 4.5,
      users: '200+'
    },
    {
      id: 5,
      name: 'EAPCET Rank Predictor',
      icon: RankPredictorIcon,
      tagline: 'Telangana EAPCET Rank Calculator',
      description: 'Specialized tool for Telangana EAPCET students to predict their ranks based on various parameters including caste, course preferences, and college types.',
      features: [
        'Rank Prediction Algorithm',
        'Caste-based Calculation',
        'Course Selection',
        'College Type Filtering',
        'Historical Data Comparison',
        'PDF Report Generation'
      ],
     
      status: 'Live',
      rating: 4.8,
      users: '1000+'
    },
    {
      id: 6,
      name: 'Exam Portal',
      icon: ExamPortalIcon,
      tagline: 'Online Assessment Platform',
      description: 'Comprehensive exam system for engineering students with customizable test parameters including duration, negative marking, and subject selection.',
      features: [
        'Custom Test Creation',
        'Subject Selection',
        'Duration Control',
        'Negative Marking',
        'Aptitude Tests',
        'Instant Results'
      ],
      
      status: 'Live',
      rating: 4.7,
      users: '100+'
    },
    {
      id: 7,
      name: 'General Event Form',
      icon: GeneralEventIcon,
      tagline: 'Universal Event Registration',
      description: 'Versatile platform for event organizers to manage registrations, payments, and attendee tracking for various types of events.',
      features: [
        'Custom Event Setup',
        'Integrated Payment Gateway',
        'Attendee Management',
        'QR Code Entry',
        'Bulk Communication',
        'Analytics Dashboard'
      ],
      
      status: 'Live',
      rating: 4.6,
      users: '250+'
    },
    {
      id: 8,
      name: 'Hospital Management',
      icon: HospitalIcon,
      tagline: 'Healthcare Administration System',
      description: 'Complete solution for hospitals to manage appointments, patient records, and communication between doctors, admin, and receptionists.',
      features: [
        'Appointment Scheduling',
        'Patient Records',
        'Doctor Portal',
        'Receptionist Interface',
        'Prescription Management',
        'Billing System'
      ],
     
      status: 'Live',
      rating: 4.8,
      users: '5+ hospitals'
    },
    {
      id: 9,
      name: 'Invoice Maker',
      icon: InvoiceIcon,
      tagline: 'Automated Invoice Generator',
      description: 'Simple yet powerful tool for restaurants and businesses to quickly generate professional invoices with minimal input.',
      features: [
        'Form-based Input',
        'Auto-calculations',
        'Custom Templates',
        'PDF Generation',
        'Client Management',
        'Tax Compliance'
      ],
      
      status: 'Live',
      rating: 4.5,
      users: '300+'
    },
    {
      id: 10,
      name: 'Learn Lab',
      icon: LearnLabIcon,
      tagline: 'Engineering Learning Platform',
      description: 'Comprehensive resource hub for engineering students with integrated learning materials, quizzes, and reward systems.',
      features: [
        'YouTube Integration',
        'PDF Resources',
        'Practice Quizzes',
        'Point System',
        'Reward Mechanism',
        'Progress Tracking'
      ],
     
      status: 'Live',
      rating: 4.7,
      users: '1000+'
    },
    {
      id: 11,
      name: 'QR Scanner Generator',
      icon: QrScannerIcon,
      tagline: 'Dynamic QR Code Solution',
      description: 'Tool to generate QR codes for any URL or content, with tracking and analytics capabilities.',
      features: [
        'URL to QR Conversion',
        'Image Integration',
        'Dynamic Generation',
        'Scan Analytics',
        'Custom Styling',
        'Bulk Generation'
      ],
      
      status: 'Live',
      rating: 4.4,
      users: '400+'
    },
    {
      id: 12,
      name: 'QR Attendance',
      icon: QrAttendanceIcon,
      tagline: 'Contactless Attendance System',
      description: 'Modern attendance tracking system using QR codes for secure and efficient participant management.',
      features: [
        'QR Code Verification',
        'Real-time Tracking',
        'Export Reports',
        'Multi-event Support',
        'Participant Analytics',
        'Mobile Friendly'
      ],
     
      status: 'Live',
      rating: 4.6,
      users: '200+'
    },
    {
      id: 13,
      name: 'Resume Builder',
      icon: ResumeBuilderIcon,
      tagline: 'ATS-Optimized Resume Creator',
      description: 'Intuitive tool to create professional, ATS-friendly resumes with minimal effort and maximum impact.',
      features: [
        'Form-based Input',
        'Multiple Templates',
        'ATS Optimization',
        'PDF Export',
        'Custom Sections',
        'Preview Mode'
      ],
      
      status: 'Live',
      rating: 4.8,
      users: '800+'
    },
    {
      id: 14,
      name: 'Women Companion',
      icon: WomenCompanionIcon,
      tagline: 'Women Health & Safety App',
      description: 'Comprehensive solution for women\'s health during menstruation with doctor-verified content and emergency features.',
      features: [
        'Health Tracking',
        'Doctor Recommendations',
        'Nearby Services Locator',
        'Emergency Contacts',
        'Educational Content',
        'Symptom Checker'
      ],
      
      status: 'Live',
      rating: 4.9,
      users: '100+'
    },
    {
      id: 15,
      name: 'Hackathon Registration',
      icon: HackathonIcon,
      tagline: 'Complete Hackathon Management',
      description: 'End-to-end solution for organizing hackathons with team registration, payment processing, and attendance tracking.',
      features: [
        'Team Registration',
        'Payment Integration',
        'QR Attendance',
        'Bulk Email',
        'Participant Verification',
        'Admin Dashboard'
      ],
      
      status: 'Live',
      rating: 4.7,
      users: '10+ events'
    },
    {
      id: 16,
      name: 'Expenses Book',
      icon: ExpensesBookIcon,
      tagline: 'Personal Finance Tracker',
      description: 'Simple yet powerful application to track income and expenses with comprehensive reporting capabilities.',
      features: [
        'Income/Expense Tracking',
        'PDF/CSV Export',
        'Data Analysis',
        'Category Management',
        'Security Features',
        'Responsive Design'
      ],
      
      status: 'Live',
      rating: 4.5,
      users: '100+'
    }
  ];

  const openModal = (soft: React.SetStateAction<SoftwareType | null>) => {
    setSelectedSoftware(soft);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedSoftware(null);
    document.body.style.overflow = 'unset';
  };

 return (
    <section id="software" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Our Software Products
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Innovative solutions designed to simplify complex tasks across various industries.
          </p>
        </div>

        {/* Grid with 2 columns at all breakpoints */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {software.map((soft) => (
            <div 
              key={soft.id} 
              className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-4 sm:p-5 hover:shadow-md hover:border-blue-200 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <soft.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                    soft.status === 'Live' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {soft.status}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">{soft.name}</h3>
              <p className="text-blue-600 text-xs sm:text-sm font-medium mb-2 line-clamp-1">{soft.tagline}</p>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">{soft.description}</p>

              {/* Stats */}
              <div className="flex items-center space-x-2 mb-3">
                <div className="flex items-center">
                  <Star className="w-3 h-3 text-yellow-500 mr-1" />
                  <span className="text-xs font-medium text-gray-700">{soft.rating}</span>
                </div>
                <div className="text-xs text-gray-500 truncate">{soft.users}</div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => openModal(soft)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-1.5 sm:py-2 rounded-lg font-medium hover:shadow-md transition-all duration-300 flex items-center justify-center text-xs sm:text-sm"
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedSoftware && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center">
                    <selectedSoftware.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedSoftware.name}</h3>
                    <p className="text-blue-600 font-semibold">{selectedSoftware.tagline}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-8">
                {/* Description */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Overview</h4>
                  <p className="text-gray-600 leading-relaxed">{selectedSoftware.description}</p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedSoftware.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

              
               
                {/* Stats */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Performance Stats</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-blue-600">{selectedSoftware.rating}</div>
                      <div className="text-xs text-gray-600">Rating</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-blue-600">{selectedSoftware.users}</div>
                      <div className="text-xs text-gray-600">Active Users</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-blue-600">{selectedSoftware.status}</div>
                      <div className="text-xs text-gray-600">Status</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Software;