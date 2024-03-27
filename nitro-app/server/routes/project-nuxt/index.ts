import content from "../../content";
import {readdirSync} from "fs";
import {readFileSync} from "node:fs";

export default eventHandler((event) => {
    const file = readFileSync('./server/public/project-nuxt/main.html')

    return content({
        title: 'project-nuxt',
        project: 'project-nuxt',
        file: file.toString()
    })
});
