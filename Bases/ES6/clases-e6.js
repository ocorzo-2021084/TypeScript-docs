(() => {
  class Avenger {
    name;
    power;

    constructor(name = "No Name", power = "No Power") {
      this.name = name;
      this.power = power;
    }
  }

  class FlyingAvenger extends Avenger {
    flying;

    constructor(name, power) {
      super(name, power);
      this.flying = true;
    }
  }

  const antman = new Avenger("Antman", "Shrink and grow in size");
  console.log(antman);

  const falcon = new FlyingAvenger("Falcon", "Fly and shoot with guns");
  console.log(falcon);
})();
