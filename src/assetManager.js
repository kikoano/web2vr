export default class AssetManager {
    constructor(scene) {
        const assets = document.getElementsByTagName("a-assets")[0];
        if (assets)
            this.assets = assets;
        else {
            this.assets = document.createElement("a-assets");
            scene.appendChild(this.assets);
        }
    }

    // update current-id attribute
    updateCurrentAssetId() {
        let currentAssetId = parseInt(this.assets.getAttribute("current-id"));
        if (!this.assets.getAttribute("current-id")) {
            this.assets.setAttribute("current-id", 0);
            currentAssetId = 0;
        }
        this.assets.setAttribute("current-id", currentAssetId + 1);
    }
    // update current-id attribute and return it.
    // used for elements (ex. video) outside a-assets tag
    updateCurrentAssetIdReturn(){
        this.updateCurrentAssetId();
        return "asset-"+this.assets.getAttribute("current-id");
    }

    // find asset if exists if not create and return it
    getAsset(path, type) {
        const assets = this.assets.getChildren();

        for (const asset of assets) {
            if (asset.getAttribute("src") === path)
                return asset.getAttribute("id");
        }

        return this.createAsset(path, type);
    }

    createAsset(path, type) {
        const asset = document.createElement(type);
        asset.setAttribute("src", path);
        this.updateCurrentAssetId();
        const id = "asset-" + this.assets.getAttribute("current-id");
        asset.setAttribute("id", id);
        // have to manualy add crossorigin for all external assets to load
        asset.setAttribute("crossorigin", "Anonymous");

        this.assets.appendChild(asset);
        return id;
    }

    removeAsset(id) {
        this.assets.querySelector("#" + id).remove();
    }
}