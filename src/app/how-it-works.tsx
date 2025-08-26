import React from 'react';

const HowItWorks = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-6">How It Works</h1>
      <p className="text-lg text-muted-foreground">
        Our application works in three simple steps:
      </p>
      <ol className="list-decimal list-inside mt-4">
        <li><strong>Step 1:</strong> Log in, describe the issue, select type/priority, add a photo, and confirm the location.</li>
        <li><strong>Step 2:</strong> City admins review the report, verify details, set priority, and assign it for resolution.</li>
        <li><strong>Step 3:</strong> Relevant departments fix the issue. The status is updated to 'Resolved', notifying the reporter.</li>
      </ol>
    </div>
  );
};

export default HowItWorks;
