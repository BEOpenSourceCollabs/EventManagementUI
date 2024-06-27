import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

function SignUp() {
  return (
    <>
      <dialog id="signup_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <h1 className="font-bold text-center">Sign Up</h1>
          <p className="py-4 text-center">
            Already a member? <a className="link no-underline link-primary" onClick={()=>{ document.getElementById('login_modal').showModal();document.getElementById('signup_modal')?.close()}} >Log In</a>
            <br />
            <p className="py-4">
            <GoogleLogin
              
              onSuccess={() => "Successfully Logged In"}
              onError={() => "Error Logging in"}
            />
            </p>
            <p className="py-4">
              <button></button>
            </p>
          </p>
        </div>
      </dialog>
    </>
  );
}
export default SignUp;
