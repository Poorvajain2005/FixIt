and import React from 'react';

const GetStarted = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-6">Get Started</h1>
      <p className="text-lg text-muted-foreground">
        To begin using our application, follow these steps:
      </p>
      <ol className="list-decimal list-inside mt-4">
        <li><strong>Step 1:</strong> Sign up for an account.</li>
        <li><strong>Step 2:</strong> Log in to your account.</li>
        <li><strong>Step 3:</strong> Start reporting issues in your community.</li>
      </ol>
    </div>
  );
};

export default GetStarted;
