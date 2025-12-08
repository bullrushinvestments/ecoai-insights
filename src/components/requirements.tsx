import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

interface ContentRequirement {
  title: string;
  description: string;
  targetAudience: string[];
  contentTypes: string[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    targetAudience: Yup.array().min(1, 'At least one audience must be selected').of(Yup.string()).required(),
    contentTypes: Yup.array().min(1, 'At least one content type must be selected').of(Yup.string()).required()
  });

  const formik = useFormik<ContentRequirement>({
    initialValues: {
      title: '',
      description: '',
      targetAudience: [],
      contentTypes: []
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        // API call to gather requirements
        console.log(values); // Simulate API call with form values
        navigate('/confirmation'); // Redirect after successful submission
      } catch (error) {
        alert('There was an error submitting your requirements. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <label htmlFor="title" className="block mb-2">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Enter title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          aria-label="Content Title"
          className={`form-control ${formik.touched.title && formik.errors.title ? 'border-red-500' : ''}`}
        />
        {formik.touched.title && formik.errors.title ? (
          <div className="text-sm text-red-500">{formik.errors.title}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block mb-2">Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          aria-label="Content Description"
          rows={4}
          className={`form-control ${formik.touched.description && formik.errors.description ? 'border-red-500' : ''}`}
        />
        {formik.touched.description && formik.errors.description ? (
          <div className="text-sm text-red-500">{formik.errors.description}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="targetAudience" className="block mb-2">Target Audience</label>
        <select
          id="targetAudience"
          name="targetAudience"
          multiple={true}
          onChange={(e) => formik.setFieldValue('targetAudience', e.target.selectedOptions.map(option => option.value))}
          aria-label="Select Target Audience"
          className={`form-select ${formik.touched.targetAudience && formik.errors.targetAudience ? 'border-red-500' : ''}`}
        >
          <option value="">Choose...</option>
          {/* Add options dynamically based on your data */}
          <option value="audience1">Audience 1</option>
          <option value="audience2">Audience 2</option>
        </select>
        {formik.touched.targetAudience && formik.errors.targetAudience ? (
          <div className="text-sm text-red-500">{formik.errors.targetAudience}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="contentTypes" className="block mb-2">Content Types</label>
        <select
          id="contentTypes"
          name="contentTypes"
          multiple={true}
          onChange={(e) => formik.setFieldValue('contentTypes', e.target.selectedOptions.map(option => option.value))}
          aria-label="Select Content Types"
          className={`form-select ${formik.touched.contentTypes && formik.errors.contentTypes ? 'border-red-500' : ''}`}
        >
          <option value="">Choose...</option>
          {/* Add options dynamically based on your data */}
          <option value="type1">Type 1</option>
          <option value="type2">Type 2</option>
        </select>
        {formik.touched.contentTypes && formik.errors.contentTypes ? (
          <div className="text-sm text-red-500">{formik.errors.contentTypes}</div>
        ) : null}
      </div>

      <button type="submit" disabled={loading} aria-label="Submit Requirements">
        Submit
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

interface ContentRequirement {
  title: string;
  description: string;
  targetAudience: string[];
  contentTypes: string[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    targetAudience: Yup.array().min(1, 'At least one audience must be selected').of(Yup.string()).required(),
    contentTypes: Yup.array().min(1, 'At least one content type must be selected').of(Yup.string()).required()
  });

  const formik = useFormik<ContentRequirement>({
    initialValues: {
      title: '',
      description: '',
      targetAudience: [],
      contentTypes: []
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        // API call to gather requirements
        console.log(values); // Simulate API call with form values
        navigate('/confirmation'); // Redirect after successful submission
      } catch (error) {
        alert('There was an error submitting your requirements. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <label htmlFor="title" className="block mb-2">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Enter title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          aria-label="Content Title"
          className={`form-control ${formik.touched.title && formik.errors.title ? 'border-red-500' : ''}`}
        />
        {formik.touched.title && formik.errors.title ? (
          <div className="text-sm text-red-500">{formik.errors.title}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block mb-2">Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          aria-label="Content Description"
          rows={4}
          className={`form-control ${formik.touched.description && formik.errors.description ? 'border-red-500' : ''}`}
        />
        {formik.touched.description && formik.errors.description ? (
          <div className="text-sm text-red-500">{formik.errors.description}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="targetAudience" className="block mb-2">Target Audience</label>
        <select
          id="targetAudience"
          name="targetAudience"
          multiple={true}
          onChange={(e) => formik.setFieldValue('targetAudience', e.target.selectedOptions.map(option => option.value))}
          aria-label="Select Target Audience"
          className={`form-select ${formik.touched.targetAudience && formik.errors.targetAudience ? 'border-red-500' : ''}`}
        >
          <option value="">Choose...</option>
          {/* Add options dynamically based on your data */}
          <option value="audience1">Audience 1</option>
          <option value="audience2">Audience 2</option>
        </select>
        {formik.touched.targetAudience && formik.errors.targetAudience ? (
          <div className="text-sm text-red-500">{formik.errors.targetAudience}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="contentTypes" className="block mb-2">Content Types</label>
        <select
          id="contentTypes"
          name="contentTypes"
          multiple={true}
          onChange={(e) => formik.setFieldValue('contentTypes', e.target.selectedOptions.map(option => option.value))}
          aria-label="Select Content Types"
          className={`form-select ${formik.touched.contentTypes && formik.errors.contentTypes ? 'border-red-500' : ''}`}
        >
          <option value="">Choose...</option>
          {/* Add options dynamically based on your data */}
          <option value="type1">Type 1</option>
          <option value="type2">Type 2</option>
        </select>
        {formik.touched.contentTypes && formik.errors.contentTypes ? (
          <div className="text-sm text-red-500">{formik.errors.contentTypes}</div>
        ) : null}
      </div>

      <button type="submit" disabled={loading} aria-label="Submit Requirements">
        Submit
      </button>
    </form>
  );
};

export default GatherRequirements;