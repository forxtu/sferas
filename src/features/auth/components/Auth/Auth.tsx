import React from 'react';

// Hooks
import useAuth from 'features/auth/hooks/useAuth';

// Types
import type { ReactElement } from 'react';

const Auth = (): ReactElement => {
  const { userAuthInfo, handleSetUserAuthInfo, logIn, signUp } = useAuth();

  return (
    <div>
      <form>
        <div>
          <input
            value={userAuthInfo.email}
            onChange={handleSetUserAuthInfo}
            type="email"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div>
          <input
            value={userAuthInfo.password}
            onChange={handleSetUserAuthInfo}
            type="password"
            name="password"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" onClick={logIn}>
          Login
        </button>
        <button onClick={signUp}>Signup</button>
      </form>
    </div>
  );
};

export default Auth;
