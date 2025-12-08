import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  requirements: Requirement[];
}

interface Requirement {
  title: string;
  details: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get('https://api.example.com/business-specification/content')
      .then((response) => {
        setBusinessSpec(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className={clsx('p-4', { 'bg-gray-100': !isMobile })}>
      <h1 className="text-3xl font-bold mb-4">Create Business Specification</h1>
      {loading && <p>Loading...</p>}
      {!loading && error && (
        <div role="alert" aria-live="assertive">
          <p>Error: {error}</p>
        </div>
      )}
      {!loading && businessSpec && (
        <>
          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Business Name</h2>
            <p>{businessSpec.name}</p>
          </section>
          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p dangerouslySetInnerHTML={{ __html: businessSpec.description }} />
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Requirements</h2>
            {businessSpec.requirements.map((req, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-medium">{req.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: req.details }} />
              </div>
            ))}
          </section>
        </>
      )}
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  requirements: Requirement[];
}

interface Requirement {
  title: string;
  details: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get('https://api.example.com/business-specification/content')
      .then((response) => {
        setBusinessSpec(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className={clsx('p-4', { 'bg-gray-100': !isMobile })}>
      <h1 className="text-3xl font-bold mb-4">Create Business Specification</h1>
      {loading && <p>Loading...</p>}
      {!loading && error && (
        <div role="alert" aria-live="assertive">
          <p>Error: {error}</p>
        </div>
      )}
      {!loading && businessSpec && (
        <>
          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Business Name</h2>
            <p>{businessSpec.name}</p>
          </section>
          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p dangerouslySetInnerHTML={{ __html: businessSpec.description }} />
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Requirements</h2>
            {businessSpec.requirements.map((req, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-medium">{req.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: req.details }} />
              </div>
            ))}
          </section>
        </>
      )}
    </div>
  );
};

export default CreateBusinessSpecification;