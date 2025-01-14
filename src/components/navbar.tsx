"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { UploadButton } from "~/utils/uploadthing";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-10 w-full bg-background">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-foreground">
          Snap<span className="text-primary">Media</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center space-x-6 md:flex">
          <Link href="/features" className="text-foreground hover:text-primary">
            Features
          </Link>
          <Link href="/pricing" className="text-foreground hover:text-primary">
            Pricing
          </Link>
          <Link href="/contact" className="text-foreground hover:text-primary">
            Contact
          </Link>
          <Link href="/docs" className="text-foreground hover:text-primary">
            Docs
          </Link>
          <Link
            href="/get-started"
            className="rounded-lg bg-primary px-4 py-2 font-semibold text-accent"
          >
            Get Started
          </Link>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              // Do something with the response
              console.log("Files: ", res);
              alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>

        {/* Mobile Menu Button */}
        <Button
          className="text-gray-600 hover:text-primary focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-white shadow-lg md:hidden">
          <div className="space-y-2 px-6 py-4">
            <Link
              href="/features"
              className="block text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="block text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="block text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/docs"
              className="block text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Docs
            </Link>
            <Link
              href="/get-started"
              className="block rounded-lg bg-primary px-4 py-2 text-center font-semibold text-foreground hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
