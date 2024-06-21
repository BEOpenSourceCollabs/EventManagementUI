import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

function SignUp({ open, setModal }: { bool; any }) {
  if (open) {
    document.getElementById("my_modal_3")?.showModal();
  }
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setModal(false)}
            >
              ✕
            </button>
          </form>
          <h1 className="font-bold text-xl text-center">Sign Up</h1>
          <p className="py-4 text-center">
            Already a member? <Link to="">Log In</Link>
            <br />
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
export default SignUp;
