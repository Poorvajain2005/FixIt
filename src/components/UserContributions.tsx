
import React from 'react';
import { User } from '../utils/mockData';
import { 
  Award, 
  Flame, 
  Star, 
  MessageSquare, 
  ThumbsUp,
  Medal
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface UserContributionsProps {
  user: User;
}

// For demo purposes, we'll simulate these metrics
const getUserMetrics = (userId: string) => {
  // In a real app, these would come from the backend
  return {
    points: 250,
    level: 3,
    nextLevelPoints: 300,
    issuesReported: 7,
    commentsPosted: 12,
    upvotesGiven: 23,
    streak: 5, // days in a row active
    badges: [
      { name: 'First Report', icon: Star, description: 'Reported your first issue' },
      { name: 'Helper', icon: MessageSquare, description: 'Posted 10+ comments' },
      { name: 'Community Supporter', icon: ThumbsUp, description: 'Given 20+ upvotes' },
      { name: 'Streak Star', icon: Flame, description: '5 day activity streak' },
    ]
  };
};

const UserContributions: React.FC<UserContributionsProps> = ({ user }) => {
  const metrics = getUserMetrics(user.id);
  const progressPercent = (metrics.points / metrics.nextLevelPoints) * 100;
  
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-4 sm:p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold flex items-center">
            <Award className="mr-2 h-5 w-5 text-fixit-primary" />
            Your Contributions
          </h3>
          <div className="flex items-center bg-fixit-primary text-white px-3 py-1 rounded-full text-sm">
            <Star className="mr-1 h-4 w-4" />
            <span>{metrics.points} points</span>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Level {metrics.level}</span>
            <span className="text-sm text-gray-600">Level {metrics.level + 1}</span>
          </div>
          <Progress value={progressPercent} className="h-2" />
          <div className="mt-1 text-xs text-gray-500 text-center">
            {metrics.nextLevelPoints - metrics.points} more points to next level
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-fixit-primary">{metrics.issuesReported}</div>
            <div className="text-xs text-gray-600">Issues Reported</div>
          </div>
          
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-fixit-primary">{metrics.commentsPosted}</div>
            <div className="text-xs text-gray-600">Comments</div>
          </div>
          
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-fixit-primary">{metrics.upvotesGiven}</div>
            <div className="text-xs text-gray-600">Upvotes Given</div>
          </div>
          
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-fixit-primary">{metrics.streak}</div>
            <div className="text-xs text-gray-600">Day Streak</div>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium text-sm flex items-center mb-3">
            <Medal className="mr-2 h-4 w-4 text-fixit-primary" />
            Badges Earned
          </h4>
          
          <div className="grid grid-cols-2 gap-3">
            {metrics.badges.map((badge, index) => (
              <div key={index} className="flex items-center p-2 bg-gray-50 rounded-lg">
                <div className="p-2 bg-fixit-primary bg-opacity-10 rounded-full mr-3">
                  <badge.icon className="h-4 w-4 text-fixit-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium">{badge.name}</div>
                  <div className="text-xs text-gray-500">{badge.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 px-4 py-3 border-t border-gray-100">
        <div className="text-center">
          <a href="#" className="text-sm text-fixit-primary hover:text-fixit-secondary">
            View Community Leaderboard →
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserContributions;
