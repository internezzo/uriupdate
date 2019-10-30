import manifest from "@neos-project/neos-ui-extensibility";
import UriUpdateEditor from "./UriUpdateEditor";

manifest("Internezzo.UriUpdate:UriUpdateEditor", {}, globalRegistry => {
    const editorsRegistry = globalRegistry.get("inspector").get("editors");
    editorsRegistry.set("Internezzo.UriUpdate/UriUpdateEditor", {
        component: UriUpdateEditor
    });
});
