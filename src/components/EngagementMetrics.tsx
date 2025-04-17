
import React from 'react';
import { shareIssue } from '../utils/mockData';
import { useToast } from '@/hooks/use-toast';
import { 
  EyeIcon, 
  ShareIcon, 
  ThumbsUpIcon, 
  UsersIcon, 
  TagIcon 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EngagementMetricsProps {
  issueId: string;
  upvotes: number;
  views: number;
  shares: number;
  tags?: string[];
  onUpvote: () => void;
}

const EngagementMetrics: React.FC<EngagementMetricsProps> = ({ 
  issueId, 
  upvotes, 
  views, 
  shares, 
  tags = [],
  onUpvote 
}) => {
  const { toast } = useToast();

  const handleShare = () => {
    const updatedIssue = shareIssue(issueId);
    
    if (updatedIssue) {
      // Check if we have the Web Share API
      if (navigator.share) {
        navigator.share({
          title: 'Check out this issue on FixIt',
          text: 'I found this community issue that needs attention',
          url: `${window.location.origin}/issues/${issueId}`,
        })
        .catch(() => {
          // If sharing fails, copy to clipboard
          copyToClipboard();
        });
      } else {
        // Fallback to clipboard
        copyToClipboard();
      }
    }
  };

  const copyToClipboard = () => {
    const url = `${window.location.origin}/issues/${issueId}`;
    navigator.clipboard.writeText(url);
    
    toast({
      title: "Link Copied!",
      description: "Issue link copied to clipboard for sharing.",
    });
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Community Engagement</h3>
      
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="flex flex-col items-center py-2 bg-white rounded-md shadow-sm">
          <div className="flex items-center text-fixit-primary mb-1">
            <ThumbsUpIcon className="w-4 h-4 mr-1" />
            <span className="font-semibold">{upvotes}</span>
          </div>
          <span className="text-xs text-gray-600">Upvotes</span>
        </div>
        
        <div className="flex flex-col items-center py-2 bg-white rounded-md shadow-sm">
          <div className="flex items-center text-gray-600 mb-1">
            <EyeIcon className="w-4 h-4 mr-1" />
            <span className="font-semibold">{views}</span>
          </div>
          <span className="text-xs text-gray-600">Views</span>
        </div>
        
        <div className="flex flex-col items-center py-2 bg-white rounded-md shadow-sm">
          <div className="flex items-center text-gray-600 mb-1">
            <ShareIcon className="w-4 h-4 mr-1" />
            <span className="font-semibold">{shares}</span>
          </div>
          <span className="text-xs text-gray-600">Shares</span>
        </div>
      </div>
      
      <div className="flex space-x-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1 flex items-center justify-center text-fixit-primary border-fixit-primary"
          onClick={onUpvote}
        >
          <ThumbsUpIcon className="w-4 h-4 mr-1" />
          Upvote
        </Button>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1 flex items-center justify-center"
          onClick={handleShare}
        >
          <ShareIcon className="w-4 h-4 mr-1" />
          Share
        </Button>
      </div>
      
      {tags.length > 0 && (
        <div className="mt-4">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <TagIcon className="w-4 h-4 mr-1" />
            <span>Tags:</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EngagementMetrics;
