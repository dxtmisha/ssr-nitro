import content from "../content";

import file from '../public/project-b/index'

export default eventHandler((event) => {
    return content({
        title: 'project-b',
        project: 'app-project-b',
        file: file
    })
});
