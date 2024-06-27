import { GoogleLogin } from "@react-oauth/google";

function SignIn() {
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
          <p className="py-4 text-center">
            <p>
              Not a member yet? &nbsp;
              <a
                className="link no-underline link-primary"
                onClick={() => {
                  document.getElementById("signup_modal").showModal();
                  document.getElementById("login_modal")?.close();
                }}
              >
                Sign up
              </a>
            </p>
            

            <label className="form-control w-full flex items-center pb-4">
              <div className="label w-full max-w-xs">
                <span className="label-text font-bold">Email</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered rounded-md w-full max-w-xs items-center"
              />
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
                  type="password"
                  placeholder="Type here"
                />
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
              </label>
            </label>
            <button className="btn btn-error rounded-md text-white my-4 w-3/4">Log in</button>

          </p>

          <div className="divider">or</div>

          <p className="py-4 px-16">
              <GoogleLogin
                onSuccess={() => "Successfully Logged In"}
                onError={() => "Error Logging in"}
              />
            </p>
        </div>
      </dialog>
    </>
  );
}
export default SignIn;
