export default function formComponent() {
  const formView = `
  <div class="login-page mb-3">
    <div class="form">
      <form name="loginForm" class="login-form">
        <input id="firstName" data-testid="firstName" type="text" placeholder="First Name" />
        <input id="lastName" data-testid="lastName" type="text" placeholder="Last Name" />
        <input id="email" data-testid="email" type="email" placeholder="Email" />
        <button id="login-button" data-testid="button" type="button">Submit</button>
      </form>
    </div>
  </div>
  `;

  return formView;

}
