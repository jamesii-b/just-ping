import React, { useState } from "react";
import TextInput from "./components/TextInput";
import TextAreaInput from "./components/TextAreaInput";
import SelectInput from "./components/SelectInput";
import bFormSubmit from "./functions/longformsubmission";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
    service: "",
  });
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: "" });
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};

    // Check form validity
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.details.trim()) {
      errors.details = "Please enter your Details";
    }
    if (!formData.service) {
      errors.service = "Please select a service";
    }

    // Set errors if any
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Start loading
    setLoading(true);

    // Submit form data
    try {
      const response = await bFormSubmit(
        formData.name,
        formData.email,
        formData.details,
        formData.service
      );
      if (response) {
        setSubmissionStatus("success");
        setFormData({
          name: "",
          email: "",
          details: "",
          service: "",
        });
      } else {
        setSubmissionStatus("error");
      }
    } catch (err) {
      setSubmissionStatus("error");
    } finally {
      // Stop loading
      setLoading(false);

      // Clear submission status after 3 seconds
      setTimeout(() => {
        setSubmissionStatus(null);
      }, 5000);
    }
  };

  return (
    <div className="bg-slate-500 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl mb-4 text-center font-bold">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <TextInput
            id="name"
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            error={errors.name}
          />
          <TextInput
            id="email"
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            error={errors.email}
          />
          <SelectInput
            id="service"
            name="service"
            label="Service"
            value={formData.service}
            onChange={handleChange}
            options={[
              { value: "cctv-intercom", label: "CCTV & Intercom" },
              { value: "datapoint", label: "Datapoint Mount" },
              { value: "others", label: "Others" },
            ]}
            placeholder="Select a service"
            error={errors.service}
          />
          <TextAreaInput
            id="details"
            name="details"
            label="Details"
            value={formData.details}
            onChange={handleChange}
            placeholder="Enter your details"
            required
            error={errors.details}
          />

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 mt-4"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {submissionStatus === "success" && (
            <p className="text-green-900 mt-2 text-center">
              Form submitted successfully! Our team will reach out to you.
            </p>
          )}
          {submissionStatus === "error" && (
            <p className="text-red-500 mt-2 text-center">
              Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
