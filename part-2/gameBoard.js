class GameBoard {
  constructor(terrainHelper, terrainList, size) {
    this.terrainHelper = terrainHelper;
    this.terrainList = terrainList;
    this.size = size;
  }

  terrainMap() {
    const terrainMap = [];
    for (let i = 0; i < this.terrainList.length; i += this.size) {
      const array = this.terrainList.slice(i, (i + this.size));
      terrainMap.push(array);
    }

    const normalizedMap = [];
    const normalizeMap = (literalMap) => {
      if (Array.isArray(literalMap[0])) {
        literalMap.forEach((item) => normalizeMap(item));
      }
      if (!Array.isArray(literalMap[0])) {
        normalizedMap.push(literalMap.map((item) => this.terrainHelper.letterToTerrain(item)));
      }
      return normalizedMap;
    };
    return normalizeMap(terrainMap);
  }

  difficultyOfJourney(journey) {
    const fullMap = this.terrainMap();
    let pathDifficulty = 0;
    for (let i = 0; i < journey.length; i += 1) {
      const [y, x] = journey[i];
      pathDifficulty += this.terrainHelper.scoreDifficulty(fullMap[y][x]);
    }
    return pathDifficulty;
  }
}

module.exports = { GameBoard };
