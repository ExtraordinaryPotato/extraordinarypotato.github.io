class Mod extends shapez.Mod {

}

const METADATA = {
    website: "",
    author: "SuspiciouslyPotato",
    name: "Shaped Alpha",
    version: "1.0.0",
    id: "shaped",
    description: "Shaped Alpha",
    minimumGameVersion: ">=1.5.0",
    doesNotAffectSavegame: false,
    settings: {},
}

window.$shapez_registerMod(Mod, METADATA);
