import * as React from "react";
import {type Control } from "react-hook-form";
import {type LucideIcon } from "lucide-react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";

interface CustomFormFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  control: Control<any>;
  name: string;
  label: string;
  Icon?: LucideIcon;
  labelComponent?: React.ReactNode;
}

export function CustomFormField({
  control,
  name,
  label,
  Icon,
  type,
  labelComponent,
  ...props
}: CustomFormFieldProps) {
  const isPassword = type === "password";
  const InputComponent = isPassword ? PasswordInput : Input;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex items-center justify-between">
            <FormLabel>{label}</FormLabel>
            {labelComponent}
          </div>
          <FormControl>
            <div className="relative">
              {Icon && (
                <Icon className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
              )}
              <InputComponent
                type={type}
                className={Icon ? "pl-10" : ""}
                {...props}
                {...field}
              />
            </div>
          </FormControl>
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
}

