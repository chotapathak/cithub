import "./profile.css";
import Pie from "../PieChart/Pie";

function Profile({ user }) {
  return (
    <div className="profile">
      <div className="details">
        <div className="profile-1">
          <div className="user-pic">
          <img src={user?.avatar_url} alt="user" />
          </div>
        <div className="profile-name">
          <h2>{user?.name}</h2>
          <b><p>@{user?.login}</p></b>
          <div id="joined-date">
          <i className="fa fa-calendar" aria-hidden="true">
          </i>
          <p>Joined {user?.created_at?.slice(0,10)}</p>
          </div>
        </div>
        </div>
        <div className="profile-bio">
          <div className="flex-col">
            <h2>{user?.public_repos}</h2>
            <p>Repositories</p>
          </div>
          <div className="flex-col">
            <h2>{user?.followers}</h2>
            <p>Followers</p>
          </div>
          <div className="flex-col">
            <h2>{user?.following}</h2>
            <p>Following</p>
          </div>
        </div>
        </div>
        <div className="pie" >
            <Pie/>
        </div>
    </div>
  );
}

export default Profile;