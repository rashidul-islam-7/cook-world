export const metadata = {
  title: "Register | CookWorld",
};

import SignUpClient from "./SignUpClient";

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-16 mt-10 md:mt-20 px-4">
      <div className="w-full max-w-xl rounded-3xl border border-gray-200/60 bg-white/80 p-6 shadow-2xl backdrop-blur-xl transition-all sm:p-8 dark:border-gray-700 dark:bg-slate-900/80">
        <SignUpClient />
      </div>
    </div>
  );
};

export default SignUpPage;
