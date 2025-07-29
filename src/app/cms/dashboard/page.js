// pages/cms/dashboard.js or app/cms/dashboard/page.js (depending on your Next.js version)
"use client";
import { useState } from "react";
import useCMSStore from "@/stores/cmsStore";
import { Icon } from "@iconify/react";

export default function CMSDashboard() {
  const [activeTab, setActiveTab] = useState("hero");
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const tabs = [
    { id: "hero", label: "Hero Section", icon: "heroicons:home" },
    { id: "services", label: "Services", icon: "heroicons:cog-6-tooth" },
    { id: "resources", label: "Resources", icon: "heroicons:document-text" },
    { id: "technology", label: "Technology", icon: "heroicons:cpu-chip" },
    { id: "stories", label: "Success Stories", icon: "heroicons:star" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Content Management System
            </h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              View Live Site
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 bg-white rounded-lg shadow-sm p-6">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition-colors ${
                    activeTab === tab.id
                      ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}>
                  <Icon icon={tab.icon} className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === "hero" && <HeroEditor />}
            {activeTab === "services" && <ServicesEditor />}
            {activeTab === "resources" && <ResourcesEditor />}
            {activeTab === "technology" && <TechnologyEditor />}
            {activeTab === "stories" && <StoriesEditor />}
          </div>
        </div>
      </div>
    </div>
  );
}

// Hero Section Editor Component
function HeroEditor() {
  const { heroData, updateHeroData } = useCMSStore();
  const [formData, setFormData] = useState(heroData);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    updateHeroData(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(heroData);
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Hero Section</h2>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Edit
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500">
              Cancel
            </button>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          {isEditing ? (
            <textarea
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
            />
          ) : (
            <p className="text-gray-900 p-3 bg-gray-50 rounded-md">
              {heroData.title}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          {isEditing ? (
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
            />
          ) : (
            <p className="text-gray-900 p-3 bg-gray-50 rounded-md">
              {heroData.description}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            CTA Text
          </label>
          {isEditing ? (
            <input
              type="text"
              value={formData.ctaText}
              onChange={(e) =>
                setFormData({ ...formData, ctaText: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ) : (
            <p className="text-gray-900 p-3 bg-gray-50 rounded-md">
              {heroData.ctaText}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            CTA Link
          </label>
          {isEditing ? (
            <input
              type="text"
              value={formData.ctaLink}
              onChange={(e) =>
                setFormData({ ...formData, ctaLink: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ) : (
            <p className="text-gray-900 p-3 bg-gray-50 rounded-md">
              {heroData.ctaLink}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// Services Editor Component
function ServicesEditor() {
  const { services, updateService, addService, deleteService } = useCMSStore();
  const [editingId, setEditingId] = useState(null);
  const [editingData, setEditingData] = useState({});

  const handleEdit = (service) => {
    setEditingId(service.id);
    setEditingData(service);
  };

  const handleSave = () => {
    updateService(editingId, editingData);
    setEditingId(null);
    setEditingData({});
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditingData({});
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Services</h2>
        <button
          onClick={() =>
            addService({
              title: "New Service",
              number: "04",
              image: "/placeholder.jpg",
            })
          }
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
          Add Service
        </button>
      </div>

      <div className="space-y-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="border border-gray-200 rounded-lg p-4">
            {editingId === service.id ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={editingData.title || ""}
                  onChange={(e) =>
                    setEditingData({ ...editingData, title: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Service title"
                />
                <input
                  type="text"
                  value={editingData.number || ""}
                  onChange={(e) =>
                    setEditingData({ ...editingData, number: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Service number"
                />
                <input
                  type="text"
                  value={editingData.image || ""}
                  onChange={(e) =>
                    setEditingData({ ...editingData, image: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Image URL"
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 text-sm">
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-400 text-white px-3 py-1 rounded-md hover:bg-gray-500 text-sm">
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">{service.title}</h3>
                  <p className="text-sm text-gray-500">
                    Number: {service.number}
                  </p>
                  <p className="text-sm text-gray-500">
                    Image: {service.image}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(service)}
                    className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 text-sm">
                    Edit
                  </button>
                  <button
                    onClick={() => deleteService(service.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 text-sm">
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Similar components for ResourcesEditor, TechnologyEditor, StoriesEditor...
function ResourcesEditor() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Resources</h2>
      <p className="text-gray-600">
        Resources editor component - similar structure to Services
      </p>
    </div>
  );
}

function TechnologyEditor() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Technology Advantage
      </h2>
      <p className="text-gray-600">
        Technology editor component - similar structure to Services
      </p>
    </div>
  );
}

function StoriesEditor() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Success Stories
      </h2>
      <p className="text-gray-600">
        Stories editor component - similar structure to Services
      </p>
    </div>
  );
}
