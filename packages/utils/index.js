import Keycloak from "keycloak-js";

export const initKeycloak = async (init) => {
  const keycloak = new Keycloak(init);

  try {
    await keycloak.init({ onLoad: "login-required" });
  } catch (err) {
    console.error(err);
  }

  return keycloak;
};
