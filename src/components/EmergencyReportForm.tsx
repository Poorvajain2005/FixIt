
import React, { useState } from 'react';
import { categories, reportEmergencyIssue } from '../utils/mockData';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { AlertTriangleIcon } from 'lucide-react';

interface EmergencyReportFormProps {
  onSubmit: (data: any) => void;
}

interface FormData {
  title: string;
  description: string;
  category: string;
  location: string;
  images: FileList | null;
}

const EmergencyReportForm: React.FC<EmergencyReportFormProps> = ({ onSubmit }) => {
  const { isAuthenticated, user } = useAuth();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    category: 'Public Safety',
    location: '',
    images: null
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setFormData({
      ...formData,
      images: files
    });

    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(files[0]);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please log in to report an emergency.",
        variant: "destructive"
      });
      return;
    }

    // Validate form
    if (!formData.title || !formData.description || !formData.location) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields for the emergency report.",
        variant: "destructive"
      });
      return;
    }

    // Create emergency issue
    const imageUrls = imagePreview ? [imagePreview] : [];
    const emergencyIssue = reportEmergencyIssue({
      title: formData.title,
      description: formData.description,
      category: formData.category,
      location: formData.location,
      reportedBy: user?.id,
      images: imageUrls,
      tags: ['emergency', formData.category.toLowerCase()],
    });

    if (emergencyIssue) {
      onSubmit(emergencyIssue);
      
      // Reset form
      setFormData({
        title: '',
        description: '',
        category: 'Public Safety',
        location: '',
        images: null
      });
      setImagePreview(null);
      setOpen(false);
      
      toast({
        title: "Emergency Reported",
        description: "Your emergency issue has been submitted with high priority!",
        variant: "default",
      });
    }
  };

  const handleLocationDetect = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData({
            ...formData,
            location: `Lat: ${position.coords.latitude.toFixed(6)}, Lng: ${position.coords.longitude.toFixed(6)}`
          });
          
          toast({
            title: "Location Detected",
            description: "Your current location has been added to the form.",
          });
        },
        () => {
          toast({
            title: "Location Error",
            description: "Unable to get your location. Please enter it manually.",
            variant: "destructive"
          });
        }
      );
    } else {
      toast({
        title: "Geolocation Not Supported",
        description: "Your browser doesn't support geolocation. Please enter location manually.",
        variant: "destructive"
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-fixit-danger hover:bg-red-700 font-bold">
          <AlertTriangleIcon className="w-5 h-5 mr-2" />
          Report Emergency
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="text-fixit-danger text-xl flex items-center">
            <AlertTriangleIcon className="w-6 h-6 mr-2" />
            Report Emergency Issue
          </DialogTitle>
        </DialogHeader>
        <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-4">
          <p className="text-red-800 text-sm">
            Use this form only for urgent issues that require immediate attention, such as dangerous situations, 
            exposed electrical wires, major flooding, or other safety hazards.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Emergency Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              placeholder="Brief title describing the emergency"
              className="input-field mt-1"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Emergency Description *
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              required
              placeholder="Describe the emergency situation in detail..."
              className="input-field mt-1"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category *
            </label>
            <select
              id="category"
              name="category"
              required
              className="input-field mt-1"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Emergency Location *
            </label>
            <div className="flex mt-1">
              <input
                type="text"
                id="location"
                name="location"
                required
                placeholder="Address or location description"
                className="input-field flex-grow"
                value={formData.location}
                onChange={handleChange}
              />
              <Button 
                type="button" 
                variant="outline"
                className="ml-2 whitespace-nowrap" 
                onClick={handleLocationDetect}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Detect
              </Button>
            </div>
          </div>

          <div>
            <label htmlFor="images" className="block text-sm font-medium text-gray-700">
              Images (Recommended)
            </label>
            <input
              type="file"
              id="images"
              name="images"
              accept="image/*"
              className="input-field mt-1"
              onChange={handleImageChange}
            />
            {imagePreview && (
              <div className="mt-2">
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="w-full max-h-40 object-cover rounded-md" 
                />
              </div>
            )}
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-fixit-danger hover:bg-red-700"
            >
              Submit Emergency Report
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EmergencyReportForm;
