"use client";

import { useState, useEffect } from "react";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";
import ProgressBar from "@/components/ProgressBar";
import Navbar from "@/components/Navbar"; 

const NextStep = () => {
  const [step, setStep] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", dateOfBirth: "", address1: "", address2: "", city: "", state: "", zip: "",
    username: "", password: "", confirmPassword: "",
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className="max-w-lg mx-auto p-6 mt-6 bg-white shadow-md rounded-md dark:bg-gray-800">
        <ProgressBar step={step} />
        {step === 1 && <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
        {step === 2 && <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <Step3 formData={formData} setFormData={setFormData} prevStep={prevStep} setStep={setStep} />}
      </div>
    </div>
  );
};

export default NextStep;
