import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Test {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

interface Question {
  questionText: string;
  options: Option[];
  answer: string;
}

interface Option {
  text: string;
  isCorrect?: boolean;
}

const WriteTests: React.FC = () => {
  const [test, setTest] = useState<Test | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTest = async () => {
      try {
        const response = await axios.get('/api/test');
        setTest(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load test data.');
        setLoading(false);
      }
    };

    fetchTest();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  const router = useRouter();

  const handleSave = async () => {
    try {
      await axios.post('/api/test', test);
      router.push('/');
    } catch (err) {
      setError('Failed to save the test.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Write Test</h1>
      {test && (
        <>
          <div role="region" aria-label="Test Title" tabIndex={0}>
            <input
              type="text"
              value={test.title}
              onChange={(e) => setTest({ ...test, title: e.target.value })}
              className="border p-1 mb-2 w-full"
              placeholder="Enter test title..."
            />
          </div>
          {test.questions.map((question, index) => (
            <div key={index} role="region" aria-label={`Question ${index + 1}`} tabIndex={0}>
              <input
                type="text"
                value={question.questionText}
                onChange={(e) =>
                  setTest({
                    ...test,
                    questions: test.questions.map((q, qIndex) => (qIndex === index ? { ...q, questionText: e.target.value } : q)),
                  })
                }
                className="border p-1 mb-2 w-full"
                placeholder={`Enter question ${index + 1}...`}
              />
              <div>
                {question.options.map((option, oIndex) => (
                  <div key={oIndex}>
                    <input
                      type="text"
                      value={option.text}
                      onChange={(e) =>
                        setTest({
                          ...test,
                          questions: test.questions.map((q, qIndex) =>
                            qIndex === index ? { ...q, options: q.options.map((op, opIndex) => (opIndex === oIndex ? { ...op, text: e.target.value } : op)) } : q
                          )
                        })
                      }
                      className="border p-1 mb-2 w-full"
                      placeholder={`Enter option ${oIndex + 1}...`}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">
            Save Test
          </button>
        </>
      )}
    </div>
  );
};

export default WriteTests;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Test {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

interface Question {
  questionText: string;
  options: Option[];
  answer: string;
}

interface Option {
  text: string;
  isCorrect?: boolean;
}

const WriteTests: React.FC = () => {
  const [test, setTest] = useState<Test | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTest = async () => {
      try {
        const response = await axios.get('/api/test');
        setTest(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load test data.');
        setLoading(false);
      }
    };

    fetchTest();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  const router = useRouter();

  const handleSave = async () => {
    try {
      await axios.post('/api/test', test);
      router.push('/');
    } catch (err) {
      setError('Failed to save the test.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Write Test</h1>
      {test && (
        <>
          <div role="region" aria-label="Test Title" tabIndex={0}>
            <input
              type="text"
              value={test.title}
              onChange={(e) => setTest({ ...test, title: e.target.value })}
              className="border p-1 mb-2 w-full"
              placeholder="Enter test title..."
            />
          </div>
          {test.questions.map((question, index) => (
            <div key={index} role="region" aria-label={`Question ${index + 1}`} tabIndex={0}>
              <input
                type="text"
                value={question.questionText}
                onChange={(e) =>
                  setTest({
                    ...test,
                    questions: test.questions.map((q, qIndex) => (qIndex === index ? { ...q, questionText: e.target.value } : q)),
                  })
                }
                className="border p-1 mb-2 w-full"
                placeholder={`Enter question ${index + 1}...`}
              />
              <div>
                {question.options.map((option, oIndex) => (
                  <div key={oIndex}>
                    <input
                      type="text"
                      value={option.text}
                      onChange={(e) =>
                        setTest({
                          ...test,
                          questions: test.questions.map((q, qIndex) =>
                            qIndex === index ? { ...q, options: q.options.map((op, opIndex) => (opIndex === oIndex ? { ...op, text: e.target.value } : op)) } : q
                          )
                        })
                      }
                      className="border p-1 mb-2 w-full"
                      placeholder={`Enter option ${oIndex + 1}...`}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">
            Save Test
          </button>
        </>
      )}
    </div>
  );
};

export default WriteTests;