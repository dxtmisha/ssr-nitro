import content from "../../content";
import {readFileSync} from "node:fs";

export default eventHandler(async (event) => {
    const file = readFileSync(`./server/public${event.path}main.html`)

    return content({
        title: 'project-nuxt',
        project: 'project-nuxt',
        file: file.toString()
    })
});
