import DataController from "../Controller/Controller";

class DataBuilder {
    userBuilder() {
      return {
        loginBuilder: function(email, password) {
          return DataController.loginUser(email, password);
        },
        CadastrarBuilder: function(email, password) {
          return DataController.cadastrarUser(email, password);
        },
      };
    }
  }
  
  export default new DataBuilder();
  