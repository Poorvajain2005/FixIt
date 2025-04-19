import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAuth } from '../contexts/AuthContext';
import IssuesList from '../components/IssuesList';
import ReportForm from '../components/ReportForm';
import EmergencyReportForm from '../components/EmergencyReportForm';
import MapButton from '../components/MapButton';
import { mockIssues } from '../utils/mockData';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { isAuthenticated } = useAuth();
  
  // Display only the most recent 3 issues for homepage
  const recentIssues = mockIssues
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fixit-primary to-fixit-secondary text-white py-16">
        <div className="fixit-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Report, Track, Resolve <span className="underline decoration-yellow-300">Any</span> Community Issue
              </h1>
              
              <p className="text-xl mb-8 opacity-90">
                FixIt connects citizens and authorities on a single platform to address and solve <strong>all types</strong> of urban problems faster - not just sanitation issues.
              </p>
              
              <div className="flex flex-wrap gap-4">
                {isAuthenticated ? (
                  <>
                    <ReportForm onSubmit={(data) => console.log('Report issue:', data)} />
                    <EmergencyReportForm onSubmit={(data) => console.log('Emergency reported:', data)} />
                    <Link to="/dashboard">
                      <Button variant="outline" className="bg-white text-fixit-primary hover:bg-gray-100">
                        View Dashboard
                      </Button>
                    </Link>
                    <MapButton />
                  </>
                ) : (
                  <>
                    <Link to="/signup">
                      <Button className="bg-white text-fixit-primary hover:bg-gray-100">
                        Sign Up Now
                      </Button>
                    </Link>
                    <Link to="/login">
                      <Button variant="outline" className="border-white text-white hover:bg-white/10">
                        Log In
                      </Button>
                    </Link>
                    <MapButton />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Differentiator Tags */}
        <div className="fixit-container mt-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="bg-white/10 text-white font-medium text-sm py-1 px-3 rounded-full">
              All Urban Issues
            </span>
            <span className="bg-white/10 text-white font-medium text-sm py-1 px-3 rounded-full">
              Community-Powered
            </span>
            <span className="bg-white/10 text-white font-medium text-sm py-1 px-3 rounded-full">
              Real-Time Tracking
            </span>
            <span className="bg-white/10 text-white font-medium text-sm py-1 px-3 rounded-full">
              Emergency Reporting
            </span>
            <span className="bg-white/10 text-white font-medium text-sm py-1 px-3 rounded-full">
              Interactive Maps
            </span>
            <span className="bg-white/10 text-white font-medium text-sm py-1 px-3 rounded-full">
              Contributor Rewards
            </span>
            <span className="bg-white/10 text-white font-medium text-sm py-1 px-3 rounded-full">
              Transparent Data
            </span>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="fixit-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">How FixIt Goes Beyond Swachhata</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Solving urban problems with innovative community-driven solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-fixit-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-fixit-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Report Any Urban Issue</h3>
              <p className="text-gray-600">
                Not just sanitation! Report potholes, streetlights, water leakage, noise pollution and more in just a few clicks.
              </p>
              <div className="mt-4 inline-block bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">
                Beyond Sanitation
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-fixit-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-fixit-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 013.296-1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Timeline Tracking</h3>
              <p className="text-gray-600">
                See detailed step-by-step progress of your issue from reporting to resolution with real-time updates.
              </p>
              <div className="mt-4 inline-block bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full">
                Full Transparency
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-fixit-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-fixit-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community-Powered</h3>
              <p className="text-gray-600">
                Upvote issues to increase visibility, comment to provide updates, and earn rewards for active participation.
              </p>
              <div className="mt-4 inline-block bg-yellow-50 text-yellow-700 text-xs px-3 py-1 rounded-full">
                Crowd-Sourced Prioritization
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Emergency Mode</h3>
                  <p className="text-gray-600">
                    Report urgent issues like open electrical wires, dangerous structures, or flooding with priority flagging for faster response.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Interactive Maps</h3>
                  <p className="text-gray-600">
                    Visualize issues in your area with real-time maps, filter by category or status, and discover hot-spots that need attention.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Rewards & Recognition</h3>
                  <p className="text-gray-600">
                    Earn points, badges, and climb the leaderboard by actively participating in improving your community.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Open Data & Analytics</h3>
                  <p className="text-gray-600">
                    Access data about civic issues to hold authorities accountable. View trends and patterns in your neighborhood.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Issues Section */}
      <section className="py-16">
        <div className="fixit-container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Recent Issues</h2>
            <div className="flex gap-4">
              <Link to="/dashboard" className="text-fixit-primary hover:text-fixit-secondary">
                View all issues →
              </Link>
              <Link to="/india-map" className="text-fixit-primary hover:text-fixit-secondary">
                View India Map →
              </Link>
            </div>
          </div>
          
          <IssuesList issues={recentIssues} showFilters={false} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="fixit-container text-center">
          <div className="mb-6 inline-block px-4 py-1 bg-fixit-primary/10 text-fixit-primary font-medium rounded-full">
            More Than Just a Sanitation App
          </div>
          <h2 className="text-3xl font-bold mb-4">Ready to improve your entire community?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join FixIt today and help fix <strong>all urban issues</strong> with a more powerful, transparent, and community-driven approach.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {!isAuthenticated ? (
              <>
                <Link to="/signup">
                  <Button className="bg-fixit-primary hover:bg-fixit-secondary text-white px-6 py-3">
                    Sign Up Now
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" className="border-fixit-primary text-fixit-primary hover:bg-fixit-primary-light px-6 py-3">
                    Log In
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <ReportForm onSubmit={(data) => console.log('Report issue:', data)} />
                <EmergencyReportForm onSubmit={(data) => console.log('Emergency reported:', data)} />
              </>
            )}
          </div>
          
          <div className="mt-10 text-sm text-fixit-primary">
            <p>
              "FixIt is a next-gen, community-first civic issue reporting platform that goes beyond sanitation<br />
              to tackle all urban problems—crowdsourced, AI-enhanced, real-time, and inclusive."
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="fixit-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FixIt</h3>
              <p className="text-gray-400">
                Connecting citizens and authorities to create better communities.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link to="/dashboard" className="text-gray-400 hover:text-white">Dashboard</Link></li>
                <li><Link to="/login" className="text-gray-400 hover:text-white">Login</Link></li>
                <li><Link to="/signup" className="text-gray-400 hover:text-white">Sign Up</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                Have questions or feedback?<br />
                Email us at info@fixitapp.com
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© 2025 FixIt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
