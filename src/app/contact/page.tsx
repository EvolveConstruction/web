"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const MAX_FILE_SIZE_MB = 25;
  const MAX_FILE_SIZE = MAX_FILE_SIZE_MB * 1028 * 1028;
  const [fileMessage, setFileMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectAddress: "",
    projectDate: "",
    projectTypes: [] as string[],
    projectDetails: "",
    budget: "",
    hearAboutUs: "",
    files: null as File[] | null,
  });

  // hit warmup endpoint
  useEffect(() => {
    const API = `${process.env.NEXT_PUBLIC_BACKEND_API}warmup`;
    if (API) fetch(API).catch(() => {});
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const [fileInputKey] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validate that at least one project type is selected
    if (formData.projectTypes.length === 0) {
      alert("Please select at least one project type.");
      return;
    }

    // Convert Object to FormData
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, String(value));
    });
    // Rewrite files correct ways
    data.delete("files");
    formData.files?.forEach((file) => data.append("files", file));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("We ran into some errors on our end :(1");
        console.log(response);
      }
    } catch (e) {
      alert("We ran into some errors on our end :(2");
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setFormData({
      ...formData,
      projectTypes: isChecked
        ? [...formData.projectTypes, value]
        : formData.projectTypes.filter((type) => type !== value),
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);

      // calculate file size and concatenate file names
      let fileSize = 0;
      let fileNames = "";
      filesArray.forEach((file) => {
        fileSize += file.size;
        fileNames += file.name + ", ";
      });
      fileNames = fileNames.slice(0, -2); // remove trailing ", "

      if (fileSize < MAX_FILE_SIZE) {
        setFormData({
          ...formData,
          files: filesArray,
        });

        setFileMessage(fileNames);
      } else {
        setFileMessage("All files must be less than 25 Mb");
      }
    }
  };

  // Generate budget options
  const budgetOptions = [
    "Under $10,000",
    // $10k steps up to $100k
    ...Array.from({ length: 9 }, (_, i) => {
      const lower = (i + 1) * 10;
      const upper = (i + 2) * 10;
      return `$${lower},000 - $${upper},000`;
    }),
    // $50k steps from $100k to $500k
    ...Array.from({ length: 8 }, (_, i) => {
      const lower = 100 + i * 50;
      const upper = lower + 50;
      return `$${lower},000 - $${upper},000`;
    }),
    // $100k steps from $500k to $1M
    ...Array.from({ length: 5 }, (_, i) => {
      const lower = 500 + i * 100;
      const upper = lower + 100;
      return `$${lower},000 - $${upper},000`;
    }),
    "Over $1,000,000",
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl mb-6">
            <span className="text-[#B8935E]">Get</span>{" "}
            <span className="text-[#C0C0C0]">In Touch</span>
          </h1>
          <p className="text-xl text-[#C0C0C0] max-w-2xl mx-auto mb-4">
            Ready to start your next project? Contact us today to discuss your
            vision.
          </p>
          <p className="text-lg text-[#B8935E]">
            Family Owned and Operated | Serving Southern Manitoba
          </p>
        </div>

        {/* Contact Information Cards - Top Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#1a1a1a] border border-[#B8935E]/20 p-8 text-center hover:border-[#B8935E]/40 transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#B8935E]/10 border border-[#B8935E]/20 mb-4">
              <Phone className="text-[#B8935E]" size={28} />
            </div>
            <h3 className="text-xl mb-3 text-[#B8935E]">Phone</h3>
            <p className="text-[#C0C0C0] text-lg mb-2">+1 (204) 823-0897</p>
            <p className="text-[#C0C0C0]/60 text-sm">Mon-Fri 8AM-6PM</p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#B8935E]/20 p-8 text-center hover:border-[#B8935E]/40 transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#B8935E]/10 border border-[#B8935E]/20 mb-4">
              <Mail className="text-[#B8935E]" size={28} />
            </div>
            <h3 className="text-xl mb-3 text-[#B8935E]">Email</h3>
            <p className="text-[#C0C0C0] text-lg mb-2">
              max@evolve-construction.ca
            </p>
            <p className="text-[#C0C0C0]/60 text-sm">
              We&apos;ll respond within 24 hours
            </p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#B8935E]/20 p-8 text-center hover:border-[#B8935E]/40 transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#B8935E]/10 border border-[#B8935E]/20 mb-4">
              <MapPin className="text-[#B8935E]" size={28} />
            </div>
            <h3 className="text-xl mb-3 text-[#B8935E]">Location</h3>
            <p className="text-[#C0C0C0] text-lg mb-2">Southern Manitoba</p>
            <p className="text-[#C0C0C0]/60 text-sm">Canada</p>
          </div>
        </div>

        {/* Contact Form - Full Width */}
        <div className="bg-[#1a1a1a] border border-[#B8935E]/20 p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl mb-4">
              <span className="text-[#B8935E]">Start Your</span>{" "}
              <span className="text-[#C0C0C0]">Project</span>
            </h2>
            <p className="text-[#C0C0C0]/80">
              Fill out the form below and we&apos;ll get back to you within 24
              hours
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#B8935E]/20 border border-[#B8935E] p-6 text-center">
              <p className="text-[#B8935E] text-xl">
                Thank you for your message! We&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information Section */}
              <div>
                <h3 className="text-xl text-[#B8935E] mb-6 pb-2 border-b border-[#B8935E]/20">
                  Personal Information
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block mb-2 text-[#C0C0C0]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0a0a0a] border border-[#B8935E]/20 p-3 text-[#C0C0C0] focus:outline-none focus:border-[#B8935E] transition-colors"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 text-[#C0C0C0]">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0a0a0a] border border-[#B8935E]/20 p-3 text-[#C0C0C0] focus:outline-none focus:border-[#B8935E] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-[#C0C0C0]">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0a0a0a] border border-[#B8935E]/20 p-3 text-[#C0C0C0] focus:outline-none focus:border-[#B8935E] transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Information Section */}
              <div>
                <h3 className="text-xl text-[#B8935E] mb-6 pb-2 border-b border-[#B8935E]/20">
                  Project Information
                </h3>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 text-[#C0C0C0]">
                        Project Address *
                      </label>
                      <input
                        type="text"
                        name="projectAddress"
                        value={formData.projectAddress}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0a0a0a] border border-[#B8935E]/20 p-3 text-[#C0C0C0] focus:outline-none focus:border-[#B8935E] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-[#C0C0C0]">
                        Approximate Project Date *
                      </label>
                      <input
                        type="date"
                        name="projectDate"
                        value={formData.projectDate}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0a0a0a] border border-[#B8935E]/20 p-3 text-[#C0C0C0] focus:outline-none focus:border-[#B8935E] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-4 text-[#C0C0C0]">
                      Project Type * (select all that apply)
                    </label>
                    <div className="grid md:grid-cols-2 gap-3 bg-[#0a0a0a] border border-[#B8935E]/20 p-6">
                      {[
                        {
                          value: "custom-build",
                          label: "Custom Build",
                        },
                        {
                          value: "bathroom-remodel",
                          label: "Bathroom Remodel",
                        },
                        {
                          value: "basement-finish",
                          label: "Basement Finish",
                        },
                        {
                          value: "interior-renovation",
                          label: "Interior Remodel/Renovation",
                        },
                        {
                          value: "exterior-remodel",
                          label: "Exterior Remodel",
                        },
                        {
                          value: "tile-installation",
                          label: "Tile/Stone Installation",
                        },
                        {
                          value: "addition",
                          label: "Addition",
                        },
                        { value: "other", label: "Other" },
                      ].map((type) => (
                        <label
                          key={type.value}
                          className="flex items-center cursor-pointer hover:text-[#B8935E] transition-colors"
                        >
                          <input
                            type="checkbox"
                            name="projectTypes"
                            value={type.value}
                            checked={formData.projectTypes.includes(type.value)}
                            onChange={handleCheckboxChange}
                            className="mr-3 w-4 h-4 accent-[#B8935E]"
                          />
                          <span className="text-[#C0C0C0]">{type.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-[#C0C0C0]">
                      Budget *
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0a0a0a] border border-[#B8935E]/20 p-3 text-[#C0C0C0] focus:outline-none focus:border-[#B8935E] transition-colors"
                    >
                      <option value="">Select a budget range</option>
                      {budgetOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 text-[#C0C0C0]">
                      Project Details *
                    </label>
                    <textarea
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us about your project vision, requirements, and any specific details..."
                      className="w-full bg-[#0a0a0a] border border-[#B8935E]/20 p-3 text-[#C0C0C0] placeholder:text-[#C0C0C0]/30 focus:outline-none focus:border-[#B8935E] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-[#C0C0C0]">
                      File Upload
                    </label>
                    <p className="text-sm text-[#C0C0C0]/60 mb-3">
                      Upload plans, inspiration images, or reference materials
                      (optional)
                    </p>
                    <div className="relative">
                      <input
                        type="file"
                        name="file"
                        multiple
                        onChange={handleFileChange}
                        className="w-full bg-[#0a0a0a] border border-[#B8935E]/20 p-3 text-[#C0C0C0] focus:outline-none focus:border-[#B8935E] file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-[#B8935E] file:text-[#0a0a0a] file:cursor-pointer hover:file:bg-[#C0C0C0] transition-colors"
                        key={fileInputKey}
                      />
                      {(formData.files || true) && (
                        <p className="text-sm text-[#B8935E] mt-2">
                          {fileMessage}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-[#C0C0C0]">
                      How did you hear about us?
                    </label>
                    <input
                      type="text"
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleChange}
                      placeholder="Referral, social media, online search, etc."
                      className="w-full bg-[#0a0a0a] border border-[#B8935E]/20 p-3 text-[#C0C0C0] placeholder:text-[#C0C0C0]/30 focus:outline-none focus:border-[#B8935E] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#B8935E] text-[#0a0a0a] py-4 text-lg font-semibold hover:bg-[#C0C0C0] transition-colors flex justify-center"
              >
                {loading ? (
                    <div className="w-6 h-6 border-4 border-[#0a0a0a] border-t-[#B8935E] rounded-full animate-spin"></div>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
