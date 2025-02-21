import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Input, Label, Spinner } from "@/components/ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { motion } from "framer-motion";
import { step2Schema } from "@/utils/validationSchema";

export default function Step2({ formData, setFormData, prevStep, nextStep }) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(step2Schema),
    defaultValues: formData,
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {[{ id: "addressLine1", label: "Address Line 1", error: errors.addressLine1, required: true },
        { id: "addressLine2", label: "Address Line 2" },
        { id: "city", label: "City", error: errors.city, required: true }
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
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 dark:bg-gray-600 dark:text-white"
          />
          {error && (
            <p className="text-red-500 text-xs pt-1">{error.message}</p>
          )}
        </div>
      ))}

      <div>
        <Label
          htmlFor="state"
          className="text-sm font-medium text-gray-700 dark:text-white"
        >
          State
        </Label>
        <Select
          value={formData.state}
          onValueChange={(value) => {
            setValue("state", value);
          }}
        >
          <SelectTrigger className="w-full px-3 py-2 border rounded-lg focus:ring-2 dark:bg-gray-600 dark:text-white">
            <SelectValue placeholder="Select a State" />
          </SelectTrigger>
          <SelectContent>
            {["Bangladesh", "India", "United States"].map((state) => (
              <SelectItem key={state} value={state}>
                {state}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.state && (
          <p className="text-red-500 text-xs pt-1">{errors.state.message}</p>
        )}
      </div>

      {[{ id: "zipCode", label: "Zip Code", error: errors.zipCode, required: true }].map(
        ({ id, label, error }) => (
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
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 dark:bg-gray-600 dark:text-white"
            />
            {error && (
              <p className="text-red-500 text-xs pt-1">{error.message}</p>
            )}
          </div>
        )
      )}

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
          {loading ? <Spinner /> : "Next"}
        </Button>
      </div>
    </motion.form>
  );
}
