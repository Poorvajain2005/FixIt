
import React from 'react';
import { StatusUpdate } from '../utils/mockData';
import { 
  AlertCircleIcon, 
  CheckCircleIcon, 
  ClockIcon,
  UserIcon,
  BookOpenIcon
} from 'lucide-react';

interface IssueTimelineProps {
  timeline: StatusUpdate[];
}

const IssueTimeline: React.FC<IssueTimelineProps> = ({ timeline }) => {
  const sortedTimeline = [...timeline].sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open':
        return <AlertCircleIcon className="h-5 w-5 text-fixit-danger" />;
      case 'in-progress':
        return <ClockIcon className="h-5 w-5 text-fixit-warning" />;
      case 'resolved':
        return <CheckCircleIcon className="h-5 w-5 text-fixit-success" />;
      default:
        return <BookOpenIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'open':
        return 'Opened';
      case 'in-progress':
        return 'In Progress';
      case 'resolved':
        return 'Resolved';
      default:
        return 'Updated';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Issue Timeline</h3>
      
      <div className="space-y-4">
        {sortedTimeline.length === 0 ? (
          <p className="text-gray-500 text-sm">No timeline events yet.</p>
        ) : (
          sortedTimeline.map((update, index) => (
            <div key={index} className="flex items-start space-x-3 pb-4 border-l-2 border-gray-200 pl-4">
              <div className="mt-0.5">
                {getStatusIcon(update.status)}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <span className="font-medium">
                    {getStatusText(update.status)}
                  </span>
                  <span className="text-sm text-gray-500 mt-1 sm:mt-0">
                    {formatDate(update.timestamp)}
                  </span>
                </div>
                
                <div className="mt-1 flex items-center text-sm text-gray-600">
                  <UserIcon className="h-3.5 w-3.5 mr-1" />
                  <span>{update.updatedByName}</span>
                  {update.updatedByRole === 'authority' && (
                    <span className="ml-2 text-xs bg-fixit-primary text-white px-2 py-0.5 rounded-full">
                      Authority
                    </span>
                  )}
                </div>
                
                {update.note && (
                  <p className="mt-1 text-sm">{update.note}</p>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default IssueTimeline;
