import { useState, useEffect } from 'react';
import { Issue, updateIssueStatus, Comment, upvoteIssue, viewIssue } from '../utils/mockData';
import { useAuth } from '../contexts/AuthContext';
import CommentSection from './CommentSection';
import IssueTimeline from './IssueTimeline';
import EngagementMetrics from './EngagementMetrics';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { AlertCircleIcon, AlertTriangleIcon, CalendarIcon } from 'lucide-react';
import Map from './Map';

interface IssueDetailProps {
  issue: Issue;
}

const IssueDetail = ({ issue: initialIssue }: IssueDetailProps) => {
  const [issue, setIssue] = useState<Issue>(initialIssue);
  const { isAuthority, user } = useAuth();
  const { toast } = useToast();
  
  // Record view on initial load
  useEffect(() => {
    viewIssue(issue.id);
  }, [issue.id]);

  const statusClass = 
    issue.status === 'open' 
      ? 'status-open' 
      : issue.status === 'in-progress' 
        ? 'status-in-progress' 
        : 'status-resolved';
  
  const statusLabel = 
    issue.status === 'open' 
      ? 'Open' 
      : issue.status === 'in-progress' 
        ? 'In Progress' 
        : 'Resolved';
  
  const priorityClass = 
    issue.priority === 'emergency' 
      ? 'bg-red-600 text-white' 
      : issue.priority === 'high' 
        ? 'bg-orange-500 text-white' 
        : issue.priority === 'medium' 
          ? 'bg-yellow-500 text-white' 
          : 'bg-blue-500 text-white';
          
  const priorityLabel = 
    issue.priority === 'emergency' 
      ? 'EMERGENCY' 
      : issue.priority === 'high' 
        ? 'High Priority' 
        : issue.priority === 'medium' 
          ? 'Medium Priority' 
          : 'Low Priority';

  const handleStatusChange = (newStatus: 'open' | 'in-progress' | 'resolved') => {
    const updatedIssue = updateIssueStatus(issue.id, newStatus);
    if (updatedIssue) {
      setIssue({ ...issue, status: newStatus });
      
      toast({
        title: "Status Updated",
        description: `Issue status has been updated to ${newStatus.replace('-', ' ')}.`,
      });
    }
  };

  const handleUpvote = () => {
    const updatedIssue = upvoteIssue(issue.id);
    if (updatedIssue) {
      setIssue({ ...issue, upvotes: updatedIssue.upvotes });
      
      toast({
        title: "Upvoted",
        description: "You have successfully upvoted this issue.",
      });
    }
  };

  const handleCommentAdded = (newComment: Comment) => {
    setIssue({
      ...issue,
      comments: [...issue.comments, newComment]
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-start flex-wrap">
            <div className="mb-2 sm:mb-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {issue.priority === 'emergency' && (
                  <span className="flex items-center bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                    <AlertTriangleIcon className="w-3 h-3 mr-1" />
                    EMERGENCY
                  </span>
                )}
                <h2 className="text-2xl font-bold text-gray-900">{issue.title}</h2>
                <span className={`${statusClass} ml-0 sm:ml-2`}>{statusLabel}</span>
                
                {issue.priority !== 'emergency' && (
                  <span className={`text-xs px-2 py-1 rounded-full ${priorityClass}`}>
                    {priorityLabel}
                  </span>
                )}
                
                {issue.isVerified && (
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    Verified
                  </span>
                )}
              </div>
              <div className="text-sm text-gray-500 mb-4">
                Reported by {issue.reportedByName} on {new Date(issue.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="md:col-span-2">
              <div className="border-b pb-4 mb-4">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-700 whitespace-pre-line">{issue.description}</p>
              </div>
              
              <div className="border-b pb-4 mb-4">
                <h3 className="text-lg font-semibold mb-2">Details</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  <div>
                    <span className="text-sm text-gray-500">Category</span>
                    <p className="font-medium">{issue.category}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Priority</span>
                    <p className="font-medium capitalize">{issue.priority}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Location</span>
                    <p className="font-medium">{issue.location}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Status</span>
                    <p className="font-medium capitalize">{issue.status.replace('-', ' ')}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Reported</span>
                    <p className="font-medium">{new Date(issue.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Last Updated</span>
                    <p className="font-medium">{new Date(issue.updatedAt).toLocaleDateString()}</p>
                  </div>
                  
                  {issue.estimatedCompletionDate && (
                    <div className="col-span-2">
                      <span className="text-sm text-gray-500 flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-1 text-fixit-primary" />
                        Estimated Resolution Date
                      </span>
                      <p className="font-medium">
                        {new Date(issue.estimatedCompletionDate).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                  
                  {issue.actualCompletionDate && (
                    <div className="col-span-2">
                      <span className="text-sm text-gray-500 flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-1 text-fixit-success" />
                        Resolved On
                      </span>
                      <p className="font-medium">
                        {new Date(issue.actualCompletionDate).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="border-b pb-4 mb-4">
                <IssueTimeline timeline={issue.statusTimeline} />
              </div>
              
              {isAuthority() && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <AlertCircleIcon className="w-5 h-5 mr-2 text-fixit-primary" />
                    Authority Actions
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {issue.status !== 'open' && (
                      <Button 
                        className="bg-fixit-danger hover:bg-red-700"
                        onClick={() => handleStatusChange('open')}
                      >
                        Mark as Open
                      </Button>
                    )}
                    
                    {issue.status !== 'in-progress' && (
                      <Button 
                        className="bg-fixit-warning hover:bg-amber-600"
                        onClick={() => handleStatusChange('in-progress')}
                      >
                        Mark as In Progress
                      </Button>
                    )}
                    
                    {issue.status !== 'resolved' && (
                      <Button 
                        className="bg-fixit-success hover:bg-green-700"
                        onClick={() => handleStatusChange('resolved')}
                      >
                        Mark as Resolved
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            <div className="space-y-6">
              <EngagementMetrics 
                issueId={issue.id}
                upvotes={issue.upvotes}
                views={issue.views}
                shares={issue.shares}
                tags={issue.tags}
                onUpvote={handleUpvote}
              />
              
              {issue.images.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Images</h3>
                  <div className="space-y-2">
                    {issue.images.map((image, index) => (
                      <img 
                        key={index} 
                        src={image} 
                        alt={`Image ${index + 1}`} 
                        className="w-full rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              )}
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                {issue.coordinates ? (
                  <Map 
                    coordinates={issue.coordinates} 
                    height="h-48" 
                    showControls={false} 
                    zoomLevel={14}
                  />
                ) : (
                  <Map 
                    height="h-48" 
                    showControls={false} 
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CommentSection 
        issueId={issue.id} 
        comments={issue.comments} 
        onCommentAdded={handleCommentAdded} 
      />
    </div>
  );
};

export default IssueDetail;
