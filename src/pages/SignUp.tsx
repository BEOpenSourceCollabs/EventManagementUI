import { GoogleLogin } from "@react-oauth/google";

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
          <p className="py-4 text-center">
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
            <p className="py-4 mx-24">
              <GoogleLogin
                onSuccess={() => "Successfully Logged In"}
                onError={() => "Error Logging in"}
              />
            </p>
            <p className="py-4">
              <button
                className="btn btn-outline gray rounded-md btn-wide"
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
                Sign up with email
              </button>
            </p>
          </p>
          <SignUpForm />
        </div>
      </dialog>
    </>
  );
}

function SignUpForm() {
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
            &lt;
          </button>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <p className="py-4 text-center">
            <h1 className="font-bold text-center">Finish signing up</h1>
            <label className="form-control w-full flex items-center pb-4">
              <div className="label w-full max-w-xs">
                <span className="label-text font-bold">Your name</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered rounded-md w-full max-w-xs items-center"
              />
            </label>
            <label className="form-control w-full flex items-center pb-4">
              <div className="label w-full max-w-xs">
                <span className="label-text font-bold">Email address</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered rounded-md w-full max-w-xs items-center"
              />
            </label>
            <label className="form-control w-full flex items-center pb-4">
              <div className="label w-full max-w-xs">
                <span className="label-text font-bold">Password</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered rounded-md w-full max-w-xs items-center"
              />
            </label>
            <label className="form-control w-full flex items-center pb-4">
              <div className="label w-full max-w-xs">
                <span className="label-text font-bold">Location</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered rounded-md w-full max-w-xs items-center"
              />
            </label>
            <label className="form-control mx-16 pb-4 ">
              <div className="cursor-pointer label">
                <span className="label-text font-bold">Age</span>
              </div>
              <label className="form-control pb-4 flex-row items-center ">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs rounded-none checkbox-primary"
                />
                <div className="cursor-pointer label">
                  <span className="label-text ml-2">
                    I'm 18 years of age or older
                  </span>
                </div>
              </label>
            </label>
            <button className="btn btn-error rounded-md text-white w-2/3 ">
              Sign up
            </button>

            <p className="mt-4">
              Already a member yet? &nbsp;
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
          </p>
        </div>
      </dialog>
    </>
  );
}

export default SignUp;
