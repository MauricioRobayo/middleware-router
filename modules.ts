const modules = {
  moduleList: ["login", "store", "appointments"],
  config: {
    login: {
      path: "/login",
      name: "Login",
    },
    store: {
      path: "/",
      name: "Pharmacy",
      productsPath: "/products",
    },
    appointments: {
      path: "/appointments",
      name: "Appointments",
    },
  },
};

export default modules;
