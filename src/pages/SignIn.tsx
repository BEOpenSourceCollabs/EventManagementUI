import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";

function SignIn() {
  const [isPassword, setIsPassword] = useState(true);
  const [emailRequired, setEmailRequired] = useState(false);
  const [passwordRequired, setPasswordRequired] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formErrors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        }); 
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    const newErrors = validateForm(formData);
    setErrors(newErrors);
};
const validateForm = (data: { email: any; password: any; username?: any; confirmPassword?: any; }) => {
  const errors = {
    email: '',
    password: '',
  };

  if(!data.email.trim()) {
    errors.email = 'Email is required';
  }

  if(!data.password) {
    errors.password = 'Password is required';
  }

  return errors;
};

let dog = 1;


  return (
    <>
      <dialog id="login_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h1 className="font-bold text-center">Log in</h1>
          <div className="py-4 text-center">
            <p>
              Not a member yet? &nbsp;
              <a
                className="link no-underline link-primary"
                onClick={() => {
                  const signupModal = document.getElementById(
                    "signup_modal"
                  ) as HTMLDialogElement;
                  signupModal.showModal();
                  const loginModal = document.getElementById(
                    "login_modal"
                  ) as HTMLDialogElement;
                  loginModal.close();
                }}
              >
                Sign up
              </a>
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if(formErrors.email.length == 0 && formErrors.password.length == 0)
                {
                  console.log("email login form submited");
                }
              }}
            >
              <label className="form-control w-full flex items-center pb-4">
                <div className="label w-full max-w-xs">
                  <span className="label-text font-bold">Email</span>
                </div>
                <input
                  type="email"
                  required
                  placeholder="Type here"
                  name="email"
                  className="email input input-bordered rounded-md w-full max-w-xs items-center"
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="label w-full max-w-xs">
                {formErrors.email && (
                    <span style={{color: "#C41E3A"}} className="error-message">
                      {formErrors.email}
                    </span>
                  )}
                </div>
              </label>
              <label className="form-control w-full flex items-center">
                <div className="label w-full max-w-xs">
                  <span className="label-text font-bold">Password</span>
                  <a className="label-text-alt link no-underline link-primary">
                    Forgot password
                  </a>
                </div>
                <label className="input input-bordered rounded-md flex items-center w-full max-w-xs gap-2 ">
                  <input
                    type={isPassword ? "password" : "text"}
                    placeholder="Type here"
                    required
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                    className="passwordSignIn"
                  />
                  
                  <button onClick={() => setIsPassword(!isPassword)}>
                    {!isPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    )}
                  </button>
                </label>
                <div className="label w-full max-w-xs">
                  {formErrors.password && (
                    <span style={{color: "#C41E3A"}} className="error-message">
                      {formErrors.password}
                    </span>
                  )}
                </div>
              </label>
              <button
              onClick={handleSubmit}
              className="btn btn-error rounded-md text-white my-4 w-3/4">
                Log in
              </button>
            </form>
          </div>

          <div className="divider">or</div>

          <div className="py-4 px-16">
            <GoogleLogin
              onSuccess={() => "Successfully Logged In"}
              onError={() => "Error Logging in"}
            />
          </div>
        </div>
      </dialog>
    </>
  );
}
export default SignIn;
