import content from "../content";

import file from '../public/project-a/index'

export default eventHandler((event) => {
    return content({
        title: 'project-a',
        project: 'app-project-a',
        file: 'hi'
    })
});
