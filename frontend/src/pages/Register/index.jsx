import RegisterForm from "../../components/RegisterForm";
import { useDispatch, useSelector } from "react-redux";
import { reset, register } from "../../app/slices/authSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isSuccess, isError, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [isError, isSuccess, user, dispatch, message, navigate]);

  const handleFormSubmit = (formData) => {
    console.log("submit", formData);
    const userData = { ...formData };
    dispatch(register(userData));
  };

  return (
    <div>
      <h4 className="text-center">Register For New Account</h4>
      <div className="d-flex justify-content-center">
        <div className="w-50">
          <RegisterForm onFormSubmit={handleFormSubmit} />
        </div>
      </div>
    </div>
  );
}

export default Register;
