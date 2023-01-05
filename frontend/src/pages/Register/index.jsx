import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../../app/slices/authSlice";
import RegisterForm from "../../components/RegisterForm";

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
