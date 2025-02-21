import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button, Input, Label, Spinner } from "@/components/ui";
import { toast } from "react-hot-toast";
import { step1Schema } from "@/utils/validationSchema";

export default function Step1({ formData, setFormData, nextStep }) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(step1Schema),
    defaultValues: formData,
    mode: "onChange",
  });

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setFormData((prev) => ({ ...prev, ...data }));
      setLoading(false);
      nextStep();
    }, 1000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit, () =>
        toast.error("Please fill all required fields correctly!")
      )}
      className="space-y-4 p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto dark:bg-gray-800 dark:text-white"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      {[
        {
          id: "name",
          label: "Name",
          error: errors.name,
          required: true,
        },
        {
          id: "email",
          label: "Email",
          error: errors.email,
          required: true,
        },
        {
          id: "dob",
          label: "Date of Birth",
          error: errors.dob,
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
          <Input
            id={id}
            {...register(id)}
            type={id === "dob" ? "date" : "text"}
            onClick={id === "dob" ? (e) => e.target.showPicker() : undefined}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 dark:bg-gray-600 dark:text-white"
          />
          {error && (
            <p className="text-red-500 text-xs pt-1">{error.message}</p>
          )}
        </div>
      ))}

      <div className="flex justify-end mt-6">
        <Button type="submit" disabled={loading}>
          {loading ? <Spinner /> : "Next"}
        </Button>
      </div>
    </motion.form>
  );
}
