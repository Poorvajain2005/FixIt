
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Navbar from '../components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { mockUsers, mockIssues } from '@/utils/mockData';

const AdminPanel = () => {
  const { isAdmin, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if not an admin or not authenticated
  useEffect(() => {
    if (!isAuthenticated || !isAdmin()) {
      navigate('/');
    }
  }, [isAuthenticated, isAdmin, navigate]);

  // If not an admin, don't render anything
  if (!isAdmin()) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="fixit-container">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">Admin Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardHeader className="bg-red-50 text-red-800 p-4">
                <CardTitle className="text-base font-medium">Total Users</CardTitle>
              </CardHeader>
              <CardContent className="p-4 text-2xl font-bold">
                {mockUsers.length}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-blue-50 text-blue-800 p-4">
                <CardTitle className="text-base font-medium">Total Issues</CardTitle>
              </CardHeader>
              <CardContent className="p-4 text-2xl font-bold">
                {mockIssues.length}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-green-50 text-green-800 p-4">
                <CardTitle className="text-base font-medium">Open Issues</CardTitle>
              </CardHeader>
              <CardContent className="p-4 text-2xl font-bold">
                {mockIssues.filter(issue => issue.status === 'open').length}
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" variant="outline">
                        Manage
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
