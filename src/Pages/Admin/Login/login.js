import React from "react";
import "./login.scss";
import FormInput from "../../../Components/FormInput/FormInput";
import CustomButton from "../../../Components/CustomButton/CustomButton";

class AdminLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    if(email === "admin@streamlyin.com" && password === "Admin@streamly#in"){
      alert("login successful") ;
    } else {
      alert("Error!")
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      email : value
    })
  };

  handlePassword = event => {
    const { value, name } = event.target;
    this.setState({
      password : value
    })
  }

  render() {
    return (
      <div className="signin">
        {/* <div
          className="signin__bg"
          style={{ backgroundImage: `url(${Background})` }}
        /> */}
        <div className="signin__container">
          <div className="signin__shadow">
            <h1 className="signin__title">Sign In As Admin</h1>

            <form
              action="POST"
              autoComplete="new-password"
              onSubmit={this.handleSubmit}
            >
              <FormInput
                name="email"
                type="email"
                value={this.state.email}
                handleChange={this.handleChange}
                label="Email"
                required
              />

              <FormInput
                name="password"
                type="password"
                value={this.state.password}
                handleChange={this.handlePassword}
                label="Password"
                required
              />

              <div className="signin__btn-container">
                <div className="signin__btn">
                  <CustomButton type="submit" signin>
                    {" "}
                    Sign In{" "}
                  </CustomButton>
                  {/* <CustomButton onClick={signInWithGoogle}>
                    <FontAwesomeIcon icon={faGoogle} className="signin__google-icon" />
                    Sign In With Google
                  </CustomButton> */}
                </div>
              </div>
            </form>
            {/* <div className="signin__option">
              <span className="signin__option--newuser">New to Netflix?</span>
              <Link to="/signup" className="signin__option--link">
                Sign up now.
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default AdminLogin;
