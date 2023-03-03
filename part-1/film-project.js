class FilmProject {
  constructor(args = {}) {
    this.title = args.title;
    this.director = args.director;
    this.cast = args.cast;
    this.castingBudget = args.castingBudget;
  }

  remainingBudget() {
    const actorsSalary = this.cast.reduce((acc, actor) => acc + actor.salary, 0);
    return this.castingBudget - actorsSalary;
  }

  addActor(newActor) {
    if (newActor.salary >= 5000000) return false;
    this.cast = [...this.cast, newActor];
    return true;
  }

  headliners() {
    const popularActors = this.cast.filter((item) => {
      if (item.popularityRating > 8) return true;
      return false;
    });
    return popularActors;
  }
}

module.exports = { FilmProject };
