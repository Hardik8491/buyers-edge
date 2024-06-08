"use client";
import LoginPage from "@/app/auth/login/page";
import { X } from "lucide-react";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      setIsOpen(false);
    } else if (status === 'unauthenticated') {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 30000); // 30 seconds

      return () => clearTimeout(timer);
    }
  }, [status]);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Popup Modal"
      className="fixed inset-0 flex items-center justify-center p-4 bg-opacity-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-gray-200 dark:bg-black/40 dark:border-gray-800 p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
        <div className="w-full flex justify-end items-center">
          <span onClick={closeModal} className="cursor-pointer">
            <X className="w-6 h-6" />
          </span>
        </div>
        <LoginPage />
      </div>
    </Modal>
  );
};

export default Popup;
