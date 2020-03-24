import React from "react";
import Auth from "./UseAuth";

const SignUp = () => {
  const auth = Auth();
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center mb-5 p-5">
        {auth.user ? (
          <button
            className="btn btn-primary btn-rounded"
            onClick={auth.signOut}
          >
            Sign Out
          </button>
        ) : (
          <button
            className="btn btn-primary btn-rounded"
            onClick={auth.singInWithGoogle}
          >
            Sign In with Google
          </button>
        )}
      </div>
    </div>
  );
};

export default SignUp;
