import React, { useState } from 'react';
import { FaSort, FaFilter, FaRegCommentDots } from 'react-icons/fa';
import SubmitCaseModal from './components/SubmitCase';

interface AdvocateBid {
  name: string;
  fee: string;
  experience: string;
  timeline: string;
  strategy: string;
  rating: number;
  image: string;
}

const advocateBids: AdvocateBid[] = [
  {
    name: 'John Smith',
    fee: '$2,000 - $2,500',
    experience: '15 years in Property Dispute Law',
    timeline: 'Estimated 6 months to resolution',
    strategy:
      'Focus on mediation and reaching a settlement before proceeding to court.',
    rating: 4,
    image: 'https://via.placeholder.com/50', // Placeholder for profile image
  },
  {
    name: 'Sarah Lee',
    fee: '$1,500 - $2,000',
    experience: '8 years in Civil Litigation',
    timeline: '3-5 months',
    strategy:
      'Aggressive legal strategy aimed at ensuring quick resolution via court proceedings.',
    rating: 5,
    image: 'https://via.placeholder.com/50', // Placeholder for profile image
  },
];

const AdvocateServices: React.FC = () => {
    const [newCase, setNewCase] = useState(false);

  return (
    <div className="flex flex-col items-center bg-gray-50 py-8 px-4 mt-16">
        {newCase && <SubmitCaseModal onClose={() => setNewCase(false)} />}
      {/* Header */}
      <div className="max-w-4xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900">Current Bids</h1>
          <button onClick={() => setNewCase(true)} className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition">
            Submit a New Case →
          </button>
        </div>

        {/* Filter and Sort Buttons */}
        <div className="flex justify-end space-x-4 mb-6">
          <button className="flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-200 transition">
            <FaSort />
            <span>Sort By</span>
          </button>
          <button className="flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-200 transition">
            <FaFilter />
            <span>Filter By</span>
          </button>
        </div>

        {/* Advocate Bids */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Case Title: Dispute over Property Ownership
          </h2>
          <div className="divide-y">
            {advocateBids.map((bid, index) => (
              <div key={index} className="py-4 md:flex space-x-4 items-start">
                {/* Profile Image */}
                <img
                  src={bid.image}
                  alt={`${bid.name}'s profile`}
                  className="w-12 h-12 rounded-full border mb-2 ml-4 md:mb-0 md:ml-0"
                />
                {/* Details */}
                <div className="flex-grow">
                  <h3 className="text-md font-semibold text-gray-800">
                    {bid.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    <strong>Fee:</strong> {bid.fee}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Experience:</strong> {bid.experience}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Timeline:</strong> {bid.timeline}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Strategy:</strong> {bid.strategy}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Rating:</strong>{' '}
                    {'★'.repeat(Math.floor(bid.rating)) +
                      (bid.rating % 1 ? '½' : '')}
                  </p>
                </div>
                {/* Action Buttons */}
                <div className="flex flex-col space-y-2 mt-2 md:mt-0">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
                    Accept Bid
                  </button>
                  <button className="flex items-center justify-center bg-gray-100 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-200 transition">
                    <FaRegCommentDots className="mr-2" />
                    Message
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvocateServices;
