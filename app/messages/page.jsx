// app/messages/page.jsx
'use client';
import { useState, useEffect } from 'react';
import Spinner from '@/components/Spinner';
import Message from '@/components/Message';

const MessagesPage = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await fetch('/api/messages');

        if (res.status === 200) {
          const data = await res.json();
          setMessages(data);
        }
      } catch (error) {
        console.log('Error fetching messages: ', error);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, []);

  return (
    <section className='bg-blue-50 min-h-screen'>
      <div className='container m-auto py-24 max-w-6xl'>
        <div className='bg-white px-6 py-8 mb-4 shadow-lg rounded-lg border border-gray-200 m-4 md:m-0'>
          <h1 className='text-4xl font-bold mb-6 text-center text-blue-600'>
            Your Messages
          </h1>

          {loading ? (
            <Spinner loading={loading} />
          ) : messages.length === 0 ? (
            <p className='text-gray-600 text-center text-xl'>
              You have no messages
            </p>
          ) : (
            messages.map((message) => (
              <Message key={message._id} message={message} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default MessagesPage;