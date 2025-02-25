import { useDispatch } from "react-redux";
import { useEffect, useCallback } from "react";
import { closeModal } from "@/store/slices/authSlice";

export function useCloseModal() {
  const dispatch = useDispatch();

  // Function to close the modal
  const handleClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [handleClose]);

  return handleClose; // Return function instead of calling it
}
