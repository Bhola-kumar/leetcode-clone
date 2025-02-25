import { IoClose } from "react-icons/io5";
import Login from "./Login";
import { useEffect, useState } from "react";
import Signup from "./Signup";
import ResetPassword from "./ResetPassword";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useCloseModal } from "./useCloseModal"; // Import the hook
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const AuthModal: React.FC = () => {
  const authModal = useSelector((state: RootState) => state.auth);
  const closeModal = useCloseModal(); // Get the close function
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);
  const [pageLoading,setpageLoading] = useState(true);
  
  useEffect(() => {
    if(user) router.push('/');
    if(!loading && !user)setpageLoading(false);
  }, [user,router,loading]);
  
  if (!authModal.isOpen) return null; // Don't render if modal is closed
  if(pageLoading) return null;

  return (
    <>
      {/* Close modal when clicking outside */}
      <div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60"
        onClick={closeModal}
      ></div>
      <div className="w-full sm:w-[450px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center">
        <div className="relative w-full h-full mx-auto flex items-center justify-center">
          <div className="bg-white rounded-lg shadow relative w-full bg-gradient-to-b from-brand-orange to-slate-900 mx-6">
            <div className="flex justify-end p-2">
              <button
                type="button"
                onClick={closeModal} // Close modal on click
                className="bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white text-white"
              >
                <IoClose className="h-5 w-5" />
              </button>
            </div>
            {/* Render based on authModal.type */}
            {authModal.type === "login" ? (
              <Login />
            ) : authModal.type === "register" ? (
              <Signup />
            ) : (
              <ResetPassword />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthModal;
