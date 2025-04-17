
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAuth } from '../contexts/AuthContext';
import IssuesList from '../components/IssuesList';
import AuthorityDashboard from '../components/AuthorityDashboard';
import ReportForm from '../components/ReportForm';
import EmergencyReportForm from '../components/EmergencyReportForm';
import UserContributions from '../components/UserContributions';
import DashboardCharts from '../components/DashboardCharts';
import { getIssues } from '../utils/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
  const { user, isAuthenticated, isAuthority } = useAuth();
  const [issues, setIssues] = useState(getIssues());
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // Handle new issue report - in a real app, this would make an API call
  const handleReportSubmit = (formData: any) => {
    console.log('New issue reported:', formData);
    // In a real app, we would add the new issue to the list
    // For now, we'll just refresh the issues list
    setIssues(getIssues());
  };

  if (!isAuthenticated || !user) {
    return null; // Redirecting to login, don't render anything
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="fixit-container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {isAuthority() ? 'Authority Dashboard' : 'My Dashboard'}
              </h1>
              <p className="text-gray-600 mt-1">
                {isAuthority() 
                  ? 'Manage and respond to community issues' 
                  : 'Track and report community issues'}
              </p>
            </div>
            
            {!isAuthority() && (
              <div className="mt-4 md:mt-0 flex space-x-3">
                <ReportForm onSubmit={handleReportSubmit} />
                <EmergencyReportForm onSubmit={handleReportSubmit} />
              </div>
            )}
          </div>
          
          {!isAuthority() && (
            <div className="mb-8">
              <UserContributions user={user} />
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardHeader className="bg-red-50 text-red-800 p-4">
                <CardTitle className="text-base font-medium">Beyond Sanitation</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">
                  FixIt lets you report and track <strong>all urban issues</strong> - from potholes to broken street lights, not just sanitation. One platform for all civic concerns.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-blue-50 text-blue-800 p-4">
                <CardTitle className="text-base font-medium">Community Engagement</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">
                  Share, upvote, and comment on issues in your area. The more support an issue gets, the faster authorities respond.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-green-50 text-green-800 p-4">
                <CardTitle className="text-base font-medium">Complete Transparency</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">
                  Track issues from report to resolution with detailed timelines. Get notifications when status changes.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="issues" className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="issues">Issues List</TabsTrigger>
              <TabsTrigger value="analytics">Analytics & Insights</TabsTrigger>
            </TabsList>
            
            <TabsContent value="issues">
              {isAuthority() ? (
                <AuthorityDashboard issues={issues} />
              ) : (
                <IssuesList issues={issues} />
              )}
            </TabsContent>
            
            <TabsContent value="analytics">
              <DashboardCharts />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
