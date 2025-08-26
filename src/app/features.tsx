import React from 'react';

const Features = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-6">Features</h1>
      <p className="text-lg text-muted-foreground">
        Here are some of the key features of our application:
      </p>
      <ul className="list-disc list-inside mt-4">
        <li><strong>Fast Reporting:</strong> Quickly report issues with just a few clicks, ensuring that your concerns are addressed promptly.</li>
        <li><strong>Real-Time Updates:</strong> Get instant notifications on the status of your reports, keeping you informed every step of the way.</li>
        <li><strong>User-Friendly Interface:</strong> Navigate easily through our intuitive design, making it simple for anyone to use.</li>
        <li><strong>Community Engagement:</strong> Connect with other users and participate in local initiatives to improve your neighborhood.</li>
        <li><strong>Data Analytics:</strong> Access insights and analytics on reported issues to understand community needs better.</li>
      </ul>
    </div>
  );
};

export default Features;
