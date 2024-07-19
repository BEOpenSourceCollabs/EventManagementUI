import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";

function SignUp() {
  return (
    <>
      <dialog id="signup_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h1 className="font-bold text-center">Sign Up</h1>
          <div className="py-4 text-center">
            Already a member?{" "}
            <a
              className="link no-underline link-primary"
              onClick={() => {
                const loginModal = document.getElementById(
                  "login_modal"
                ) as HTMLDialogElement;
                loginModal.showModal();
                const signupModal = document.getElementById(
                  "signup_modal"
                ) as HTMLDialogElement;
                signupModal.close();
              }}
            >
              Log In
            </a>
            <br />
            <div className="py-4 mx-24">
              <GoogleLogin
                onSuccess={() => "Successfully Logged In"}
                onError={() => "Error Logging in"}
              />
            </div>
            <p className="py-4">
              <button
                className="btn btn-outline rounded-md btn-wide text-gray"
                onClick={() => {
                  const signup2Modal = document.getElementById(
                    "signup2_modal"
                  ) as HTMLDialogElement;
                  signup2Modal.showModal();
                  const signupModal = document.getElementById(
                    "signup_modal"
                  ) as HTMLDialogElement;
                  signupModal.close();
                }}
              >
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                Sign up with email
              </button>
            </p>
          </div>
          <SignUpForm />
        </div>
      </dialog>
    </>
  );
}

function SignUpForm() {
  const [nameRequired, setNameRequired] = useState(false);
  const [emailRequired, setEmailRequired] = useState(false);
  const [passwordRequired, setPasswordRequired] = useState(false);
  const [ageRequired, setAgeRequired] = useState(false);
  const [captchaRequired, setCaptchaRequired] = useState(false);
  return (
    <>
      <dialog id="signup2_modal" className="modal">
        <div className="modal-box">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2"
            onClick={() => {
              const signupModal = document.getElementById(
                "signup_modal"
              ) as HTMLDialogElement;
              signupModal.showModal();
              const signup2Modal = document.getElementById(
                "signup2_modal"
              ) as HTMLDialogElement;
              signup2Modal.close();
            }}
          >
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
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form></form>
          <div className="py-4 text-center">
            <h1 className="font-bold text-center">Finish signing up</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("email signup form submited");
              }}
            >
              <label className="form-control w-full flex items-center pb-4">
                <div className="label w-full max-w-xs">
                  <span className="label-text font-bold">Your name</span>
                </div>
                <input
                  type="text"
                  id="name"
                  placeholder="Type here"
                  className="input input-bordered rounded-md w-full max-w-xs items-center"
                  required
                />
                <div className="label w-full max-w-xs">
                {
                  nameRequired ? (<p className="label-text" style={{color: "#C41E3A"}}>Name is required</p>): (null)
                }
                </div>
                
              </label>
              <label className="form-control w-full flex items-center pb-4">
                <div className="label w-full max-w-xs">
                  <span className="label-text font-bold">Email address</span>
                </div>
                <input
                  type="email"
                  id="email"
                  placeholder="Type here"
                  className="input input-bordered rounded-md w-full max-w-xs items-center"
                  required
                />
                <div className="label w-full max-w-xs">
                {
                  emailRequired ? (<p className="label-text" style={{color: "#C41E3A"}}>Email is required</p>): (null)
                }
                </div>
                
              </label>
              <label className="form-control w-full flex items-center pb-4">
                <div className="label w-full max-w-xs">
                  <span className="label-text font-bold">Password</span>
                </div>
                <input
                  type="password"
                  id="password"
                  placeholder="Type here"
                  className="input input-bordered rounded-md w-full max-w-xs items-center"
                  required
                  minLength={8}
                />
                <div className="label w-full max-w-xs">
                {
                  passwordRequired ? (<p className="label-text" style={{color: "#C41E3A"}}>Password is required</p>): (null)
                }
                </div>
              </label>
              <label className="form-control w-full flex items-center pb-4">
                <div className="label w-full max-w-xs">
                  <span className="label-text font-bold">Location</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered rounded-md w-full max-w-xs items-center"
                  required
                />
              </label>
              <label className="form-control mx-16 pb-4 ">
                <div className="cursor-pointer label">
                  <span className="label-text font-bold">Age</span>
                </div>
                <label className="form-control pb-4 flex-row items-center ">
                  <input
                    id="age"
                    type="checkbox"
                    className="checkbox checkbox-xs rounded-none checkbox-primary"
                    required
                  />
                  <div className="cursor-pointer label">
                    <span className="label-text ml-2">
                      I'm 18 years of age or older
                    </span>
                  </div>
                  
                </label>
                <div className="label w-full max-w-xs">
                  {
                    ageRequired ? (<p className="label-text" style={{color: "#C41E3A"}}>You need to be 18 or older to continue</p>): (null)
                  }
                </div>
                  
              </label>
              <button 
              onClick={() =>
                {
                  let emailInput = document.querySelector("#email") as HTMLInputElement;
                  let passwordInput = document.querySelector("#password") as HTMLInputElement;
                  let nameInput = document.querySelector("#name") as HTMLInputElement;
                  let ageInput = document.querySelector("#age") as HTMLInputElement;
                  if(emailInput.value.length == 0)
                  {
                    console.log("Empty");
                    setEmailRequired(true);
                  }else{
                    setEmailRequired(false);
                  }

                  if(passwordInput.value.length == 0)
                  {
                    console.log("Empty");
                    setPasswordRequired(true)
                  }else{
                    setPasswordRequired(false)
                  }

                  if(nameInput.value.length == 0)
                  {
                    console.log("Empty");
                    setNameRequired(true)
                  }else{
                    setNameRequired(false)
                  }

                  if(ageInput.checked == false)
                  {
                    console.log(ageInput.checked);
                    setAgeRequired(true)
                  }else{
                    setAgeRequired(false)
                  }
                }
              }
              className="btn btn-error rounded-md text-white w-2/3 ">
                Sign up
              </button>
            </form>

            <p className="mt-4">
              Already a member? &nbsp;
              <a
                className="link no-underline link-primary"
                onClick={() => {
                  const loginModal = document.getElementById(
                    "login_modal"
                  ) as HTMLDialogElement;
                  loginModal.showModal();
                  const signup2Modal = document.getElementById(
                    "signup2_modal"
                  ) as HTMLDialogElement;
                  signup2Modal.close();
                }}
              >
                Log in
              </a>
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default SignUp;
