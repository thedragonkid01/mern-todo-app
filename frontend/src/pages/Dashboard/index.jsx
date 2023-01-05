import { useSelector } from "react-redux";

function Dashboard(props) {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <h3>DASHBOARD</h3>
      {user && <h5>Hi {user.name}</h5>}
    </div>
  );
}

export default Dashboard;
