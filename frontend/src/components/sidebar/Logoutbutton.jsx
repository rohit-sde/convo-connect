import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      <Link to="/login">
        {!loading ? (
          <BiLogOut
            className="w-6 h-6 text-white cursor-pointer"
            onClick={logout}
          />
        ) : (
          <span className="loading loading-spinner"></span>
        )}
      </Link>
    </div>
  );
};

export default LogoutButton;
