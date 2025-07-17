"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { IoLocationSharp } from "react-icons/io5";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, CheckCircle, AlertTriangle } from "lucide-react";

export default function ReportEmergency() {
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    success: false,
    error: false,
    message: "",
  });

  const handleSubmit = async () => {
    if (!type || !location) {
      setStatus({
        success: false,
        error: true,
        message: "Type and location are required.",
      });
      return;
    }

    setLoading(true);
    setStatus({ success: false, error: false, message: "" });

    try {
      const res = await fetch("/api/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, location, notes }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus({ success: true, error: false, message: data.message });
        setType("");
        setLocation("");
        setNotes("");
      } else {
        setStatus({ success: false, error: true, message: data.message });
      }
    } catch (err) {
      setStatus({
        success: false,
        error: true,
        message: "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGetLocation = async () => {
  setLocation("Fetching location...");

  if (!navigator.geolocation) {
    setLocation("");
    setStatus({ success: false, error: true, message: "Geolocation not supported by your browser." });
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;

      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        const data = await res.json();

        const address = data.display_name || `${latitude}, ${longitude}`;
        setLocation(address);
        setStatus({ success: true, error: false, message: "Location fetched successfully!" });
      } catch (err) {
        setLocation("");
        setStatus({ success: false, error: true, message: "Failed to fetch location details." });
      }
    },
    (error) => {
      setLocation("");
      setStatus({ success: false, error: true, message: "Permission denied or location unavailable." });
    }
  );
};


  return (
     <div className="w-full max-w-xl mx-auto mt-10 px-4 sm:px-6  py-6 bg-white dark:bg-[#092313] shadow rounded-2xl space-y-6">
  <h1 className="text-2xl sm:text-3xl font-bold text-center text-lime-500">
    Report Emergency
  </h1>

  {/* Type */}
  <div>
    <label className="block mb-1 text-sm font-medium">Type</label>
    <Select value={type} onValueChange={setType}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select emergency type" />
      </SelectTrigger>
      <SelectContent>
        {["Fire", "Accident", "Flood", "Other"].map((item) => (
          <SelectItem
            key={item}
            value={item}
            className="hover:bg-lime-100 dark:hover:bg-[#10542a]"
          >
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>

  {/* Location */}
  <div>
    <label className="block mb-1 text-sm font-medium">Location</label>
    <div className="flex flex-col sm:flex-row gap-2">
      <Input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Detecting or enter location..."
        className="flex-1"
      />
      <Button type="button" onClick={handleGetLocation} className="w-full sm:w-auto">
        <IoLocationSharp />
      </Button>
    </div>
  </div>

  {/* Notes */}
  <div>
    <label className="block mb-1 text-sm font-medium">Notes</label>
    <Textarea
      value={notes}
      onChange={(e) => setNotes(e.target.value)}
      placeholder="Add any extra details (optional)"
      className="min-h-[100px]"
    />
  </div>

  {/* Submit */}
  <Button
    onClick={handleSubmit}
    disabled={loading}
    className="w-full bg-lime-400 hover:bg-lime-500 cursor-pointer"
  >
    {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
    Submit Report
  </Button>

  {/* Status Message */}
  {status.message && (
    <div
      className={`p-3 rounded-md text-sm flex gap-2 items-center ${
        status.success
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {status.success ? (
        <CheckCircle className="w-4 h-4" />
      ) : (
        <AlertTriangle className="w-4 h-4" />
      )}
      {status.message}
    </div>
  )}
</div>

  );
}
