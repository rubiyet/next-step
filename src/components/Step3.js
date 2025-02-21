import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Input, Label } from "@/components/ui";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { step3Schema } from "@/utils/validationSchema";

export default function Step3({ formData, setFormData, prevStep, setStep }) {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(step3Schema),
    defaultValues: formData,
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Something went wrong");

      toast.success(result.message);
      reset();
      setFormData({});
      setStep(1);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit, () =>
        toast.error("Please fill all required fields correctly!")
      )}
      className="space-y-4 p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto dark:bg-gray-800 dark:text-white"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {[
        {
          id: "username",
          label: "Username",
          error: errors.username,
          required: true,
        },
        {
          id: "password",
          label: "Password",
          error: errors.password,
          required: true,
        },
        {
          id: "confirmPassword",
          label: "Confirm Password",
          error: errors.confirmPassword,
          required: true,
        },
      ].map(({ id, label, error }) => (
        <div key={id}>
          <Label
            htmlFor={id}
            className="text-sm font-medium text-gray-700 dark:text-white"
          >
            {label}
          </Label>
          <div className="relative">
            <Input
              type={
                id.includes("password")
                  ? (id === "password" && showPassword) ||
                    (id === "confirmPassword" && showConfirmPassword)
                    ? "text"
                    : "password"
                  : "text"
              }
              id={id}
              {...register(id)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 dark:bg-gray-600 dark:text-white"
            />
            {id.includes("password") && (
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center"
                onClick={() =>
                  id === "password"
                    ? setShowPassword(!showPassword)
                    : setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {(id === "password" && showPassword) ||
                (id === "confirmPassword" && showConfirmPassword) ? (
                  <AiOutlineEyeInvisible className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                ) : (
                  <AiOutlineEye className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                )}
              </button>
            )}
          </div>
          {error && (
            <p className="text-red-500 text-xs pt-1">{error.message}</p>
          )}
        </div>
      ))}

      <div className="flex justify-between mt-6">
        <Button
          type="button"
          onClick={prevStep}
          className="bg-gray-500 hover:bg-gray-600"
          disabled={loading}
        >
          Previous
        </Button>
        <Button type="submit" disabled={loading}>
          {loading ? (
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-white dark:bg-black rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-white dark:bg-black rounded-full animate-bounce delay-150"></div>
              <div className="w-2 h-2 bg-white dark:bg-black rounded-full animate-bounce delay-300"></div>
            </div>
          ) : (
            "Submit"
          )}
        </Button>
      </div>
    </motion.form>
  );
}
