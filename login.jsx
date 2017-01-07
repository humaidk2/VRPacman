var LoginForm = (props) => (
  <form id="loginForm">
    <div>
      <label>Username:</label>
      <input type="text" name="username" id="login-username"/>
    </div>
    <div>
      <label>Password:</label>
      <input type="text" name="password"/>
    </div>
    <div>
      <input type="submit" value="Log In" onClick={props.loginFormSubmit}/>
    </div>
  </form>

);


window.LoginForm = LoginForm;