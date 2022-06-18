const modules = {
  moduleList: ["login", "store", "appointments"],
  config: {
    login: {
      path: "/login",
      name: "Login",
    },
    store: {
      path: "/store",
      name: "Pharmacy",
      productsPath: "/store/products",
    },
    appointments: {
      path: "/appointments",
      name: "Appointments",
    },
  },
};

export default modules;
