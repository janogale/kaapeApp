const msalConfig = {
  auth: {
    clientId: "1f3638e6-110b-40cf-b34e-1cd82dbc7908",
    authority:
      "https://kaabeapp.b2clogin.com/kaabeapp.onmicrosoft.com/b2c_1_asusi",
    audience: "1f3638e6-110b-40cf-b34e-1cd82dbc7908",
    //redirectUri: 'http://localhost:3000/callback'
    redirectUri: "/",
    postLogoutRedirectUri: "/",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

const loginRequest = {
  scopes: [
    "openid",
    "profile",
    "offline_access",
    "https://kaabeapp.onmicrosoft.com/24eee6ed-1a3a-4bb7-8c5b-36b49f9c4d19/Kaabe.Api",
  ],
};

export { msalConfig, loginRequest };
