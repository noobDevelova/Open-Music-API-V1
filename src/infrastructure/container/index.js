const Container = require('./Container');

class ContainerProvider {
  static instance = null;

  static getInstance = () => {
    if (!ContainerProvider.instance) {
      ContainerProvider.instance = new Container();
    }

    return ContainerProvider.instance;
  };
}

module.exports = ContainerProvider;
