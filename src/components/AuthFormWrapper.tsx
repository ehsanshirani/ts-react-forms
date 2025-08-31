import * as React from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ButtonCustom from "@/components/ButtonCustom"
import GoogleIcon from "@/assets/icons/GoogleIcon"

interface AuthFormWrapperProps {
  children: React.ReactNode
  title: string
  description: string
  socialLoginLabel?: string
  onSocialLoginClick?: () => void
  footerText: string
  footerLinkText: string
  footerLinkTo: string
}

export function AuthFormWrapper({
  children,
  title,
  description,
  socialLoginLabel,
  onSocialLoginClick,
  footerText,
  footerLinkText,
  footerLinkTo,
}: AuthFormWrapperProps) {
  return (
    <div className="flex w-full items-center justify-center p-4 sm:p-6 lg:p-8">
      <Card className="animate-fade-in w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold tracking-tight">
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {children}

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card text-muted-foreground px-2">یا</span>
            </div>
          </div>

          <ButtonCustom
            variant="outline"
            type="button"
            className="w-full"
            onClick={onSocialLoginClick}
          >
            <GoogleIcon />
            {socialLoginLabel}
          </ButtonCustom>
        </CardContent>
        <CardFooter className="flex justify-center text-sm">
          <p className="text-muted-foreground">
            {footerText}
            <Link
              to={footerLinkTo}
              className="text-primary mx-1 font-semibold underline-offset-4 hover:underline"
            >
              {footerLinkText}
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
