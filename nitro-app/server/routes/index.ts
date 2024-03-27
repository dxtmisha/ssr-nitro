import content from "../content";

export default eventHandler((event) => {
    return content({
        title: 'Main',
        project: 'project-a',
        file: 'test'
    })
});
