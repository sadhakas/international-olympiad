import { useState } from 'react';
import qrImage from '../../assets/qr-code-pay-events.png';

export default function RegistrationForm() {
  // 1. Manage Form Data State
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    email: '',
    phone: '',
    studentId: '',
    paymentPlan: '100', // Default to 100
  });

  // 2. Manage File & UI State
  const [imageBase64, setImageBase64] = useState(null);
  const [fileName, setFileName] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [regId, setRegId] = useState('');

  // Pulling the URL securely from our environment variables
  const GAS_URL = import.meta.env.VITE_GAS_URL;

  // Handle standard text inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 3. Handle File Upload and Base64 Conversion
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Restrict file size to 2MB (2 * 1024 * 1024 bytes)
    if (file.size > 2097152) {
      alert("File size must be less than 2MB");
      e.target.value = null; // Reset input
      return;
    }

    setFileName(file.name);

    // Convert file to Base64
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // 4. Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageBase64) {
      alert('Please upload a payment screenshot.');
      return;
    }

    setStatus('loading');

    // Combine text data and image into one payload
    const payload = { ...formData, imageBase64 };

    try {
      const response = await fetch(GAS_URL, {
        method: 'POST',
        // Using text/plain prevents CORS preflight errors with Google Apps Script
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.status === 'success') {
        setStatus('success');
        setRegId(result.regId);
      } else {
        setStatus('error');
        console.error(result.message);
      }
    } catch (error) {
      setStatus('error');
      console.error('Submission failed:', error);
    }
  };

  // --- RENDER SUCCESS SCREEN ---
  if (status === 'success') {
    return (
      <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Registration Successful!</h2>
        <p className="text-gray-700 mb-2">Thank you, {formData.name}.</p>
        <p className="text-gray-700 mb-6">Your Registration ID is: <span className="font-bold">{regId}</span></p>
        
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Next Crucial Step</h3>
          <p className="text-sm text-gray-600 mb-4">Join our official WhatsApp group for all event updates.</p>
          <a 
            href="https://chat.whatsapp.com/YOUR_PLACEHOLDER_LINK" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded transition duration-200"
          >
            Join WhatsApp Community
          </a>
        </div>
      </div>
    );
  }

  // --- RENDER REGISTRATION FORM ---
  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Gita Olympiad Registration</h2>
      
      {status === 'error' && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
          Something went wrong. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Basic Info Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input required type="text" name="name" value={formData.name} onChange={handleInputChange} className="mt-1 w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Student ID</label>
            <input required type="text" name="studentId" value={formData.studentId} onChange={handleInputChange} className="mt-1 w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">College Name</label>
          <input required type="text" name="college" value={formData.college} onChange={handleInputChange} className="mt-1 w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="mt-1 w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="mt-1 w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>

        {/* Payment Plan Selection */}
        <div className="pt-4 border-t">
          <label className="block text-base font-medium text-gray-800 mb-3">Select Payment Plan</label>
          <div className="space-y-2">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="radio" name="paymentPlan" value="100" checked={formData.paymentPlan === '100'} onChange={handleInputChange} className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
              <span className="text-gray-700">Registration Only (₹100)</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="radio" name="paymentPlan" value="300" checked={formData.paymentPlan === '300'} onChange={handleInputChange} className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
              <span className="text-gray-700">Registration + Hard Copy of Gita As It Is (₹300)</span>
            </label>
          </div>
        </div>

        {/* Payment & Upload Section */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center">
          <p className="text-sm text-gray-600 mb-3">Total Amount to Pay: <strong className="text-lg text-gray-800">₹{formData.paymentPlan}</strong></p>
          
          {/* Mobile: Tap to Pay Button (Hidden on larger screens using md:hidden) */}
          {/* Mobile: App-Specific Tap to Pay Buttons (Hidden on larger screens) */}
          <div className="md:hidden mb-4 space-y-3">
            <p className="text-xs text-gray-500 mb-2">Select your payment app:</p>
            
            <div className="grid grid-cols-3 gap-2">
              {/* Google Pay */}
              <a 
                href={`gpay://upi/pay?pa=yogya@superyes&pn=Gita%20Olympiad&am=${formData.paymentPlan}&cu=INR`}
                className="flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white text-xs font-medium py-2 rounded shadow-sm"
              >
                GPay
              </a>
              
              {/* PhonePe */}
              <a 
                href={`phonepe://pay?pa=yogya@superyes&pn=Gita%20Olympiad&am=${formData.paymentPlan}&cu=INR`}
                className="flex items-center justify-center bg-purple-700 hover:bg-purple-800 text-white text-xs font-medium py-2 rounded shadow-sm"
              >
                PhonePe
              </a>

              {/* Paytm */}
              <a 
                href={`paytmmp://pay?pa=yogya@superyes&pn=Gita%20Olympiad&am=${formData.paymentPlan}&cu=INR`}
                className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium py-2 rounded shadow-sm"
              >
                Paytm
              </a>
            </div>

            {/* Fallback Generic Link just in case */}
            <div className="mt-3">
              <a 
                href={`upi://pay?pa=yogya@superyes&pn=Gita%20Olympiad&am=${formData.paymentPlan}&cu=INR`}
                className="text-xs text-blue-600 underline"
              >
                Other UPI Apps
              </a>
            </div>

            <div className="flex items-center my-3">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-3 text-gray-500 text-xs">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
          </div>

          {/* Desktop & Fallback: QR Code */}
          <div className="mb-4">
            <p className="text-xs text-gray-500 mb-2">Scan QR code using any UPI app</p>
            <img 
              src={qrImage} 
              alt="UPI QR Code" 
              className="w-40 h-40 mx-auto rounded-lg shadow-sm border border-gray-300 object-cover" 
            />
          </div>
          
          <p className="text-sm text-gray-600 mb-5 bg-white py-2 rounded border border-gray-200">
            UPI ID: <strong className="text-gray-800 font-mono">yogya@superyes</strong>
          </p>

          <div className="text-left mt-4 pt-4 border-t border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Payment Screenshot</label>
            <input required type="file" accept="image/*" onChange={handleFileChange} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            {fileName && <p className="text-xs text-green-600 mt-2 font-medium">Selected: {fileName}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={status === 'loading'}
          className={`w-full py-3 px-4 text-white font-bold rounded shadow-md transition duration-200 ${status === 'loading' ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-900'}`}
        >
          {status === 'loading' ? 'Submitting...' : 'Complete Registration'}
        </button>
      </form>
    </div>
  );
}